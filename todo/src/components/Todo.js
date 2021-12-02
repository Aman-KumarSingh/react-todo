import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './../actions/index';
import './../components/todo.css';
export const Todo = () => {
    const [inputData, setInputData] = useState(' ');
    const [tempid, setTempId] = useState(' ');
    const list = useSelector((state) => state.todoReducers.list);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const dispatch = useDispatch();
    function call(id, data) {
        setTempId(id);
        setInputData(data);
        setToggleSubmit(false);
    }
    return (
        <>
            <div className="content">
                <div className="addTask">
                    <h3>TODO App</h3>
                    <div className="form-inline">
                        <input className="form-control" type="text" placeholder="Task" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        {
                            toggleSubmit ? <button className="btn" title="Add Item" onClick={() => dispatch(addTodo(inputData), setInputData(''))} >Add Task</button> :
                                <button className="btn" title="Edit Item" onClick={() => dispatch(updateTodo(tempid, inputData), setInputData(''), setToggleSubmit(true))} >Edit Task</button>
                        }

                    </div>
                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItems" key={elem.id}>
                                        <h4 >{elem.data}</h4>
                                        <div className="addBtn"><i className="far fa-edit " title="Update Item" onClick={() => call(elem.id, elem.data)} ></i>

                                            <i className="fas fa-times " title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))} ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo