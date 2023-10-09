import IValidateCallback from "../interface/signup.interfaces";

/* Get username object */
export function usernameObject(validateCallBack: IValidateCallback) {
  const inputFiledID = "username";
  return (
    <div className="username-object w-full h-full p-4">
      <div className="username-object-cont">
        <h3 className="font-normal">Tell your username?</h3>
        <div className="divider bg-slate-500"></div>
        <div
          className="error-container p-1 text-foreground-accent-color-1 font-bold text-sm hidden"
          id={`error-container-${inputFiledID}`}
        >
          <span className="flex gap-1 flex-col">
            <span className="flex gap-1">
              <p id={`error-container-${inputFiledID}-1-p`}>Error</p>
            </span>
            <span className="flex gap-1">
              <p id={`error-container-${inputFiledID}-2-p`}>Error</p>
            </span>
            <span className="flex gap-1">
              <p id={`error-container-${inputFiledID}-3-p`}>Error</p>
            </span>
            <span className="flex gap-1">
              <p id={`error-container-${inputFiledID}-4-p`}>Error</p>
            </span>
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
                width="16px"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              name="username"
              id={inputFiledID}
              required
              className="border-[2px] border-foreground-accent-color-3 rounded-md outline-none p-1 pl-8 text-sm w-[25em] transition-all duration-300"
              placeholder="johnwick"
              onChange={(e) => {
                validateCallBack(inputFiledID);
              }}
            />
          </div>
        </div>
        <div className="object-button pb-2 pt-3 float-right">
          <button
            onClick={(e) => {
              validateCallBack(inputFiledID, true);
            }}
            className="border-[2px] border-foreground-accent-color-3 rounded-md px-2 py-1 font-bold text-foreground-accent-color-3 cursor-pointer hover:border-foreground-accent-color-2 hover:bg-foreground-accent-color-2 hover:text-white transition-all duration-300"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
