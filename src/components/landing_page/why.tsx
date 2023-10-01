

import React from 'react'

function Why() {
  return (
    <section className="why h-fit">
      <div className="why-container py-3">
        <div className="why-title">
          <h2 className=" font-bold text-4xl text-center text-shadow-15">
            The Benefits of Using
            <strong className="text-foreground-accent-color-2">
              {" "}
              ResumeWizard
            </strong>
          </h2>
          <div className="divider"></div>
        </div>
        <div className="why-cards pt-2">
          <div className="cards">
            <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="font-bold text-center text-foreground-accent-color-3">
                    SAVE TIME
                  </h3>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                  <h4 className="text-black font-semibold">
                    You don&apos;t have to waste hours designing your resume
                    from scratch anymore. ResumeWizard&rsquo;s streamlined
                    process will get you results in minutes.
                  </h4>
                </div>
              </div>
            </div>

            <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="font-bold text-center text-foreground-accent-color-3">
                    STAND OUT
                  </h3>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                  <h4 className="text-black font-semibold">
                    Get noticed by hiring managers with top-notch, polished
                    resumes that showcase what sets you apart from the rest.
                  </h4>
                </div>
              </div>
            </div>

            <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="font-bold text-center text-foreground-accent-color-3">
                    VERSATILE
                  </h3>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                  <h4 className="text-black font-semibold">
                    ur platform lets you create different resumes tailored for
                    different job applications, increasing your chances of
                    success.
                  </h4>
                </div>
              </div>
            </div>

            <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="font-bold text-center text-foreground-accent-color-3">
                    ACCESSIBLE
                  </h3>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                  <h4 className="text-black font-semibold">
                    No LaTeX skills? No problem! ResumeWizard is accessible to
                    everyone, regardless of technological proficient
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why