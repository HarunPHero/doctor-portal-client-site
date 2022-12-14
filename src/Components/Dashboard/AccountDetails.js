import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import PrimaryButton from "../Shared/PrimaryButton";

const AccountDetails = () => {
  const [user] = useAuthState(auth);
  const userphoto = user?.photoURL;

  return (
    <div>
       <h2 className="text-2xl font-bold" style={{ color: "purple" }}>
          My Account
        </h2>
      <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure>
          <img
            className="ml-2 rounded-full ring-offset-base-100 ring-offset-2"
            src={
              userphoto ||
              "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"
            }
            alt="Album"
          /> <br />
          
        </figure>
        <div className="card-body">
          <p className="text-1xl font-bold">Customer Id:</p>
          <p className="text-1xl">{user.uid}</p>
          <p className="text-1xl font-bold">Full name:</p>
          <p className="text-1xl">{user.displayName}</p>
          <p className="text-1xl font-bold">Email address:</p>
          <p className="text-1xl">{user.email}</p>
          <p className="text-1xl font-bold">Phone:</p>
          <p className="text-1xl">{user.phoneNumber || 'N/A'}</p>
          <PrimaryButton><Link to={"/dashboard/myappointment"}>Go to your appointment</Link></PrimaryButton>
         
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
