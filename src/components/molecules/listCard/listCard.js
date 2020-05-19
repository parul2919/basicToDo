import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props ={
    taskList : Object,
    clickMove: func,
}
class ListCard extends Component<Props>{
    static defaultProps = {
        taskList: [],
        clickMove: () => {},
    };
    render(){
        const {taskList, clickMove} = this.props;
        return(
            <Card className="col-8 " style={{ margin: 'auto' }}>
                <Card.Body>
                <Card.Title>ToDO List</Card.Title>
                <ul>
                {
                    taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))
                }
                </ul>
                <Button variant="primary" onClick={() => clickMove()}>Move To Table</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default ListCard;