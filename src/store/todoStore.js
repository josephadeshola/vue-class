import {defineStore} from 'pinia';
import axios from 'axios';
// store -
// getters - 
// actions -

export const useToDo = defineStore('todoStore',{
    state:()=>{
        return{
            todos:[]
        }
    } ,
    getters:{
        // getTodos:(state)=>{state.todos.map.apply((item)=>(
        //     console.log(item)
        // ))}
        // 1 method
        todoCount :(state)=>state.todos.length,
        // 2 method

        // completedTodo(state){
        //     return state.todos.length
        // }
        completedTodo(state){
            return state.todos.filter((eachTodo)=>eachTodo.completed)
        },
        pendingTodo(state){
            return state.todos.filter((eachTodo)=>!eachTodo.completed)
        }
    },
    actions:{
      getAllTodos(){
        axios.get('https://dummyjson.com/todos')
        .then((res)=>{
            console.log(res.data.todos);
            this.todos = res.data.todos
        })
      }
    },
    persist:true
});