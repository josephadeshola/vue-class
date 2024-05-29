import {defineStore} from 'pinia';
import axios from 'axios';
const url = 'https://dummyjson.com/recipes'

export const useRecipeStore =  defineStore('recipeStore',{
    state:()=>{
        return{
            recipes:[]
        }
    },
    getters:{

    },
    actions:{
      getAllRecipes(){
        axios.get(url)
        .then((res)=>{
            console.log(res);
            this.recipes = res.data.recipes;
        })
      }
    }
})