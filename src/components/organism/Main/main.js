import React, {Component} from "react";
//import type { Node } from "react";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCard from "./../../molecules/listCard/listCard";
import TaskForm from "./../../molecules/taskForm/taskForm";
import TaskTable from "./../../molecules/taskTable/taskTable";

/*type Props = {
    cartItems: array
  };*/
class Main extends Component{
    /*
        static defaultProps = {
            cartItems: []
        };
    */ 
    constructor (props){
        super(props);
        this.state = {
            taskList: [],
            tableList: {
                todo: [],
                inProgress: [],
                done: [],
            },
        }
    }
    
    addTask = (evt) => {
        const {taskList} = this.state;
        let temp = taskList;
        let value = evt.target.previousSibling.value;
        temp.push(value);
        evt.target.previousSibling.value = "";
        console.log(temp);
        this.setState({
            taskList: [...temp]
        }); 
    }
    moveToTable = () =>{
        if ((this.state.taskList.length) > 0){
            this.setState({
                tableList:{
                    todo: [...this.state.taskList],
                    inProgress: [],
                    done: [],
                },
            })
            console.log('btn clicked', this.state.tableList);
        }
        
    }

    render(){
        const {taskList, tableList} = this.state;
        return (
            <main>
                <Container className="" style={{margin:'50px auto'}}> 
                    <TaskForm clickAdd= {this.addTask}/> {/* passing function as prop*/}
                    <ListCard taskList = {taskList} clickMove={this.moveToTable}/> {/* Passing lasklist object */}
                    <TaskTable tableList = {tableList}/>
                </Container>
            </main> 
        )
    }
}

export default Main;