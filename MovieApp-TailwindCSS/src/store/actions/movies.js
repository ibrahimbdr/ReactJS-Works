import axiosInstance from "../../axios config/axiosInstance";
import { useState } from "react";

export function addFavMovies(data){
    
    return {
        type: "SET_FAV_MOVIES",
        payload: data
    }
}

// export function addMovies(data){
    
//     return {
//         type: "SET_MOVIES",
//         payload: data
//     }
// }


export function addMovies(moviesArr,page){    

    return (dispatch) => {
        if(moviesArr === 0){
            axiosInstance.get(`/movie/popular?api_key=cd5cc4af3750ab19c216b0a7f80654a9&page=${page}`)
            .then((res) => {
            let movieList = res.data.results;

            dispatch({
                type: "SET_MOVIES",
                payload: movieList
            })

        }).catch((err) => {
            console.log(err);
        })
        }
    }
}
