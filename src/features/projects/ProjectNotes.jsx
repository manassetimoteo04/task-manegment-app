import { Plus, Trash } from "react-feather";

function ProjectNotes() {
  return (
    <>
      <form action="" className="add-project-note">
        <input type="text" placeholder="Add Note" />
        <button>
          <Plus />
        </button>
      </form>
      <ProjectNoteList />
    </>
  );
}

function ProjectNoteList() {
  return (
    <div className="note-list">
      <NoteItem />
    </div>
  );
}
function NoteItem() {
  return (
    <div className="note-item">
      <img src="me.jpg" alt="" />
      <div className="note-content">
        <h4>Manasse Timóteo</h4>
        <p className="note-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <button>
        <Trash />
      </button>
    </div>
  );
}
export default ProjectNotes;
