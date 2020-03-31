import React, { useEffect } from 'react';
// import { useStore } from '../../../store/store';

const Echarts = () => {

  // const store = useStore();

  useEffect(() => {
    const arr = [1, 2, 3]; // 默认传进来的值
    const arr2 = [3, 7, 8, 9];
    const arr3 = arr2.filter(item => arr.indexOf(item) !== -1);   // 在默认中部分存在的监测点
    const arr4 = arr2.filter(item => arr.indexOf(item) === -1);   // 新增监测点
    const arr5 = arr.filter(item => arr3.indexOf(item) === -1);   // 删除的监测点

    console.log("取值", arr4, arr5);
  }, []);

  return (
    <div className="page-home">图表页</div>
  );
};

export default Echarts;