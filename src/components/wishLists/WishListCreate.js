import React, { useState } from 'react'
import { wishListCreate } from '../../api/wishList'
import { useNavigate } from 'react-router-dom'
import WishListForm from '../shared/WishListForm'

const WishListCreate = ({ user, msgAlert }) => {
	const navigate = useNavigate()

	const defaultWishList = {
		name: '',
		img: '',
		item: '',
		isBought: false,
		isWrapped: false,
		type: 'candy-cane',
	}
	const [wishList, setWishList] = useState(defaultWishList)

    // this checks whether the item has been bought
	const handleCheck = () => {
		console.log("clicked")
		setWishList(prevWishList => {
			return { ...prevWishList, isBought: !prevWishList.isBought }
		})
	}


    // this checks whether the item has been wrapped
    const handleCheckWrapped = () => {
		console.log("clicked")
		setWishList(prevWishList => {
			return { ...prevWishList, isWrapped: !prevWishList.isWrapped }
		})
	}


	const handleChange = (e) => {
		setWishList(prevWishList => {
			const updatedName = e.target.name
			let updatedValue = e.target.value
			console.log(updatedValue)

			if (updatedName === 'isBought' && e.target.checked) {
				updatedValue = true
			} else if (updatedName === 'isBought' && !e.target.checked) {
				updatedValue = false
			}

			if (updatedName === "isWrapped") {
				updatedValue = e.target.value.toUpperCase()
			} else if (updatedName === "name") {
				updatedValue = e.target.value
			} else if (updatedName === "notWrapped") {
				updatedValue = e.target.value
			}
			const updatedWishList = { [updatedName]: updatedValue }
			console.log(updatedWishList)
			return { ...prevWishList, ...updatedWishList }
		})
	}
	const handleCreateWishList = (e) => {
		e.preventDefault()
		console.log("this is the wishList", wishList)
		wishListCreate(wishList, user)
			//    .then(res => { navigate(`/santasHelper/${res.data.wishList._id}`)})
			.then(res => { navigate(`/santasHelper`) })
			.then(() => {
				msgAlert({
					heading: 'Success',
					message: 'Create Wish List',
					variant: 'success'
				})
			})
			.catch((error) => {
				console.log(error)
				msgAlert({
					heading: 'Failure',
					message: 'Create Wish List Failure' + error,
					variant: 'danger'
				})
			})
	}
	return (
		<>
			<WishListForm
				wishList={wishList}
				handleChange={handleChange}
				heading="Add a new wish list!"
				handleSubmit={handleCreateWishList}
				handleCheck={handleCheck}
                handleCheckWrapped={handleCheckWrapped}
			/>
		</>
	)
}

export default WishListCreate