import "./rightbar.css";
import { Users } from "../../dummyData";
// import Online from "../online/Online";

import React from "react";
import { useNavigate } from "react-router-dom";



import CloseFriend from "../closeFriend/CloseFriend";

export default function Rightbar({ profile }) {
  // const HomeRightbar = () => {
  //   return (
  //     <>
  //       <div className="birthdayContainer">
  //         <img className="birthdayImg" src="assets/gift.png" alt="" />
  //         <span className="birthdayText">
  //           <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
  //         </span>
  //       </div>
  //       <img className="rightbarAd" src="assets/ad.png" alt="" />
  //       <h4 className="rightbarTitle">Online Friends</h4>
  //       <ul className="rightbarFriendList">
  //         {Users.map((u) => (
  //           <Online key={u.id} user={u} />
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };

  const ProfileRightbar = () => {

    const navigate = useNavigate();

    function handleClick() {
      navigate('/chat', { replace: true });
    }

    return (
      <>
        {/* <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div> */}
        {/* <button onClick={handleClick} className="button-component">Chat</button> */}

        <h2 onClick={handleClick} className="chat-heading">Chat</h2>


        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>

      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
        <ProfileRightbar />
      </div>
    </div>
  );
}
