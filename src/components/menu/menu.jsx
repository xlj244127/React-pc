import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import munuList from '../../router/routerConfig';
import './menu.less';

const Menus = ({ history }) => {

  const [collapsed, setCollapsed] = useState(true);
  const [menuUrl, setMenuUrl] = useState({});

  useEffect(() => {
    const path = history.location.pathname;
    const i = path.lastIndexOf("/");
    const url = path.slice(0, i);
    setMenuUrl(state => ({
      [url]: !state[url]
    }));
  }, [history])

  const setShowAction = (path) => {
    setMenuUrl(state => ({
      ...state,
      [path]: !state[path]
    }));
    setCollapsed(!collapsed);
  }

  const toPageAction = (path) => {
    history.push(path);
  }

  const fanc = () => {
    const pathname = history.location.pathname.replace(/\/$/g, "");
    const i = pathname.lastIndexOf("/");
    const actPar = pathname.slice(0, i);
    return [actPar, pathname];
  }

  return (
    <div className="example">
      <ul className="menu">
        {
          munuList.map((item, index) => {
            const active = fanc()[0] === item.path;
            const height = !menuUrl[item.path] ? "0" : `${item.subMenu.length * 0.5}rem`;
            return <li key={index} className="menu-item">
              <div className={`item-title ${active ? "selected" : ""}`} onClick={() => setShowAction(item.path)}>
                <i className="iconfont paicon-building"></i>
                <span>{item.name}</span>
              </div>
              <ul className="item-child" style={{ height, transition: "height 0.3rem linear", overflow: "hidden" }}>
                {
                  item.subMenu.map((subItem) => {
                    const subActive = fanc()[1] === subItem.subPath;
                    return <li onClick={() => toPageAction(subItem.subPath)} key={subItem.subPath} className={`child-one ${subActive ? "subSelected" : ""}`}>{subItem.subName}</li>;
                  })
                }
              </ul>
            </li>;
          })
        }
      </ul>
    </div>
  );
};

export default withRouter(Menus);