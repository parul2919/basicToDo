import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    clickAdd: func,
};
class TaskForm extends Component<Props>{
    static defaultProps = {
        clickAdd: () => {},
    };
    render(){
        const { clickAdd } = this.props;
        return(
            <Form inline className="col-8 bg-success border border-secondary justify-content-center" style={{minHeight:'150px',margin:'auto'}}> 
                <input type="text" placeholder="Add TODO" className="mr-sm-2" />
                <Button className="btn btn-primary btn-lg active" onClick={(e) => clickAdd(e)}>Add</Button>
            </Form>
        )
    }
}
export default TaskForm;

