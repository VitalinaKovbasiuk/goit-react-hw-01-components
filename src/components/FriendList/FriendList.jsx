import React from "react";
import PropTypes from "prop-types";
import {
  Friends,
  FriendItem,
  FriendStatus,
  FriendName,
  Avatar,
} from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map((friends) => (
        <FriendItem key={friends.id}>
          <FriendStatus status={friends.isOnline}>{friends.isOnline}</FriendStatus>
          <Avatar src={friends.avatar} alt="User avatar" width="48" />
          <FriendName>{friends.name}</FriendName>
        </FriendItem>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
