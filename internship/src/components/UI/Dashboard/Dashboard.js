import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import classes from './Dashboard.css';
import Row from './Row/Row';

export default (props) => {

    let tbody = (
        <tbody></tbody>
    )
    if (Object.keys(props.records).length) {
        const rows = Object.keys(props.records).map(key => {
            return <Row
                key={key}
                row={props.records[key]}
                details={props.details}
                updated={props.update}
                deleted={props.delete}
            />
        })
        tbody = (
            <tbody>
                {rows}
            </tbody>
        )
    }

    useEffect(() => {
        if (Object.keys(props.records).length) {
        }
    });


    return (
        <Table responsive striped bordered hover variant className={classes.Dashboard}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {tbody}
        </Table>
    )
}
