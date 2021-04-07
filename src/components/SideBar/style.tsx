import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SideBarStyle = styled.div`
  background: #ffffff;
  width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  main{
    flex: 1;
  }
`
export const SideBarHeader =styled.header`
    img{
      width: 24px;
      height: 24px;
    }
`
export const SideBarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  .project-name{
    margin-left: 8px;
    display: flex;
    justify-content: center;
    .x-name{
      font-size: 30px;
      font-weight: bold;
    }
    .bridge-name{
      font-size: 30px;
      margin-left: 8px;
    }
  }
`
export const SideBarStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  .status{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    &.running{
      background: #34C69A;
    }
    &.error{
      background: red;
    }
  }
  .status-info{
    font-size: 10px;
    color: #8E8E8E;
    margin-left: 4px;
  }
`
export const LinkStyle = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 200px;
  border-radius: 6px 0 0 6px;
  margin-top: 90px;
  font-size: 16px;
  color: #3D3D3D;
  font-weight: bold;
  img{
    width: 18px;
    height: 18px;
    position: absolute;
    margin-right: 140px;
  }
  &:hover{
    color: #3D3D3D;
  }
  &.active{
    background: #F6C94A;
  }
`
export const SideBarFooter = styled.footer`
  margin-bottom: 40px;
  .bridge-doc{
    display: flex;
    width: 120px;
    justify-content: space-around;
    font-size: 12px;
    color: #8E8E8E;
    .point{
      font-weight: bold;
    }
    li{
      margin-left: 5px;
    }
  }
  .social-media{
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
    img{
      width: 16px;
      height: 16px;
    }
  }
  .language-select{
    display: flex;
    font-size: 12px;
    color: #8E8E8E;
    justify-content: space-around;
    margin-top: 35px;
    li{
      cursor:pointer;
      &.active{
        color: #282828;
      }
    }
  }
`
