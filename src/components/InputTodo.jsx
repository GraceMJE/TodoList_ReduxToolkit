// todolist 입력 및 추가하는 form 컴포넌트
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { add } from "../redux/todoSlice"
import s from './InputTodo.module.css'


/* useState를 사용하여 todolist라는 state를 만들어주고,
submit 버튼을 클릭 or 엔터키를 치면 
dispatch를 통해 todolist.text 값을 넘겨준다.*/
export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState({
        id: 0,
        text: '',
    })

    function handleText(e) {
        setTodolist({text: e.target.value})
    }

    function onReset () {
        setTodolist({text: ''})
    }

    return (
        <div className={s.InputTodo}>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(todolist.text !== ''){dispatch(add(todolist.text))}
                else(alert('Enter your todos!'))
                onReset()
            }}>
                <div>
                    <input className={s.textbar} 
                            type='text'
                            value={todolist.text}
                            onChange={handleText} />
                    <input className={s.submitbutton}
                            type='submit'
                            value='+' />
                </div>
            </form>
        </div>
    )
}