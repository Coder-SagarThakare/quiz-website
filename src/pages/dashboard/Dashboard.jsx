import React from "react";
import { useAuth } from "../../context/AuthContext";
import { CONSTANTS } from "../../constants";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import AdminDashboard from "./AdminDashboard";

function Dashboard() {
  const { user } = useAuth();

  console.log(user);
  return (
    <div className="h-100" >
      {user.role === CONSTANTS.ROLE.STUDENT ? (
        <StudentDashboard />
      ) : user.role === CONSTANTS.ROLE.TEACHER ? (
        <TeacherDashboard />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default Dashboard;
