import { Component } from 'react';
import { InfoPigText } from './InfoPigText/InfoPigText';
import { PigsList } from './PigsList/PigsList';
import dataPigs from '../dataPigs.json';
import { Modal } from './Modal/Modal';
import { FormSearchPokemon } from './FormSearchPokemon/FormSearchPokemon';
import { PokemonInfo } from './PokemonInfo/PokemonInfo';
import { CreateNoteForm } from './CreateNoteForm/CreateNoteForm';
import * as API from '../Api/Api';
import { Notes } from './Notes/Notes';

export class App extends Component {
  state = {
    selectedCardLabel: 'Choose a pig',
    openModal: false,
    pokemonName: '',
    notes: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const notes = await API.getNotes();
      this.setState({ notes });
    } catch (error) {
      console.error(error.message);
    }
  }

  toggleModal = () =>
    this.setState(({ openModal }) => ({ openModal: !openModal }));

  selectCardLabel = label => {
    this.setState({ selectedCardLabel: label });
  };

  getPokemonName = pokemonName => {
    this.setState({ pokemonName });
  };

  addNote = async values => {
    try {
      const note = await API.addNoteOnBackend(values);
      console.log(note);
      this.setState(prevState => ({ notes: [note, ...prevState.notes] }));
    } catch (error) {
      this.setState({ error });
      console.error(error.message);
    }
  };

  deleteNote = async id => {
    try {
      await API.removeNote(id);
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error.message);
    }
  };

  updateNote = async note => {
    const responsUpdateNote = await API.updateNote(note);
    this.setState(prevState => ({
      notes: prevState.notes.map(n =>
        n.id !== responsUpdateNote.id ? n : responsUpdateNote
      ),
    }));
  };

  render() {
    return (
      <>
        <InfoPigText text={this.state.selectedCardLabel} />
        <PigsList dataPigs={dataPigs} onSelect={this.selectCardLabel} />
        <button typ="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.openModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Hello!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              culpa architecto enim excepturi officia assumenda officiis non
              cupiditate, ipsum dolorum repellendus temporibus ullam similique
              rerum omnis? Assumenda qui ad placeat.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        {/* Pokemon */}
        <FormSearchPokemon onSubmit={this.getPokemonName} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        {/* Notes */}
        <CreateNoteForm addNote={this.addNote} />
        <Notes
          notes={this.state.notes}
          onDelete={this.deleteNote}
          updateNote={this.updateNote}
        />
      </>
    );
  }
}
