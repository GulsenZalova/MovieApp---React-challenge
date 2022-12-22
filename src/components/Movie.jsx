import React from 'react'
function Movie({ movie, wish, setWish }) {

    return (
        <div className='movie'>
            <img src={movie.Poster} alt="" />
            <div className='movieInfo'>
                <div className='movieDesc'>
                    <p className='movieTitle'>{movie.Title}</p>
                    <span className='movieYear'>{movie.Year}</span>
                </div>
                <button className='wishIcon' onClick={setWish({movieTitle:movie.Title,img:movie.Poster,year:movie.Year})}><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>

    )
}

export default Movie
