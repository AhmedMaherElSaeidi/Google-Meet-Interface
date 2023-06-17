import React from "react";
import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default class UserCard extends React.Component {
  render() {
    const isMuted = microphone_muted;
    const { microphone_muted, user_profile, username } = this.props;
    return (
      <div className="card">
        <div>
          {isMuted === true ? (
            <FaMicrophoneSlash />
          ) : (
            <FaMicrophone />
          )}
        </div>
        <div>
          <img src={user_profile} alt="profile_picture" />
        </div>
        <div>
          <p>{username}</p>
        </div>
      </div>
    );
  }
}
