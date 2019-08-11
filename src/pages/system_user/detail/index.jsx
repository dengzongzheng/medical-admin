import { Badge, Card, Descriptions, Divider, Table } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';


@connect(({ userDetail, loading }) => ({
  userDetail,
  loading: loading.effects['userDetail/fetchUserDetail'],
}))
class Basic extends Component {
  state = {
    userNo: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { userNo } = this.props.match.params;
    this.state.userNo = userNo;
    const param = {};
    param.userNo = userNo;
    dispatch({
      type: 'userDetail/fetchUserDetail',
      payload: { ...param },
    });
  }

  render() {
    const { userDetail, loading } = this.props;
    const { user, userLoginLog } = userDetail;
    console.log("hhh"+JSON.stringify(user));
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };

      if (index === userLoginLog.length) {
        obj.props.colSpan = 0;
      }

      return obj;
    };

    const userLoginLogColumns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: (text, row, index) => (<span>{index}</span>),
      },
      {
        title: '用户',
        dataIndex: 'userName',
        key: 'name',
        render: renderContent,
      },
      {
        title: '登录时间',
        dataIndex: 'name',
        key: 'name',
        render: renderContent,
      },
    ];
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Divider
            style={{
              marginBottom: 32,
            }}
          />
          <Descriptions
            title="用户信息"
            style={{
              marginBottom: 32,
            }}
          >
            <Descriptions.Item label="用户名">{user.userName}</Descriptions.Item>
            <Descriptions.Item label="所管理机构">18100000000</Descriptions.Item>
            <Descriptions.Item label="状态">{user.status}</Descriptions.Item>
            <Descriptions.Item label="创建时间">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
            <Descriptions.Item label="最后修改时间">无</Descriptions.Item>
          </Descriptions>
          <Divider
            style={{
              marginBottom: 32,
            }}
          />
          <div className={styles.title}>登录系统信息</div>
          <Table
            style={{
              marginBottom: 24,
            }}
            pagination={false}
            loading={loading}
            dataSource={userLoginLog}
            columns={userLoginLogColumns}
            rowKey="id"
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Basic;
