import React from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default class UserCard extends React.Component {
  render() {
    const { microphone_muted, user_profile, username } = this.props;
    return (
      <div className="card">
        <div>
          {microphone_muted === true ? (
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
