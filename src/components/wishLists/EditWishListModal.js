import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import WishListForm from '../shared/WishListForm'
import { wishListUpdate, wishListShow } from '../../api/wishList'

import { useParams } from 'react-router-dom'


const EditWishListModal = (props) => {
    const {
        user, show, handleClose,
        msgAlert, triggerRefresh
    } = props
    //console.log("this is the props.wishList in editWishListModal\n", props.wishList)

    const [wishList, setWishList] = useState(props.wishList)

    const { id } = useParams()

    useEffect(() => {
        wishListShow(user, id)
            .then((res) => {
                setWishList(res.data.wishList)
                console.log("this is the id", id)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Wish List Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    // const handleCheck = () => {
    //     console.log("clicked")
    //     setWishList(prevWishList => {
    //         return { ...prevWishList, available: !prevWishList.available }
    //     })
    // }

    console.log("the wishList", wishList)

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

            if (updatedName === 'isWrapped' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'isWrapped' && !e.target.checked) {
                updatedValue = false
            }

            const updatedWishList = { [updatedName]: updatedValue }

            console.log(updatedWishList)

            return { ...prevWishList, ...updatedWishList }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        wishListUpdate(wishList, user, props.wishList.id)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated wish list!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update wish list Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <WishListForm
                    wishList={wishList}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    // onClick={handleUpdateWishList}
                    heading="Update Wish List"
                    // handleCheck={handleCheck}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditWishListModal