import { Form, Input, Modal, Checkbox } from 'antd';
import React from 'react';
import { organizations } from '@/constants/index';

const FormItem = Form.Item;


const CreateForm = props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };


  return (
    <Modal
      destroyOnClose
      title="新建用户"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="用户名"
      >
        {form.getFieldDecorator('userName', {
          rules: [
            {
              required: true,
              message: '请输入至少5个字符的用户名！',
              min: 5,
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="密码"
      >
        {form.getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: '请输入至少6个字符的密码！',
              min: 5,
            },
          ],
        })(<Input placeholder="请输入" type="password"/>)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="确认密码"
      >
        {form.getFieldDecorator('confirmPassword', {
          rules: [
            {
              required: true,
              message: '请输入至少6个字符的确认密码！',
              min: 5,
            },
          ],
        })(<Input placeholder="请输入" type="password"/>)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 19,
        }}
        label="所管理机构">
        {form.getFieldDecorator('organizations', {
          rules: [
            {
              required: true,
              message: '请输入至少选择一个管理机构',
            },
          ],
          initialValue: '0',
        })(<Checkbox.Group
          options={organizations}
          defaultValue={['所有机构']}
        />)}

      </FormItem>

    </Modal>
  );
};

export default Form.create()(CreateForm);
