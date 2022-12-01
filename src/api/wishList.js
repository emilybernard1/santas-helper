import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Wish List
export const wishListCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/santasHelper',
		data: {
			wishList: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// UPDATE Wish List
export const wishListUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/santasHelper/' + id,
		data: {
			wishList: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// GET all Wish Lists
export const wishListIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/santasHelper'
	})
}

// GET one Wish List
export const wishListShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/santasHelper/' + id
	})
}

// DELETE Santa's Secrets
export const wishListDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/santasHelper/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}