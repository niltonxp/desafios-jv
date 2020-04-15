import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

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

function TableUser(props) {

    const items = props.items;

    for (let i = 0; i < items.length; i++) {
        items[i].key = i
    }

    return (
        <>
            <Table columns={columns} dataSource={items} pagination={{ pageSize: 4 }} />

            <label className="cont" htmlFor="usersQtd">{`${items.length} usuários registrados!`}</label>
            <Button className='btn' type="primary">
                <Link to={`/`}>Voltar</Link>
            </Button>
        </>
    );
}

export default TableUser;