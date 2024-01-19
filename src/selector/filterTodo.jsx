import {selector} from 'recoil'
import {todoAtom} from '../store/atoms/todo'
import {filterAtom} from '../store/atoms/filter'

export const filterSelector = selector({
    key : "filterSelector",
    get : ( {get} ) =>{
        const todos = get(todoAtom)
        const filter = get(filterAtom)
        const filteredTodo = todos.filter( (todo) => {
            if(todo.title.includes(filter) || todo.description.includes(filter))
                return todo;
        })
        return filteredTodo ;
    }
})