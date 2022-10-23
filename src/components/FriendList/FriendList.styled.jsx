import styled from "@emotion/styled";

export const Friends = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export const FriendItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  margin-bottom: 4px;
  background-color: #ffffff;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f5eff5;
  }
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.status ? "green" : "red")};
  border-radius: 50%;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50px;
  margin-right: 30px;
  margin-left: 15px;
`;
