import EditButton from "@Components/Buttons/EditButton";
import "./style.css";
import RemoveButton from "@Components/Buttons/RemoveButton";

const PlannedVisit = (props: any) => {
  const { day, begTime, endTime, street, user, cancelled } = props.plannedVisit;
  const onRemove = props.onRemove;

  const begTimeFormated: string = begTime.substring(0, begTime.length - 3);
  const endTimeFormated: string = endTime.substring(0, endTime.length - 3);
  const date = new Date(Date.parse(day)).toLocaleDateString();

  const duration = `${begTimeFormated}-${endTimeFormated}`;
  const cancelledMessage = (cancelled as boolean) ? "cancelled" : "active";

  return (
    <div className="visit-wrapper">
      <div className="">{date}</div>
      <em className="">{duration}</em>
      <div className="">{street}</div>
      <div className="">{user}</div>
      <div className="">{cancelledMessage}</div>
      <div className="visit-space" />
      <div className="visit-actions">
        <EditButton>edit</EditButton>
        <RemoveButton onClick={() => onRemove()}>cancel</RemoveButton>
      </div>
    </div>
  );
};

export default PlannedVisit;
