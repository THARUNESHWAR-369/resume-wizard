import BaseProtectedNav from "@/components/base/_base_protected.nav";
import { EbuttonCss } from "@/constant/constant";

function SettingsPage() {
    return (
        <main>
            <BaseProtectedNav />
            <section className="mb-0 my-2 tracking-wider">
                <h1 className="font-extrabold text-4xl ">Settings</h1>
                <div className="settings-container mt-3">
                    <div className="input-group bg-white rounded-md p-3 box-shadow-1 max-w-[50em]">
                        <h1 className="font-bold text-2xl">Personal details</h1>
                        <div className="divider"></div>
                        <div className="input-group-content max-w-[100%] ml-10 flex flex-col gap-2">
                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="name">Name: </label>
                                <input type="text" name="name" id="name" placeholder="JohnWick" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>
                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="email">Email: </label>
                                <input type="email" name="email" id="email" placeholder="JohnWick@email.com" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>

                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="phone">Phone: </label>
                                <input type="tel" name="phone" id="phone" placeholder="1234567890" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>

                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="address">Address: </label>
                                <textarea name="address" id="address" placeholder="House No/Apt. No. 123 - street name" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>

                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="city">City: </label>
                                <input type="text" name="city" id="city" placeholder="Pondicherry" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>

                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="state">State: </label>
                                <input type="text" name="state" id="state" placeholder="Pondicherry" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>

                            <div className="input-group-item flex flex-row gap-3 items-center align-middle">
                                <label className="font-semibold text-[1.2em]" htmlFor="country">Country: </label>
                                <input type="text" name="country" id="country" placeholder="India" className="max-w-[25em] w-[100%] outline-foreground-accent-color-2 border-2 pl-2 border-foreground-accent-color-2 rounded-md p-1" />
                            </div>


                            <div className="input-group-item w-[100%]">
                                <button className={`${EbuttonCss.GRADIENT_BTN_CSS} float-right`}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SettingsPage