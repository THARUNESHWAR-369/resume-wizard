"use client";

import { FirebaseFirestoreService } from '@/firebase/services/firestore/firestore.service'
import React, { useLayoutEffect, useState } from 'react'
import CardComponent from './card.component';
import { ITemplateComponent } from './interface/component.interface';

function CreateResumeComponent() {

  const [templates, setTemplates] = useState<any | null>([]);


  useLayoutEffect(() => {
    FirebaseFirestoreService.readData(process.env.NEXT_PUBLIC_FIREBASE_COLLECTION_TEMPLATES || '')
      .then((resTemplates) => {
        setTemplates(resTemplates);
      })
      .catch((error: any) => { console.log(error); })
  }, []);

  return (
    <section className="mb-0 tracking-wider">
      <div className="title font-bold text-3xl py-5">
        <h1>Create Resume</h1>
      </div>
      <div className="create-resume-container bg-[#dddddd36] max-h-[100%] h-[100%] w-[100%] rounded-md">
        <div className="create-resume-content p-5">
          <div className="cards flex flex-wrap gap-4">

            {templates.map((template: ITemplateComponent, index: React.Key | null | undefined) => (
              <CardComponent key={index} templateData={template} />
            ))}
            <CardComponent templateData={null} />
            <CardComponent templateData={null} />
            <CardComponent templateData={null} />


          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateResumeComponent