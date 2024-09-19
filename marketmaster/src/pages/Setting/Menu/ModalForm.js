import React from "react";
import { Modal, Form, Input, Select, Radio, Dropdown, Space, Pagination } from "antd";
import { icons } from '../../../components';
import _ from 'lodash'
import axios from 'axios'


class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { allIcons: icons, currentIcons: icons.slice(0, 10) }
  }
  onCancel = () => {
    this.props.dispatch({
      type: 'hideModalForm'
    })
  }
  layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }
  formRef = React.createRef()
  onSave = (values) => {
    console.log(values);
    axios.post('/api/menu/add', values).then((data) => {
      console.log(data);
    })

  }
  onIconfilter = (e) => {
    let { value } = e.target
    value = _.trim(value)
    const newIcons = []
    if (value) {
      icons.map(item => {
        if (_.lowerCase(item.name).indexOf(_.lowerCase(value)) !== -1) {
          newIcons.push(item)
        }
      })
      this.setState({ icon: value, allIcons: newIcons, currentIcons: newIcons.slice(0, 10) })
      return
    }
    this.setState({ icon: value, allIcons: icons, currentIcons: icons.slice(0, 10) })
  }
  onIconChange = (e) => {
    const { value } = e.target
    this.setState({ icon: value })
    this.formRef.current.setFieldsValue({ icon: value })
  }
  render() {
    return <Modal visible width={600} title={this.props.title}
      onCancel={this.onCancel}
      onOk={() => this.formRef.current.submit()}
    >
      <Form {...this.layout} ref={this.formRef} onFinish={this.onSave}>
        <Form.Item label='Parent Menu'>
          {'null'}
        </Form.Item>
        <Form.Item label='Menu Name' name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Access URL' name='linkUrl' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Open Mode' name='openType' rules={[{ required: true }]}>
          <Select>
            <Select.Option value='1'>Current Window</Select.Option>
            <Select.Option value='2'>New Window</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Icon' name='icon' rules={[{ required: true }]}>
          <Dropdown trigger={['click']} overlayStyle={{ background: '#fff', padding: 10 }} overlay={<>
            <Radio.Group onChange={this.onIconChange}>
              <Space direction="vertical">
                {this.state.currentIcons.map(item => {
                  return <Radio value={item.name}>
                    {React.createElement(item.renderFn)}
                    <span style={{ margin: 5 }}>{item.name}</span>
                  </Radio>
                })}
              </Space>
            </Radio.Group>
            <div style={{ textAlign: 'right', padding: 10 }}>
              <Pagination
                showSizeChanger={false}
                size="small"
                total={this.state.allIcons.length}
                onChange={(page, pageSize) => this.setState({ currentIcons: this.state.allIcons.slice(pageSize * (page - 1), pageSize * page) })}
              >
              </Pagination>
            </div>
          </>}>
            <Input
              prefix={React.createElement((_.find(this.state.allIcons, (item) => item.name === this.state.icon) || {}).renderFn || 'span')}
              onChange={this.onIconfilter}
              value={this.state.icon} />
          </Dropdown>
        </Form.Item>
        <Form.Item label='Permissions' name='isOfAdmin' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='1'>Only Admin</Radio>
            <Radio value='2'>Not Limited</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  }
}

export default ModalForm