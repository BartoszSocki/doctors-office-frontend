import EditButton from "@Components/Buttons/EditButton";
import "./style.css";
import { FiChevronDown } from "react-icons/fi";

const NotesListHeader = () => {
  return (
    <li className="note">
      <FiChevronDown style={{ visibility: "hidden" }} />
      <b>name</b>
      <div />
      <b>creation</b>
      <b>modification</b>
      <EditButton style={{ visibility: "hidden" }}>edit</EditButton>
    </li>
  );
};

const NotesList = ({ children }: any) => {
  return (
    <ul className="notes">
      <NotesListHeader />
      {children}
    </ul>
  );
};

export default NotesList;
