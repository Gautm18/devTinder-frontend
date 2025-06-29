import React, { useRef, useState } from "react";
import UserNameInput from "../lib-components/userNameInput";
import EmailInput from "../lib-components/emailInput";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
  );

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  return (
    <div className="h-[83vh] flex flex-col bg-base-200">
    {/* Main Content */}
    <div className="flex flex-row justify-center gap-16 pt-10 px-10 flex-1">
      {/* Avatar + Change Picture */}
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-52 h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img src={imagePreview} alt="Profile Preview" />
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="pt-5">
          <button className="btn btn-wide" onClick={handleChooseFile}>
            Change Picture
          </button>
        </div>
      </div>
  
      {/* Input Form */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <UserNameInput />
        <EmailInput />
        <input type="datetime-local" className="input input-bordered w-full" />
        <input type="text" placeholder="Age" className="input input-bordered" />
        <textarea className="textarea textarea-bordered" placeholder="Bio" />
      </div>
    </div>
    <div className="flex justify-between px-10 pt-5 bg-base-200">
      <button className="btn btn-wide">Save</button>
      <button className="btn btn-wide">Preview</button>
    </div>
  </div>
  
  );
};

export default Profile;
