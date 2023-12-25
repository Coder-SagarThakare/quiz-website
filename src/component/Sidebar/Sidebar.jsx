import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { FiHome, FiMonitor } from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa6";
import { DiCode } from "react-icons/di";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import NoPage from "../Nopage/NoPage";
import HomePage from "../HomePage/HomePage";
import Topic from "../Topic/Topic";
import { programmingLanguages } from "../Utilities/Data";

const Sidebar1 = () => {
  console.log(programmingLanguages);
  const navigate = useNavigate();

  const handleViewLanguage = (subjectInfo) => {
    navigate(`/Topic/${subjectInfo.id}`, { state: { subject: subjectInfo } });
  };
  return (
    <div className="border border-primary bg-secondary w-25 m-3 p-2">
      <Menu className="fs-5 bg-secondary border border-0 p-2">
        <MenuItem
          component={<Link to="HomePage" element={<HomePage />} />}
          icon={<FaNetworkWired />}
        >
          Home
        </MenuItem>
        <SubMenu icon={<DiCode />} label="Programming Language">
          {programmingLanguages.map((subject) => {
            console.log("================================", subject.id);
            return (
              <MenuItem
                className=" item"
                key={subject.id}
                component={
                  <button onClick={() => handleViewLanguage(subject)} className="bg-secondary border-0">
                    {subject.name}
                  </button>
                }
              >
                {subject.name}
              </MenuItem>
            );
          })}
        </SubMenu>
        <SubMenu icon={<FaNetworkWired />} label="Operating System">
          <MenuItem
            className="bg-secondary"
            component={<Link to="Topic" element={<Topic />} />}
          >
            Linux
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<FaNetworkWired />} label="Networking">
          <MenuItem
            className="bg-secondary"
            component={<Link to="Topic" element={<Topic />} />}
          >
            OS model
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar1;
