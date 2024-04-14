import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
    </>


    return (
        <div>
            <div>
                <div className="navbar bg-base-100  flex justify-between w-full px-5 mt-2">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                                {navlinks}
                            </ul>
                        </div>
                        <button className="text-xl lg:text-3xl font-bold bg-white border-none ">Housing  Corner</button>
                    </div>


                    {/* Profile */}
                    <div className="w-8/12 flex justify-end">
                        <div className="navbar-center hidden lg:flex  justify-center">
                            <ul className="menu menu-horizontal px-1 font-bold">
                                {navlinks}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className=" rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className=" z-[1] p-1 w-28 shadow menu menu-sm dropdown-content bg-base-100 rounded-box -ml-6 flex items-center">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/'>Log Out</Link></li>
                                <li><Link to='/user-profile'>User Profile</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;