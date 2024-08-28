import { useEffect, useState } from "react";
import { Plus, Trash } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { createProjectNote, getProjectNotes } from "./projectSlice";
import ButtonSpinner from "../../ui/ButtonSpinner";
import ListEmpty from "../../ui/ListEmpty";
function ProjectNotes() {
  const { currentProject, getNotesStatus } = useSelector(
    (state) => state.projects
  );
  const DISPATCH = useDispatch();
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const comment = {
      text,
      createdBy: "",
      createdFrom: currentProject.id,
    };
    DISPATCH(createProjectNote(comment));
  }
  return (
    <>
      <form action="" className="add-project-note" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          {getNotesStatus === "creating" ? <ButtonSpinner /> : <Plus />}
        </button>
      </form>
      <ProjectNoteList />
    </>
  );
}

function ProjectNoteList() {
  const DISPATCH = useDispatch();
  const { projectNotes, currentProject } = useSelector(
    (state) => state.projects
  );
  useEffect(() => {
    DISPATCH(getProjectNotes(currentProject.id));
  }, []);
  return (
    <div className="note-list">
      {projectNotes.length > 0 ? (
        projectNotes.map((note) => <NoteItem note={note} key={note.id} />)
      ) : (
        <ListEmpty>Sem nenhuma nota</ListEmpty>
      )}
    </div>
  );
}
function NoteItem({ note }) {
  return (
    <div className="note-item">
      <img src="me.jpg" alt="" />
      <div className="note-content">
        <h4>Manasse Timóteo</h4>
        <p className="note-text">{note.text}</p>
      </div>
      <button>
        <Trash />
      </button>
    </div>
  );
}
export default ProjectNotes;
