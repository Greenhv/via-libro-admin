import React from 'react'
import Head from 'next/head'
import { Container } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../components/nav'
import ActivityForm from '../components/ActivityForm';
import axios from 'axios';

axios.defaults.baseURL = 'https://vialibro-api.herokuapp.com';

const Home = () => (
	<Container>
		<CssBaseline />
		<Head>
			<title>LibroBot Admin - Crear Actividad</title>
		</Head>
		<Nav />
		<ActivityForm />
		<style jsx>{`
			body {
				margin: 0;
			}
		`}</style>
	</Container>
)

export default Home
