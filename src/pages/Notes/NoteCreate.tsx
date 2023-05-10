import NoteForm from "@Components/NoteForm/NoteForm";

import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { postRequest } from "@Utils/FetchUtils";

const NoteCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (formData: any) => {
    console.log(formData);

    await postRequest(
      `${import.meta.env.VITE_API_URL}/api/doctor/notes/planned-visit/${
        id as string
      }`,
      formData
    );
    navigate(-1);
  };

  return (
    <NoteForm
      name={"new note..."}
      content={"content..."}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default NoteCreate;
