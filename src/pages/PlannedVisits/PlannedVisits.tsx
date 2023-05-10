import { getToken } from "@Utils/TokenUtils";
import "./style.css";

import axios from "axios";
import usePlannedVisits from "@Hooks/usePlannedVisits";
import useAuth from "@Hooks/useAuth";
import PlannedVisitListElem from "@Components/ListElem/PlannedVisitListElem";

const PlannedVisits = () => {
  const { plannedVisits } = usePlannedVisits();
  const { role } = useAuth();

  return (
    <div className="planned-visits">
      {plannedVisits.map((p) => {
        const cancel = async () => {
          console.log("this");
          await axios.delete(p._links.self.href, {
            headers: { Authorization: `Bearer ${getToken()}` },
          });
        };
        const user =
          role === "CLIENT"
            ? `${p.clientName} ${p.clientSurname}`
            : `dr. ${p.doctorName} ${p.doctorSurname}`;
        return (
          <PlannedVisitListElem
            plannedVisit={{
              ...p,
              user,
            }}
            onRemove={cancel}
            key={p.id}
          />
        );
      })}
    </div>
  );
};

export default PlannedVisits;
