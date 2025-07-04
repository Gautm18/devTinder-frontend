import React, { useRef, useState } from "react";
import UserNameInput from "../lib-components/userNameInput";
import EmailInput from "../lib-components/emailInput";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
  );

  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  const handleAddSkill = () => {
    const trimmed = currentSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="h-[83vh] flex flex-col bg-base-200">
      {/* Main Content */}
      <div className="flex flex-row justify-center gap-16 pt-10 px-10 flex-1 overflow-auto">
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
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input input-bordered"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input input-bordered"
          />

          <UserNameInput />
          <EmailInput />

          {/* Skills Input & Chips */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Type a skill"
                className="input input-bordered flex-1"
              />
              <button className="btn" onClick={handleAddSkill}>
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="badge badge-outline badge-primary flex items-center gap-1"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-1 text-xs text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <input
            type="datetime-local"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Age"
            className="input input-bordered"
          />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between px-10 pt-5 bg-base-200">
        <button className="btn btn-wide">Save</button>
        <button className="btn btn-wide">Preview</button>
      </div>
    </div>
  );
};

export default Profile;
