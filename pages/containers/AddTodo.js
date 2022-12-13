import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form className="ItemAdd my-20" onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch (addTodo(input.value) )
                input.value = ''
            }}>
                <input ref={node => input = node} placeholder="Add New List İtem" />
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)