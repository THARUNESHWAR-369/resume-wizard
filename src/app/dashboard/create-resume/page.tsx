import BaseProtectedNav from "@/components/base/_base_protected.nav";
import React from "react";
import CardComponent from "../(dashboard-components)/card.component";
import CreateResumeComponent from "../(dashboard-components)/create-resume.component";

function CreateResumePage() {

  return (
    <main>
      <BaseProtectedNav />
      <CreateResumeComponent/>
    </main>
  );
}

export default CreateResumePage;
