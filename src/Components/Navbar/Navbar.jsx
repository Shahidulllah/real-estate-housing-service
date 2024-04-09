

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100  flex justify-between w-full border px-5">
                    <div className="navbar-start w-4/12">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <button className="text-xl lg:text-3xl font-bold bg-white border-none ">Housing  Corner</button>
                    </div>
                    <div className="navbar-center hidden lg:flex w-4/12 justify-center">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    {/* Profile */}
                    <div className="w-4/12 flex justify-end">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className=" rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-2 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box -ml-6 flex items-end">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;