const ProfileCard = ({ user }) => {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-base-200">
        <div className="card card-side bg-base-100 shadow-xl w-[700px] h-[400px]">
          <figure className="w-1/2 h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Profile"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </figure>
  
          <div className="card-body w-1/2 space-y-2">
            <h2 className="card-title text-2xl font-bold">
              {user?.firstName} {user?.lastName}
            </h2>
  
            <p className="text-sm text-gray-600">{user?.bio || "No bio available."}</p>
  
            <div>
              <p className="font-semibold mt-2">Skills:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user?.skills?.length > 0 ? (
                  user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="badge badge-outline badge-primary text-xs"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400">No skills listed.</span>
                )}
              </div>
            </div>
  
            <div className="card-actions justify-end mt-auto">
              <button className="btn btn-success btn-sm">Interested</button>
              <button className="btn btn-error btn-sm">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  