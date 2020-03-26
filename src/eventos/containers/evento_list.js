import react, { Component } from 'react';
import {
	FlatList,
} from 'react-native';
import Layout from '../components/evento-list-layout.js';



class EventoList extends Component {
	render () {
		const list = [
			{
				title: 'leo',
				key: '1',
			},
			{
				title: 'Franklin',
				key: '2',
			}
		]
		return (
			// importar el layout para los eventos list
			<Layout
				title="Lista de Eventos"
			>
			<FlatList 

				data={list}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>

			</Layout>


		)
	}
}

export default EventoList;