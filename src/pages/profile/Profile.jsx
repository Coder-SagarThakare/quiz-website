import { CONSTANTS } from "../../constants";
import { useAuth } from "../../context/AuthContext";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="h-100 ">
      {user.role === CONSTANTS.ROLE.STUDENT ? (
        <StudentProfile />
      ) : user.role === CONSTANTS.ROLE.TEACHER ? (
        <TeacherProfile />
      ) : (
        <AdminProfile />
      )}
    </div>
  );
}

export default Profile;
