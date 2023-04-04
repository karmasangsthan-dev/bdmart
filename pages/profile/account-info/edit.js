import { useRouter } from "next/router";
import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";

import auth from "../../../firebase.init";

import { toast } from "react-hot-toast";
import Loading from "../../../components/Shared/Loading/Loading";
import Link from "next/link";
import Layout from "../../../components/LayOut";
import ProfileSideNav from "../../../components/Profile/ProfileSideNav";

const profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [userSocial, loading2, error2] = useAuthState(auth);
  const updateProfilePhoto = () => {
    toast.error(
      "This feature is right now under development. Please try later !!",
      { id: "profileEdit" }
    );
  };

  if (loading2) {
    return <Loading></Loading>;
  }

  return (
    <Layout title="Edit Profile - Bangladesh Mart">
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
                      router.push("/profile");
                    }}
                    className="btn px-2 bg-dark text-white"
                  >
                    Save
                  </h4>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name">Name:</label>
                    <input
                      className="w-100 px-2 py-1 mb-3"
                      style={{
                        backgroundColor: "#eff0f5",
                        borderRadius: "5px",
                      }}
                      type="text"
                      placeholder="Enter Your Name"
                    />

                    <label htmlFor="name">Email:</label>
                    <input
                      className="w-100 px-2 py-1 mb-3 "
                      style={{
                        backgroundColor: "#eff0f5",
                        borderRadius: "5px",
                      }}
                      type="text"
                      defaultValue={user?.email || userSocial?.email}
                      contentEditable="false"
                      readOnly
                      disabled
                    />

                    <label htmlFor="name">Mobile Number:</label>
                    <input
                      className="w-100 px-2 py-1 mb-3"
                      style={{
                        backgroundColor: "#eff0f5",
                        borderRadius: "5px",
                      }}
                      type="number"
                      placeholder="Enter Your Mobile Number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name">Address:</label>
                    <input
                      className="w-100 px-2 py-1 mb-3"
                      style={{
                        backgroundColor: "#eff0f5",
                        borderRadius: "5px",
                      }}
                      type="text"
                      placeholder="Enter Your Address"
                    />
                    <label htmlFor="name">Payment Method:</label>
                    <input
                      className="w-100 px-2 py-1"
                      style={{
                        backgroundColor: "#eff0f5",
                        borderRadius: "5px",
                      }}
                      type="text"
                      placeholder="Enter Your Payment Method"
                    />
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

export default profile;
