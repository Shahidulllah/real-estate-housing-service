import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
   const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>{user.displayName}</h1>
            {/* <img src={user.photoURL} alt="" /> */}
        </div>
    );
};

export default UserProfile;