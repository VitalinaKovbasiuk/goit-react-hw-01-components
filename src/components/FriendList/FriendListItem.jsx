import React from "react";
import PropTypes from "prop-types";

import {
  FriendItem,
  FriendStatus,
  FriendName,
  Avatar,
} from "./FriendList.styled";

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
