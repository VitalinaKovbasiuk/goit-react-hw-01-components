import React from "react";
import PropTypes from "prop-types";

export default function FriendList ({ friends }) {
    return (
        <ul className="friend-list">
  {friends.map((friends) => (
<li className="item"  key={friends.id}>
  <span className="status">{friends.isOnline}</span>
  <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
  <p className="name">{friends.name}</p>
</li>
  ))}
</ul>
        );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }),
      ),
  };