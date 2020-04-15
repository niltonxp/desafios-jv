import React from 'react';
import './styles.css';
import { Table } from 'antd';

const columns = [
    {
        title: 'Firstname',
        dataIndex: 'firstname',
        key: 'firstname',
        //render: text => <a>{text}</a>,
    },
    {
        title: 'Lastname',
        dataIndex: 'lastname',
        key: 'lastname',
    },
];

class TableUser extends React.Component {
    render() {
        const items = this.props.items;

        for (let i = 0; i < items.length; i++) {
            items[i].key = i
        }

        return (
            <>
            <Table columns={columns} dataSource={items} pagination={{ pageSize: 3 }} />

            <label htmlFor="usersQtd">{`${items.length} usuários registrados!`}</label>  
            </>
        );
    }
}

export default TableUser;