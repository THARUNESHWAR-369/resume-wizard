import React from "react";
import Image from "next/image";
import customer3 from "@public/images/customer/customer-3.jpg";
import customer2 from "@public/images/customer/customer-2.jpg";
import customer1 from "@public/images/customer/customer-1.jpg";

function Customer() {
  return (
    <section className="customer dark:bg-gray-900">
      <div className="customer-container">
        <h2 className=" font-bold text-4xl text-center text-shadow-15">
          What Our{" "}
          <strong className="text-foreground-accent-color-2">
            Customers are Saying
          </strong>
        </h2>
        <div className="divider"></div>
        <div className="customer-content mt-[5em] px-[1em]">
          <div className="customer-cards flex flex-wrap gap-[4em] justify-center">
            <div className="customer-card bg-white rounded-md w-[15em] h-[19em] relative box-shadow-1">
              <div className="customer-card-image w-[7em] h-[7em] rounded-full absolute box-shadow-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={customer1}
                  alt="customer1"
                  loading="lazy"
                  className="object-cover rounded-full  w-full h-full"
                />{" "}
              </div>
              <div className="customer-card-content relative top-[4.2em]">
                <div className="customer-card-title">
                  <h3 className="font-bold text-xl text-center p-1">
                    <span className="text-foreground-accent-color-3">
                      Martin F.
                    </span>
                  </h3>
                  <div className="divider w-[90%] m-auto"></div>

                  <p className="text-center w-full">
                    <strong className="text-center align-middle items-center text-foreground-accent-color-4">
                      &quot;Professional and Polished&quot;
                    </strong>
                  </p>
                  <div className="customer-msg ">
                    <p className="px-3 py-1 text-ellipsis overflow-hidden">
                      <span className="text-foreground-accent-color-3">
                        <i className="fas fa-quote-left"></i>
                      </span>
                      ResumeWizard helped me land my dream job. The templates
                      are so professional and polished!
                      <span className="text-foreground-accent-color-2">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-card bg-white rounded-md w-[15em] h-[19em] relative box-shadow-1">
              <div className="customer-card-image w-[7em] h-[7em] rounded-full absolute box-shadow-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={customer2}
                  alt="customer2"
                  loading="lazy"
                  className="object-cover rounded-full  w-full h-full"
                />
              </div>
              <div className="customer-card-content relative top-[4.2em]">
                <div className="customer-card-title">
                  <h3 className="font-bold text-xl text-center p-1">
                    <span className="text-foreground-accent-color-3">
                      Jane R.
                    </span>
                  </h3>
                  <div className="divider w-[90%] m-auto"></div>

                  <p className="text-center w-full">
                    <strong className="text-center align-middle items-center text-foreground-accent-color-4">
                      &quot;Game-Changing&quot;
                    </strong>
                  </p>
                  <div className="customer-msg ">
                    <p className="px-3 py-1 text-ellipsis overflow-hidden">
                      <span className="text-foreground-accent-color-2">
                        <i className="fas fa-quote-left"></i>
                      </span>
                      Finally, an app that makes creating resumes simple. I’ve
                      recommended it to all my friends. It’s a game-changer!
                      <span className="text-foreground-accent-color-2">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="customer-card bg-white rounded-md w-[15em] h-[19em] relative box-shadow-1">
              <div className="customer-card-image w-[7em] h-[7em] rounded-full absolute box-shadow-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={customer3}
                  alt="customer3"
                  loading="lazy"
                  className="object-cover rounded-full  w-full h-full"
                />
              </div>
              <div className="customer-card-content relative top-[4.2em]">
                <div className="customer-card-title">
                  <h3 className="font-bold text-xl text-center p-1">
                    <span className="text-foreground-accent-color-3">
                      Tom H.
                    </span>
                  </h3>
                  <div className="divider w-[90%] m-auto"></div>

                  <p className="text-center w-full">
                    <strong className="text-center align-middle items-center text-foreground-accent-color-4">
                      &ldquo;Easiest Platform to Use&rdquo;

                    </strong>
                  </p>
                  <div className="customer-msg ">
                    <p className="px-3 py-1 text-ellipsis overflow-hidden">
                      <span className="text-foreground-accent-color-2">
                        <i className="fas fa-quote-left"></i>
                      </span>
                      I was impressed by how easy and user-friendly the platform
                      is. Truly the easiest platform to use for creating
                      resumes.
                      <span className="text-foreground-accent-color-2">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
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

export default Customer;
