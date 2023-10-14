import React from 'react'
import Image from "next/image";
import processImg from "@public/images/process/process2.png";


function Process() {
  return (
    <section className="process h-fit">
      <div className="process-container py-3">
        <div className="process-title1">
          <h2 className=" max-w-[20em] m-auto  font-bold text-4xl text-center text-shadow-2">
            Simplify Your Resume{" "}
            <strong className="text-foreground-accent-color-2">
              Creation Process
            </strong>
          </h2>
          <div className="divider"></div>
        </div>
        <div className="process-grid">
          <div className="process-img-container">
            <div className="process-img md:max-w-[30em] md:w-[30em] max-md:max-w-[20em] max-md:w-[20em]">
              <Image
                src={processImg}
                alt="process-image"
                loading="lazy"
                className="box-shadow-25"
              />
            </div>
          </div>
          <div className=" col-start-3 col-span-2 ">
            <div className="process-title2">
              <h2 className="font-bold text-4xl text-center text-shadow-15">
                Simplify Your Resume{" "}
                <strong className="text-foreground-accent-color-2">
                  Creation Process
                </strong>
              </h2>
              <div className="divider"></div>
            </div>

            <div className="process-cards pt-5">
              <div className="cards">
                <div className="card border-none outline-none box-shadow-15 p-[1em] rounded-md w-[12em] h-fit">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="font-bold text-center text-foreground-accent-color-3">
                        Templates for Every Style
                      </h3>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                      <h4 className="text-black font-semibold">
                        With multiple templates to choose from, we’ve got you
                        covered whether you are looking for a modern, minimalist
                        or classNameic look.
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="font-bold text-center text-foreground-accent-color-3">
                        Edit and Customize Anytime
                      </h3>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                      <h4 className="text-black font-semibold">
                        No more starting from scratch every time you need to
                        update your resume. Simply log in and edit your saved
                        resumes to fit any job application.
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="font-bold text-center text-foreground-accent-color-3">
                        Easy-to-Use Interface
                      </h3>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                      <h4 className="text-black font-semibold">
                        Our intuitive interface is designed to help you create
                        professional resumes effortlessly. No design skills
                        needed!
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="card border-none outline-none box-shadow-1 w-[12em] h-fit">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="font-bold text-center text-foreground-accent-color-3">
                        One-Click PDF Export
                      </h3>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                      <h4 className="text-black font-semibold">
                        Download and share your resume as a user-friendly and
                        professional-looking PDF that impresses hiring managers.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process