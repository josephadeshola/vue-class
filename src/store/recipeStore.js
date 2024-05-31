import {defineStore} from 'pinia';
import axios from 'axios';
const url = `https://dummyjson.com/recipes`;
export const useRecipeStore =  defineStore('recipeStore',{
    state:()=>{
        return{
            recipes:[],
            heartCount: 0,
        }
    },

    actions:{
      getAllRecipes(){
        axios.get(url)
        .then((res)=>{
            this.recipes = res.data.recipes;
        })
        .catch((error) => {
            console.error("Error when fetching recipes:", error);
        });

      },

      incrementHeart(){
        this.heartCount++
      },

      searchRecipes(keyword) {
        axios.get(`${url}/search?q=${keyword}`)
            .then((res) => {
                console.log(res.data);
                this.recipes = res.data.recipes;
            })
            .catch((error) => {
                console.error("Error searching recipes:", error);
            });
        }
    }  
})