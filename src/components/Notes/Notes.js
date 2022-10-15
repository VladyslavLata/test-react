import { Note } from 'components/Note/Note';

export const Notes = ({
  notes,
  onDelete,

  updateNote,
}) => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <Note note={note} onDelete={onDelete} updateNote={updateNote} />
        </li>
      ))}
    </ul>
  );
};
