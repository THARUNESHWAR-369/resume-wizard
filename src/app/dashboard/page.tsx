import React from "react";
import BaseProtectedNav from "@/components/base/_base_protected.nav";
import NoResumeFoundErrorPage from "./(dashboard-components)/no-resumes-found.error";

function Dashboard() {

  return (
    <div>
      <BaseProtectedNav />
      <NoResumeFoundErrorPage/>
    </div>
  );
}

export default Dashboard;
