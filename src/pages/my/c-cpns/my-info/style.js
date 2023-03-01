import styled from "styled-components";

export const MyInfoWrapper = styled.div`
  .my-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .info {
      /* display: flex;
        align-items: center;
        flex-wrap: wrap; */
      margin-left: 20px;
      .username {
        font-size: 22px;
        font-weight: 600;
        color: #333;
      }
      .userID {
        font-size: 13px;
        color: #888;
        margin: 5px 5px 5px 0;
      }
      .userType {
        font-size: 16px;
        color: #666;
        .vipbtn {
            margin-left: 10px;
        }
      }
    }
  }
`;
