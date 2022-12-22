import React from 'react'
function WishList({ wish}) {

  return (
    <div>
      {
            <div className='wishs'>
              <div className='wish' >
                <img src={wish.Poster} alt="" />
                <p className='movieTitle'>{wish.Title}</p>
                <span className='movieYear'>{wish.Year}</span>
              </div>
            </div>
        
      }
    </div>
  )
}
export default WishList
