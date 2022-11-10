import React from 'react'
import { useParams } from 'react-router-dom'


const WishListDelete = ({ handleDeleteWishList }) => {
    return (
        <>
            <button onClick={handleDeleteWishList}>Delete Wish List</button>
        </>
    )
}

export default WishListDelete 