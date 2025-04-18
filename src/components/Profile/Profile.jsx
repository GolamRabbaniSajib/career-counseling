import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail, MdPhotoCamera } from "react-icons/md";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error(`Error: ${err.code}`, {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e0eaff] py-10 px-4 flex justify-center items-center">
      <Helmet>
        <title>Career | Profile</title>
      </Helmet>

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row gap-8 items-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-neutral"
          />
          <div className="flex-1 text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-neutral-700 flex items-center justify-center md:justify-start gap-2">
              <FaUserEdit className="text-primary" />
              {user?.displayName}
            </h2>
            <p className="text-lg text-gray-600 flex items-center justify-center md:justify-start gap-2">
              <MdEmail className="text-blue-500" />
              {user?.email}
            </p>
          </div>
        </div>

        <div className="bg-neutral-100 py-4 text-center">
          <p className="text-xl font-semibold text-neutral-700">
            Update Profile Information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-medium">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-medium">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              defaultValue={user?.photoURL}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button
              className={`btn  bg-orange-500 w-full transition duration-300 ${
                isLoading && "btn-disabled"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Profile;
