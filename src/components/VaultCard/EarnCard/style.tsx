import styled from "styled-components";

export const EarnCardStyle = styled.div`
  padding: 30px;
  padding-top: 10px;
  width: 598px;
  height: 322px;
  background: #fff;
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  button{
    width: 102px;
    height: 36px;
    margin-left: 440px;
  }
  ul li{
    margin-top: 20px;
    .earn-pcx-num{
      color: #34C69A;
      font-size: 20px;
      font-weight: bold;
    }
    .chainx-address{
      width: 239px;
      font-size: 12px;
      color: #009FCF;
      word-break:break-all;
    }
    .issue-redeem-num{
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
    }
    .issuable-num{
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
    }
    .collateral-rate{
      display: flex;
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
      .collateral-rate-num{
        font-size: 20px;
        color: #34C69A;
      }
    }
    .email-edit{
      font-size: 12px;
      color: #282828;
    }
  }
  .right-ul{
    margin-left: 50px;
  }
  .earn-card-title{
    font-size: 12px;
    color: #8E8E8E;
    margin-bottom: 10px;
  }
`
export const EarnCardTopStyle = styled.div`
  display: flex;
`
