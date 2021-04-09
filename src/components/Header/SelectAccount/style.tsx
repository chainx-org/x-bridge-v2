import styled from "styled-components";

export const SelectAccountStyle = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  .current-account{
    font-size: 14px;
    color: #282828;
    font-weight: bold;
    margin-right: 10px;
  }
  .balance{
    font-size: 14px;
    color: #282828;
    font-weight: bold;
    margin-right: 10px;
  }
  .ant-radio-group {
    display: flex ;
    flex-direction: column ;
    .account-info{
      margin-top: 15px;
      width: 400px;
      display: flex;
      justify-content: space-between;
    }
  }
`
