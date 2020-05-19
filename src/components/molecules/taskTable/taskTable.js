import React, { Component } from "react";

type Props ={
    tableList: Object,
}
class TaskTable extends Component<Props>{
    static defaultProps ={
        tableList: [],
    }
    constructor(props){
        super(props);
        this.state={
            taskArray: [],
        }
    }
    componentDidMount() {
        this.setState({
            taskArray: Object.values(this.props.tableList)
         })
    }
    handleCheckboxTodo = (e) => {
        console.log('in handleCheckbox', e.target.getAttribute('indexval'));
        let elem = e.target;
        const tableListArr =Object.values(this.props.tableList);
        let index = elem.getAttribute('indexval');
        if (elem.checked){
            elem.removeAttribute('checked');
            elem.parentNode.style.textDecoration = "line-through";
            //tableListArr[0].pop(index);
            tableListArr[1].push(tableListArr[0][index]);
         } else {
            elem.setAttribute('checked', true);
            elem.parentNode.style.textDecoration = "";
            //tableListArr[0].push(index);
            tableListArr[1].pop(index);
         }
         this.setState({
            taskArray: [tableListArr[0], tableListArr[1], tableListArr[2]]
         })
    }
    handleCheckboxInProgress = (el) => {
        
    }
    render(){
        const {tableList} = this.props;
        const tableListArr = Object.values(tableList);
        console.log('prop list', tableListArr);
        return(
            <div>
                <div className="col-8 border-dark" style={{margin:"0 auto"}}>
                    <div className="d-flex">
                        <ul className="border-dark list-group p-3 col-4" style={{listStyle:'none'}}>
                            <li className="bg-dark text-light p-2">ToDo</li>
                            {
                                tableListArr[0].map((todoItem, index) =>  
                                    <li key={index}><input type="checkbox" onChange={(e) => this.handleCheckboxTodo(e)} indexval={index}/>{todoItem}</li>
                                )
                            }
                            <li className=" mt-3"><button type="button" className="btn btn-primary" >Move To Progress</button></li>
                        </ul>
                        <ul className="border-left border-dark list-group p-3 col-4" style={{listStyle:'none'}}>
                            <li className="bg-dark text-light p-2">In Progress</li>
                            {
                                tableListArr[1].map((inprogress, index) =>  
                                    <li key={index}><input type="checkbox" onChange={(el) => this.handleCheckboxInProgress()}/>{inprogress}</li>
                                )
                            }
                            <li className=" mt-3"><button type="button" className="btn btn-primary" >Move To Done</button></li>
                        </ul>
                        <ul className="border-left border-dark list-group p-3 col-4" style={{listStyle:'none'}}>
                            <li className="bg-dark text-light p-2">Done</li>
                            {
                                tableListArr[2].map(doneItem =>  
                                    <li>{doneItem}</li>
                                )
                            }
                        </ul>
                    </div>  
                </div>  
            </div>
        );
    }
}

export default TaskTable;