import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    updateUserProfile({ displayName: name, photoURL: photo })
          .then((r) => {
            console.log(r);
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            toast.warn(`${err.code}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
          });
  }
  return (
    <div className="w-11/12 mx-auto min-h-screen flex justify-center items-center py-6">
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-4">
          <img src={user?.photoURL} alt="Shoes" className="rounded-xl w-96" />
        </figure>
        <div className="grid grid-cols-2 gap-4 px-4">
            <p>Your Email:</p>
            <p className="text-xl font-semibold">{user?.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
            <p>Name:</p>
            <p className="text-xl font-semibold">{user?.displayName}</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
              name="photo"
                type="text"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Update</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Profile;
