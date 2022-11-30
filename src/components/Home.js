import React from "react"
import { Container, Image } from 'react-bootstrap'

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)
	const picture = require("./shared/images/christmasborder2.jpeg")
	return (
		<>
			<Container fluid className='left'>
				<Image className='m-n5' fluid src={picture} style={{ width: '600px', height: '600px' }} />
			</Container>
		</>
	)
}

export default Home

