import styled from "styled-components";

export const BridgeStyle = styled.div`
  width: 499px;
  height: 524px;
  border-radius: 10px;
  background: #fff;
  margin: 24px;
  border: 1px solid #EFEFEF;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FunctionSwitchButton = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #8E8E8E;
  ul{
    width: 425px;
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #F6F6F6;
    margin-top: 30px;
    border-radius: 6px;
  }
  li{
    width: 208px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    &.active{
      background: #fff;
      color: #282828;
    }
  };
`
