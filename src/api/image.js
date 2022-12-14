import apiUrl from '../apiConfig'
import axios from 'axios'

export const imageCreate = async (wishListId, user, imgFile) => {
	await axios({
		method: 'POST',
		url: `${apiUrl}/image/${wishListId}`,
		data: {

			image: imgFile
		},
		headers: {
			Authorization: `Token token=${user.token}`,

		},
	})
}