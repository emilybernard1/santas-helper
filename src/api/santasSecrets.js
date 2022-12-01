import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createSantasSecrets = (user, wishListId, newSantasSecrets) => {
	return axios({
		url: `${apiUrl}/santasSecrets/${wishListId}`,
		method: 'POST',
		data: { santasSecrets: newSantasSecrets }
	})
}

// GET Santa's Secrets
export const getSantasSecrets = (user, wishListId) => {
	return axios({
		url: `${apiUrl}/santasSecrets/${wishListId}`,
		method: 'GET'
	})
}

// UPDATE Santa's Secrets
export const updateSantasSecrets = (user, wishListId, updatedSantasSecrets) => {
	return axios({
		url: `${apiUrl}/santasSecrets/${wishListId}/${updatedSantasSecrets._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { santasSecrets: updatedSantasSecrets }
	})
}

// DELETE Santa's Secrets
export const deleteSantasSecrets = (user, wishListId, santasSecretsId) => {
	return axios({
		url: `${apiUrl}/santasSecrets/${wishListId}/${santasSecretsId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}

