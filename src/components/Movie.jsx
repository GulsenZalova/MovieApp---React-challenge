import React from 'react'
function Movie({ movie, wish, setWish }) {
 const addWishList=(id)=>{
    let addWish=wish.find((x)=>x.id==id)
    if(!addWish){
        setWish([...wish,{
            id:id,
            poster:movie.Poster,
            title:movie.Title,
            year:movie.Year
        }])
    }
 }
    return (
        <div className='movie'>
            <img src={movie.Poster} alt="" />
            <div className='movieInfo'>
                <div className='movieDesc'>
                    <p className='movieTitle'>{movie.Title}</p>
                    <span className='movieYear'>{movie.Year}</span>
                </div>
                <button className='wishIcon' onClick={()=>addWishList(movie.imdbID)} ><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>

    )
}

export default Movie
