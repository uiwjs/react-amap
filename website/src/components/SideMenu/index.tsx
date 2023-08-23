import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { menus } from '../../router';
import { ReactComponent as Logo } from './logo.svg';

const Side = styled.div`
  width: 250px;
  height: 100%;
  overflow: auto;
  position: fixed;
  background: #202225;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.25);
    transition: color 0.2s ease;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0;
  }
  a {
    color: #dcdcdc;
    display: block;
    padding: 8px 10px 8px 15px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    > svg {
      fill: #888;
    }
    &:hover {
      text-decoration: underline;
      color: #eaeaea;
      background-color: #3e3e3e;
    }
    &.active {
      text-decoration: underline;
      background: #333;
      color: #fff;
    }
  }
`;

const LogoWrapper = styled.div`
  padding: 18px 0 20px 0;
  margin-bottom: 6px;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  svg {
    margin-bottom: 10px;
  }
  sup {
    color: #6f6f6f;
    margin-left: 5px;
    margin-top: -5px;
    position: absolute;
  }
`;

const Menus = styled.div`
  padding-bottom: 20px;
  .divider {
    color: #9e9e9e;
    padding: 5px 10px 5px 20px;
  }
`;

const Divider = styled.div`
  color: #9e9e9e;
  padding: 5px 10px 5px 20px;
`;

export default function SideMenu() {
  const version = VERSION;
  return (
    <Side>
      <LogoWrapper>
        <Logo />
        <div>
          高德地图 React 组件<sup>{version}</sup>
        </div>
      </LogoWrapper>
      <Menus>
        {menus.map(({ label, path, divider, ...otherItem }, idx) => {
          if (divider) {
            return <Divider key={idx}>{label}</Divider>;
          }
          if (path && /^http/.test(path)) {
            return (
              <a key={idx} href={path} target="__blank" {...otherItem}>
                {label}
                <svg viewBox="0 0 1024 1024" width={14}>
                  <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                  <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
                </svg>
              </a>
            );
          }
          return (
            <NavLink key={idx} to={path || ''}>
              {label}
            </NavLink>
          );
        })}
      </Menus>
    </Side>
  );
}
