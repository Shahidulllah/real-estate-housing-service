import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center mt-3 p-7 rounded-xl bg-green-100">     
            <div className="card w-96 bg-base-300 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="Shoes" className=" w-full rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName || 'Unknown'}</h2>
                    <p><span>E-mail: </span> {user?.email || 'Email not found'}</p>
                    <div className="card-actions mt-10 w-full">
                        <button className="btn w-full btn-primary font-bold text-white">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;