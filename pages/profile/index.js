import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Shared/Header/Header";
import auth from "../../firebase.init";
import Loading from "../../components/Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import RequreAuth from "../../components/Shared/RequireAuth/RequireAuth";
import Layout from "../../components/LayOut";
import {
  useGetMeQuery,
  useUpdateProfileImageMutation,
} from "../../features/auth/authApi";
import { fetchUser, setUser } from "../../features/auth/authSlice";
import ProfileSideNav from "../../components/Profile/ProfileSideNav";

const profile = () => {
  const [userSocial, loading2, error2] = useAuthState(auth);
  const user = useSelector((state) => state.auth.user);
  if (loading2) {
    return <Loading></Loading>;
  }

  return (
    <Layout title="Profile - Bangladesh Mart">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ProfileSideNav />
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              <div className="tab-pane fade show active" id="account-info">
                <div className="d-flex justify-content-between">
                  <h2>Account Information</h2>
                  <h4
                    onClick={() => {
                      router.push("/profile/account-info/edit");
                    }}
                    className="btn px-2 bg-dark text-white"
                  >
                    Edit
                  </h4>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <p className="text-capitalize">
                      <strong>Name:</strong> {user?.fullName}
                      {userSocial?.displayName}
                    </p>
                    <p>
                      <strong>Email:</strong> {user?.email}
                      {userSocial?.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> 123-456-7890
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Address:</strong> 123 Main St, Anytown USA 12345
                    </p>
                    <p>
                      <strong>Payment Method:</strong> Visa **** **** **** 1234
                    </p>
                    <p>
                      <strong>Account Status :</strong> Active
                    </p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="order-history">
                <h2>Order History</h2>
                <hr />

                <p>Your order history is empty.</p>
              </div>

              <div className="tab-pane fade" id="settings">
                <h2>Settings</h2>
                <hr></hr>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value="john.doe@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value="123-456-7890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value="123 Main St, Anytown USA 12345"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="payment-method">Payment Method</label>
                    <input
                      type="text"
                      className="form-control"
                      id="payment-method"
                      value="Visa **** **** **** 1234"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequreAuth(profile);
