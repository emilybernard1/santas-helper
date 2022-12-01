import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { imageCreate } from "../../api/image";
import { useNavigate, useParams } from 'react-router-dom'

const Upload = ({ user, wishList }) => {

	const [fileInputState, setFileInputState] = useState('')

	const [previewSource, setPreviewSource] = useState('')

	const { wishListId } = useParams()
	const navigate = useNavigate()

	//show the user the picture they selected
	const previewFile = (file) => {
		//File reader is a built in js
		const reader = new FileReader()
		//converts image to string
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewSource(reader.result)
		}
	}

	const handleFileInputChange = (e) => {
		const file = e.target.files[0]
		previewFile(file)
	}

	const uploadImage = async (previewSource) => {
		let imgFile = previewSource

		imageCreate(wishListId, user, imgFile)
			.then(res => { navigate(`/santasHelper/${wishListId}`) })
			.catch((error) => {
				console.log(error)
			})
	}

	const handSubmitFile = (e) => {
		e.preventDefault()
		if (!previewSource) return;
		uploadImage(previewSource)
	}

	return (
		<div>
			<Form onSubmit={handSubmitFile} className='form'>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Your Image</Form.Label>
					<Form.Control
						type="file"
						placeholder="Choose a picture"
						onChange={handleFileInputChange}
						name='image'
						value={fileInputState}
					/>
					<small>picture must be a jpeg</small><br />
					<Button variant="primary" type='submit'> Submit </Button>
				</Form.Group>

			</Form>
			{previewSource && (
				<img src={previewSource} alt='chosen picture'
					style={{ height: '300px' }} />
			)}
		</div>
	)
}

export default Upload