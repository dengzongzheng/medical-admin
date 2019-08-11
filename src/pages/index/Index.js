import React, { Component } from 'react';
import { Result } from 'antd';


const NoFoundPage = () => (
  <Result
    status="404"
    subTitle="欢迎您登录中国卫生监督平台，祝您工作愉快."
  />
);

export default NoFoundPage;
