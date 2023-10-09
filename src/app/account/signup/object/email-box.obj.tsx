import Link from "next/link";
import IValidateCallback from "../interface/signup.interfaces";

/* Get email object */
export function emailObject(validateCallBack: IValidateCallback) {
  const inputFiledID = "email";
  return (
    <div className="email-object w-full h-full p-4 relative">
      <div className="email-object-cont">
        <span className="flex ">
          <h3 className="font-normal">Tell your Email?</h3>
        </span>
        <div className="divider bg-slate-500"></div>
        <div
          className="error-container p-1 text-foreground-accent-color-1 font-bold text-sm hidden"
          id={`error-container-${inputFiledID}`}
        >
          <span className="flex gap-1">
            <p id={`error-container-${inputFiledID}-p`}>Error</p>
          </span>
        </div>
        <div className="input-group">
          <div className="input-group-icon relative">
            <span className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              id={inputFiledID}
              required
              className="border-[2px] border-foreground-accent-color-3 rounded-md outline-none p-1 pl-9 text-sm max-w-[25em] w-full transition-all duration-300"
              placeholder="johnwick@email.com"
              onChange={(e) => {
                validateCallBack(inputFiledID);
              }}
            />
          </div>
        </div>
        <div className="object-button pb-2 pt-3 relative w-full flex justify-between align-middle items-center">
          <Link href="/account/signin" className="h-fit">
            <p className="text-xs font-semibold underline text-gray-500">Already have an account?</p>
          </Link>
          <div className="get-otp-btn float-right " id="get-otp-btn">
            <button
              onClick={(e) => {
                validateCallBack(inputFiledID, true);
              }}
              className="border-[2px] border-foreground-accent-color-3 rounded-md px-2 py-1 text-foreground-accent-color-3 cursor-pointer hover:border-foreground-accent-color-2 hover:bg-foreground-accent-color-2 hover:text-white transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
