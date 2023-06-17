import React from "react";
import users from "../core/Data";
import UserCard from "./userCard.component";

export default class CardContainer extends React.Component {
  render() {
    return (
      <div className="card-container">
        {users.map((value) => {
          return (
            <UserCard
              key={value.username}
              username={value.name}
              user_profile={value.profile}
              microphone_muted={Math.round(Math.random()) === 1 ? true : false}
            />
          );
        })}
      </div>
    );
  }
}
