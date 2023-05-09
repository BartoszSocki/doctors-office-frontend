import { useNavigate } from "react-router-dom";
import SidebarLink from "../SidebarElems/SidebarLink";
import "../style.css";
import SidebarButton from "../SidebarElems/SidebarButton";
import useAuth from "@Hooks/useAuth";

const SidebarClient = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="sidebar-wrapper">
      <section className="sidebar-header">
        <p>Menu</p>
      </section>

      <section className="sidebar-body">
        <ul className="sidebar-body-flex">
          <SidebarLink name={"👨‍⚕️ doctors"} to={""} key={"b"} />
          <SidebarLink name={"🔎 search visits"} to={""} key={"c"} />
          <SidebarLink name={"📅 your visits"} to={""} key={"c"} />
        </ul>
      </section>

      <div className="sidebar-space" />

      <section className="sidebar-footer">
        <ul className="sidebar-body-flex">
          {/* <SidebarLink name={"⚙️ preferences"} to={""} key={"aa"} /> */}
          <SidebarButton
            name={"🔒 log out"}
            key={"bb"}
            onClickHandler={() => logout(() => navigate("/login"))}
          />
        </ul>
      </section>
    </div>
  );
};

export default SidebarClient;