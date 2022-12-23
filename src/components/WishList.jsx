import React from 'react'
function WishList({ wish }) {
  console.log(wish)
  return (
    <div>
      <div className='wishs'>
        {wish.length>0 ? (
          wish.map((element) => (

            <div className='wish' >
              <img src={element.poster} alt="" />
              <p className='movieTitle'>{element.title}</p>
              <span className='movieYear'>{element.year}</span>
            </div>
          ))
        ) : (
            <div className='errorWish'><h1>Your wishlist is empty</h1></div>
          )

        }
      </div>
    </div>
  )
}
export default WishList
