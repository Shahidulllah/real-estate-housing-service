import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User Logged out'))
            .catch(error => console.error(error))
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user&&  
            <li><NavLink to='/user-profile'>User Profile</NavLink></li>
        }
       
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
                                            <img src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} />
                                        </div>
                                    </div>

                                    {/* Dropdown */}
                                    <ul tabIndex={0} className=" z-[1] p-4 bg-slate-300 shadow menu menu-sm dropdown-content rounded-box -ml-44 lg:-ml-24 ">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-9 mb-2 ">
                                                <img className="rounded-full" src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} />
                                            </div>
                                            <div className="text-center font-serif">
                                                <h1 className="font-semibold">{user.displayName}</h1>
                                                {
                                                    user && <h2 className="text-sm">{user?.email || 'Email not found!'}</h2>
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
                                <div className="flex  items-center gap-1"> 
                                    <li><NavLink to='/login'> <button className="font-bold text-sm hover:bg-base-300 px-4 p-2 rounded-lg">Login</button></NavLink></li>
                                    <CgProfile className="text-4xl"></CgProfile>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;