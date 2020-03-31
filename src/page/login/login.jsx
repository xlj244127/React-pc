import React, { useState } from 'react';
import './login.less';
import logo from '../../assets/images/logo.jpg';
import { withStore, useAction } from '../../store/store';

const Login = (props) => {

  const action = useAction();

  const [isShow, setShow] = useState(true);
  const [text, setText] = useState("获取验证码");
  const [mobile, setMobile] = useState("18529533634");
  const [code, setCode] = useState("10086");
  const [isError, setIsError] = useState(true);

  const getMobile = (e) => {
    setMobile(e.target.value);
  }
  const getAuto = (e) => {
    setCode(e.target.value);
  }
  const getCode = () => {
    let count = 60;
    const timer = setInterval(()=>{
      if (count > 0 &&  count <= 60) {
        setShow(false);
        count--
        const title = `${text}${count}s`;
        setText(title);
      } else {
        setShow(true);
        setText("获取验证码");
        count = 60;
        clearInterval(timer);
      }
    }, 300)
  }

  const loginAction = () => {
    if (mobile !== "18529533634" || code !== "10086") {
      setIsError(false);
    } else {
      action.changeUserInfo({ code, mobile });
      action.changeHasAuth({ hasAuth: true });
      props.history.push("/show");
    }
  }
  return (
    <div className="page-content">
      <div className="main">
        <div className="nav">
          <img alt="图标" className="logo" src={logo}/>
        </div>
        <div className="input">
          <div className="mobile">
            <div className="mobile-left">+86</div>
            <input onChange={getMobile} value={mobile} className="mobile-right" placeholder="请输入手机号码"/>
          </div>
          <div className="code">
            <input className="n-left" value={code} onChange={getAuto} placeholder="请输入验证码"/>
            <div className={`n-right ${isShow ? "blueBg" : "grayBg"}`} onClick={getCode}>{text}</div>
            <div className="n-show" style={{ display: isShow ? "none" : "block" }}>10086</div>
          </div>
        </div>
        <div className="btn" onClick={loginAction}>登录</div>
        <div className="error" style={{ display: isError ? "none" : "block" }}>账户或密码错误</div>
      </div>
    </div>
  );
};

export default withStore(Login);
