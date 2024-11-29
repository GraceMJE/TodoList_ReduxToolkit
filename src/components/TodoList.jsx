import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, complete } from '../redux/todoSlice'
import s from './TodoList.moduel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTrashCan } from 'react-icons/fa6'

export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const trash = <FontAwesomeIcon icon={faTrashCan} />

    console.log(todolist)

    const todolistView = todolist.map((todo, idx) => (

        <li className={s.list} key={todolist[idx].id}>
            <input className={s.checkvbox} type='checkbox'
                    onChange={()=> dispatch(complete(todolist[idx].id))} />
            <div className={s.todolist}>
                {todo.complete === flase ? <>{todo.text}</> 
                                    : <del>{todo.text}</del>}
            </div>
            <button className={s.deleteBtn}
                    type='button'
                    onClick={() => dispatch(remove(todolist[idx].id))}>{trash}</button>
        </li>
    ))

    return (
        <>
            <ul>{todolistView}</ul>
        </>
    )
}