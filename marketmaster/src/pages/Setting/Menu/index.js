import React from "react";
import { Button, Card, Table, Space } from "antd";
import { PlusOutlined } from '@ant-design/icons'
import { Panel } from "../../../components";
import { connect } from "react-redux";
import ModalForm from "./ModalForm";


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [{ name: 'Setting', id: '1', children: [{ name: 'Menu Management', id: '11', linkUrl: '/setting/menu' }] },
      { name: 'Business Management', id: '2', linkUrl: '/business' }]
    }
  }
  getTableProps = () => {
    return {
      columns: [
        {
          title: 'Menu',
          dataIndex: 'name'
        },
        {
          title: 'Access URL',
          dataIndex: 'linkUrl'
        },
        {
          title: 'Action',
          render: (record) => (
            <Space>
              <a>View</a>
              <a>Edit</a>
              <a>Delete</a>
              <a>Add</a>
            </Space>
          )
        }
      ],
      dataSource: this.state.dataSource || [],
      rowKey: 'id',
      pagination: false
    }
  }
  onAdd = () => {
    this.props.dispatch({
      type: 'showModalForm',
      data: {
        title: 'Add',
        data: {}
      }
    })
  }
  render() {
    const { modalForm } = this.props.menuState
    return <Panel title='Menu Management'>
      <div className="m-operate">
        <Button type="primary" icon={<PlusOutlined />} onClick={this.onAdd}>Add</Button>
      </div>
      <Card>
        {/* list component */}
        <Table {...this.getTableProps()} />
      </Card>
      {modalForm && <ModalForm {...modalForm} {...this.props} />}
    </Panel>
  }
}

const mapStateToProps = (store) => ({ menuState: store.menu })
const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Menu)