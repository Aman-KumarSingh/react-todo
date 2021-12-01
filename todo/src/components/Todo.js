import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './../actions/index';
import './../components/todo.css';
export const Todo = () => {
    const [inputData, setInputData] = useState(' ');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="content">
                <div className="addTask">
                        <h3>TODO App</h3>
                    <div className="form-inline">
                        <input className="form-control" type="text" placeholder="Task" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        <button className="btn" title="Add Item" onClick={() => dispatch(addTodo(inputData), setInputData(''))} >Add Task</button>
                    </div>
                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItems" key={elem.id}>
                                        <h4>{elem.data}</h4>
                                        <div className="addBtn"><i className="fas fa-times " title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))} ></i>
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