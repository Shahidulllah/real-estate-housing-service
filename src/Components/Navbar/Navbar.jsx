import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User Logged out'))
            .catch(error => console.error(error))
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/user-profile'>User Profile</NavLink></li>
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
                            <ul className="menu menu-horizontal px-1 mr-20 flex gap-5 font-bold">
                                {navlinks}
                            </ul>
                        </div>
                        {
                            user ? <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className=" rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>

                                    {/* Dropdown */}
                                    <ul tabIndex={0} className=" z-[1] p-4 bg-slate-300 shadow menu menu-sm dropdown-content rounded-box -ml-44 lg:-ml-24 ">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-9 ">
                                                <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                            <div className="text-center font-serif">
                                                <h1 className="font-semibold">md shahidul</h1>
                                                {
                                                    user && <h2 className="text-sm">{user.email}</h2>
                                                }

                                            </div>
                                        </div>
                                        <div className="mt-5 border-y space-y-2">
                                            <li><Link to='/update-profile'>Update Profile</Link></li>
                                            <li><button onClick={handleLogOut}>Log Out</button></li>
                                        </div>
                                    </ul>
                                </div>
                            </> :
                                <div>
                                    <li> <button className=" bg-slate-500 px-2 py-3 rounded-full text-white font-extralight"><Link to='/login'>Login</Link></button></li>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;