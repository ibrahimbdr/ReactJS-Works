import axiosInstance from "../../axios config/axiosInstance";

export function addMovies(page){
    
    return (dispatch) => {
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

