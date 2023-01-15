import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axiosInstance from '../axios config/axiosInstance';
import { FaStar } from 'react-icons/fa';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovies, addMovies } from '../store/actions/movies';
// import { addMovies } from '../store/actions/moviesThunk';


export const Movies = () => {
    const dispatch = useDispatch();
    const moviesState = useSelector((state) => state.movies);
    const favMoviesState = useSelector((state) => state.favMovies);

    function handleLikeBtn (film) {
        let newList = moviesState;
        if(film.liked) {
            film.liked = false
            const movieIndex = newList.findIndex(item => item.id === film.id);
            console.log(film.liked);
            console.log("disliked");
            let newFavList = favMoviesState.filter(favFilm => {
                return favFilm.liked === true;
            })
            dispatch(addFavMovies(newFavList));
        }else{
            film.liked = true
            console.log(film.liked);
            console.log("liked");
            dispatch(addFavMovies([...favMoviesState, film]));
        }
        // setFilms([...newList]);
       
        dispatch(addMovies([...newList]));
        console.log(favMoviesState);
    }
    let [query, setQuery]= useState(document.location.search.split('=')[1]);
    let [page, setPage] = useState(1)
    useEffect(() => {
        if(query){
            axiosInstance.get(`/search/movie?api_key=cd5cc4af3750ab19c216b0a7f80654a9&query=${query}`)
            .then((res) => {
        }).catch((err) => {
            console.log(err);
        })
        }else{
            // if(moviesState.length === 0){
            // axiosInstance.get(`/movie/popular?api_key=cd5cc4af3750ab19c216b0a7f80654a9&page=${page}`)
            // .then((res) => {
            // let movieList = res.data.results;
                
            dispatch(addMovies(moviesState.length,page));
            
        // }).catch((err) => {
        //     console.log(err);
        // })
        //  }
        }
        
            
            // console.log(requestState)
        
    }, [page])

        // useEffect(() => {
            // dispatch(addMovies)
        // }, [])

    function showPrevMovies() {
        if(page>1){
            setPage(--page)
        }
    }

    function showNextMovies() {
        if(page<500){
            setPage(++page)
        }
    }

   

  return (
    <div className='bg-[url("https://cdn.wallpapersafari.com/80/19/A1QxF4.jpg")]'>
        
        {/* <div className=' bg-stone-500 bg-cover'>
            <nav className='flex justify-between p-2 bg-slate-800 bg-opacity-60 sticky'>
                <div className='leftNav flex items-center'>
                    <span className='font-Roboto text-3xl text-stone-500 font-bold'><Link to='/'>MoviesLand</Link></span>
                    <ul className='ml-5 text-lg font-Roboto text-slate-400 font-semibold flex'>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li className='ml-3 '><Link to='/favmovies'>Favorite Movies</Link></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <form className='flex items-center'>
                    <label className='text-slate-300 pr-2 text-xl'>
                        <button type='submit'><BsSearch/></button>
                    </label>
                    <input type="search" name="search" id="searchM" className="form-input w-72 h-8 rounded-xl bg-stone-200 p-2" placeholder="Search"/>
                    </form>
                </div>
            </nav>
        </div> */}

        
        <div className='flex justify-between '>
        <h2 className='font-Roboto text-2xl pl-9 pt-8 font-semibold pb-10 font-Cinzel'>All Genres</h2>
         <div className='flex items-center'>
            <form className='flex items-center'>
            <label className='text-slate-300 pr-2 text-xl'>
                <button type='submit'><BsSearch/></button>
            </label>
            <input type="search" name="search" id="searchM" className="form-input w-72 h-8 rounded-xl bg-stone-200 p-2" placeholder="Search"/>
            </form>
        </div>
        <h4 className='animate-pulse-limited flex items-center mr-9'><FcLike className='mr-1 text-2xl'/>{favMoviesState.length}</h4>
        </div>


        <div className='flex flex-wrap justify-center items-center pb-10'>
            {moviesState.map((film) => {
                return (
                    <div className='w-80 mb-3' key={film.id}>
                        <Link to={`/movies/${film.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className='w-72' alt=''/>
                        
                        </Link>
                        <div className='flex justify-between bg-slate-200 mr-8 p-3'>
                        <h5 className='font-normal text-sm text-slate-800'>{film.title}</h5>
                        <h6 className='font text-sm font-extrabold flex items-center'><button className='mr-1 text-xl' onClick={()=>{handleLikeBtn(film)}}>{film.liked?<FcLike/>:<FcLikePlaceholder/>}</button><FaStar className='text-amber-400 mr-1 text-xl'/>{film.vote_average}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
        
        
        <div className="flex flex-col items-center py-5 bg-slate-300">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">20</span> of <span className="font-semibold text-gray-900 dark:text-white">500</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => showPrevMovies()}>
                    <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" cliprole="evenodd"></path></svg>
                    Prev
                </button>
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => showNextMovies()}>
                    Next
                    <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" cliprole="evenodd"></path></svg>
                </button>
            </div>
        </div>

    </div>
  )
}
