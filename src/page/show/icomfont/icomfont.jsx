import React, { useEffect, useState } from 'react';

const Icomfont = () => {
  const xulong = React.createRef();
  const [isShow, setIsShow] = useState(true);
  const [obj, setObj] = useState({ name: "徐隆基", age: "27" });

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      const el = document.querySelector(".box");
      if (el && el.contains(e.target)) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }, false);

    return () => {
      document.body.removeEventListener("click", (e) => {
        const el = document.querySelector(".box");
        if (el && el.contains(e.target)) {
          return;
        } else {
          return;
        }
      }, false);
    }
  }, [])

  const showAction = () => {
    setIsShow(true);
  }

  const changeOneAction = () => {
    setObj({
      ...obj,
      name: "晚星"
    })
  }

  console.log(obj);
  return (
    <div className="page-icomfont">
      <div onClick={showAction}>字体展示页面</div>
      {
        isShow && <div className="box" style={{ width: "2rem", background: "red", margin: "0.2rem" }}>
          {
            [1, 2, 3, 4].map(item => {
              return <div className="one" key={item}>盒子里面的类容</div>;
            })
          }
        </div>
      }
      <div className="scroll">
        <marquee ref={xulong} scrollamount="20" onMouseOut={() => xulong.current.start()} onMouseOver={() => xulong.current.stop()}>
          <span style={{ fontWeight: "bolder", fontSize: "0.4rem", color: "#fff" }}>Welcom CSDN!</span>
        </marquee>
      </div>

      <div className="btn" onClick={changeOneAction}>改变obj里面部分参数值</div>

      <div>
        <span>姓名： {obj.name}</span> <br />
        <span>年龄： {obj.age}</span>
      </div>
    </div>
  );
};

export default Icomfont;