import React, {useState} from "react";

const UserAvatar = ({ user, onEditProfile, onSignOut }) => {
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <div className="relative">
        <button className="flex items-center" onClick={() => setShowMenu(!showMenu)}>
          <img src={user.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <button onClick={onEditProfile} className="block w-full text-left px-4 py-2">Edit Profile</button>
            <button onClick={onSignOut} className="block w-full text-left px-4 py-2">Sign Out</button>
          </div>
        )}
      </div>
    );
  };
  
  export default UserAvatar;