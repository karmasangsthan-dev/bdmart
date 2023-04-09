import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfileImageMutation } from "../../features/auth/authApi";
import { AiFillCamera } from "react-icons/ai";
import { fetchUser } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
export default function ProfileSideNav() {
  const [token, setToken] = useState();
  const inputFile = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token);
  }, []);

  const [updateProfile, { isSuccess, isLoading }] =
    useUpdateProfileImageMutation({
      onSettled: () => api.invalidateTags("User"),
    });

  /**--------------  get custom user from redux store-----------------*/
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "updateProfile" });
    }
    if (isSuccess) {
      dispatch(fetchUser(token));
      toast.success("Updated successful !!", { id: "updateProfile" });
    }
  }, [isSuccess]);

  /**---------- open file by button click ----------*/
  const updateProfilePhoto = () => {
    inputFile.current.click();
  };
  const handleFileChange = (event) => {
    const id = user?._id;

    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    const data = new FormData();
    data.append("image", fileObj);
    updateProfile({ id, token, data });
  };
  //
  return (
    <div className="profile-sidebar">
      <div
        style={{ flexDirection: "column" }}
        className="profile-userpic d-flex justify-content-center align-items-center"
      >
        <img
          className="profile-img"
          style={{ borderRadius: "50%" }}
          src={user?.profilePicture || "https://i.ibb.co/x258KZb/profile.jpg"}
          alt=""
        />
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <AiFillCamera
          onClick={updateProfilePhoto}
          style={{ fontSize: "2.2rem" }}
          className="profile-upload-img"
        ></AiFillCamera>
      </div>
      <div className="profile-usertitle">
        <div className="profile-usertitle-name text-capitalize">
          {user?.fullName}
        </div>
        <div className="profile-usertitle-job">Customer</div>
      </div>
      <div className="profile-usermenu">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Account Information
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Order History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
