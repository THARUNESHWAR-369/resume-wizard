import React from "react";

function Timeline() {
  return (
    <section className="timeline h-fit">
      <div className="timeline-container py-3">
        <div className="timeline-title">
          <h2 className="font-bold max-w-[20em] m-auto text-4xl text-center text-shadow-15">
            The Simple 5-Step Process to{" "}
            <strong className="text-foreground-accent-color-2">
              {" "}
              Create Your Perfect Resume
            </strong>
          </h2>
          <div className="divider"></div>
        </div>

        <div className="timeline-container relative max-w-[1200px] mx-auto my-16 after:content-[''] after:absolute after:w-[5px] after:h-[100%] after:bg-white after:top-0 after:left-[50%] after:ml-[-3px] after:z-[11]">
          <div className="timeline-content  px-[1.5em] py-[10px] relative w-[50%] left-[50%]">
            <div className="timeline-label border-[3px] border-foreground-accent-color-4 text-foreground-accent-color-4 font-bold bg-white flex absolute w-[35px] h-[35px] rounded-full left-[-18px] z-[12] justify-center align-middle items-center top-1/2 transform -translate-y-1/2">
              <p>1</p>
            </div>
            <div className="timeline-text-box px-[1em] py-[0.65em] bg-white box-shadow-1 relative rounded-[0.3125em] text-[0.9375em]">
              <h2 className="font-bold text-left text-foreground-accent-color-3">
                Sign Up
              </h2>
              <div className="divider"></div>
              <p>
                Create your account with ResumeWizard to access our platform.
              </p>
              <span className="left-timeline-container-arrow  h-0 w-0 absolute left-[-7px] top-[50%] translate-y-[-50%] z-[-1] border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px] border-r-foreground-accent-color-4"></span>
            </div>
          </div>

          <div className="timeline-content  px-[1.5em] py-[10px] relative w-[50%] left-0">
            <div className="timeline-label border-[3px] border-foreground-accent-color-4 text-foreground-accent-color-4 font-bold bg-white flex absolute w-[35px] h-[35px] rounded-full right-[-18px] z-[12] justify-center align-middle items-center top-1/2 transform -translate-y-1/2">
              <p>2</p>
            </div>
            <div className="timeline-text-box px-[30px] py-[0.65em] bg-white box-shadow-1 relative rounded-[0.3125em] text-[0.9375em]">
              <h2 className="font-bold text-right text-foreground-accent-color-3">
                Choose a Template
              </h2>
              <div className="divider"></div>
              <p className="text-right">
                Select from a variety of templates that suit your style and
                preferences
              </p>
              <span className="right-timeline-container-arrow h-0 w-0 absolute right-[-7px] top-[50%] translate-y-[-50%] z-[-1] border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-l-[15px] border-l-foreground-accent-color-4"></span>
            </div>
          </div>

          <div className="timeline-content  px-[1.5em] py-[10px] relative w-[50%] left-[50%]">
            <div className="timeline-label border-[3px] border-foreground-accent-color-4 text-foreground-accent-color-4 font-bold bg-white flex absolute w-[35px] h-[35px] rounded-full left-[-18px] z-[12] justify-center align-middle items-center top-1/2 transform -translate-y-1/2">
              <p>3</p>
            </div>
            <div className="timeline-text-box px-[1em] py-[0.65em] bg-white box-shadow-1 relative rounded-[0.3125em] text-[0.9375em]">
              <h2 className="font-bold text-left text-foreground-accent-color-3">
                Enter Information
              </h2>
              <div className="divider"></div>
              <p>
                Add your personal details and work experience to your chosen
                template.
              </p>
              <span className="left-timeline-container-arrow  h-0 w-0 absolute left-[-7px] top-[50%] translate-y-[-50%] z-[-1] border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px] border-r-foreground-accent-color-4"></span>
            </div>
          </div>

          <div className="timeline-content  px-[1.5em] py-[10px] relative w-[50%] left-0">
            <div className="timeline-label border-[3px] border-foreground-accent-color-4 text-foreground-accent-color-4 font-bold bg-white flex absolute w-[35px] h-[35px] rounded-full right-[-18px] z-[12] justify-center align-middle items-center top-1/2 transform -translate-y-1/2">
              <p>4</p>
            </div>
            <div className="timeline-text-box px-[30px] py-[0.65em] bg-white box-shadow-1 relative rounded-[0.3125em] text-[0.9375em]">
              <h2 className="font-bold text-right text-foreground-accent-color-3">
                Customize
              </h2>
              <div className="divider"></div>
              <p className="text-right">
                Edit and tailor your CV to fit your needs using our easy-to-use
                editor.
              </p>
              <span className="right-timeline-container-arrow  h-0 w-0 absolute right-[-7px] top-[50%] translate-y-[-50%] z-[-1] border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-l-[15px] border-l-foreground-accent-color-4"></span>
            </div>
          </div>

          <div className="timeline-content  px-[1.5em] py-[10px] relative w-[50%] left-[50%]">
            <div className="timeline-label border-[3px] border-foreground-accent-color-4 text-foreground-accent-color-4 font-bold bg-white flex absolute w-[35px] h-[35px] rounded-full left-[-18px] z-[12] justify-center align-middle items-center top-1/2 transform -translate-y-1/2">
              <p>5</p>
            </div>
            <div className="timeline-text-box px-[1em] py-[0.65em] bg-white box-shadow-1 relative rounded-[0.3125em] text-[0.9375em]">
              <h2 className="font-bold text-left text-foreground-accent-color-3">
                Download
              </h2>
              <div className="divider"></div>
              <p>
                Export your resume as a PDF with one click for easy sharing and
                printing.
              </p>
              <span className="left-timeline-container-arrow  h-0 w-0 absolute left-[-7px] top-[50%] translate-y-[-50%] z-[-1] border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px] border-r-foreground-accent-color-4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
