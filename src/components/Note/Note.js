import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { UpdateNoteForm } from 'components/UpdateNoteForm/UpdateNoteForm';

export class Note extends Component {
  state = {
    modalOpen: false,
  };

  toggleModalNote = () =>
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));

  render() {
    const {
      note: { title, description, id },
      onDelete,

      updateNote,
    } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={() => onDelete(id)}>
          delete note
        </button>
        <button tepe="button" onClick={() => this.toggleModalNote()}>
          update note
        </button>
        {this.state.modalOpen && (
          <Modal onClose={this.toggleModalNote}>
            <UpdateNoteForm
              updateNote={updateNote}
              title={title}
              description={description}
              id={id}
              openModal={this.toggleModalNote}
            />
          </Modal>
        )}
      </>
    );
  }
}
