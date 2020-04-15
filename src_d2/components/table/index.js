import React from 'react';
import './styles.css'

class Table extends React.Component {
    render() {
        const items = this.props.items;

        return (
            <div id="Table">
                <table>
                    <tbody>
                        <tr>
                            <th> Firstname </th>
                            <th> Lastname </th>
                        </tr >
                        {items.map(item => {
                            return (
                                <tr key={item} >
                                    <td> {item.firstname} </td>
                                    <td> {item.lastname} </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table >
                <label htmlFor="usersQtd">{`${items.length} users registered!`}</label>
            </div>
        );
    }
}

export default Table;