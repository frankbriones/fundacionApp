import react, { Component } from 'react';
import {
	FlatList,
} from 'react-native';
import Layout from '../components/evento-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';



class EventoList extends Component {
	renderEmpty = () => <Empty text="No hay Elementos" />

	itemSeparator = () => <Separator color="red" />


	render () {
		const list = [
			{
				title: 'Pokemon',
				key: '1',
			},
			{
				title: 'Digimon',
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
				//propiedad o funcion (componente) para devolver componente  que demuestre un mensaje
				// ListEmptyComponent={() => <Text>No ay Eventos en lista...</Text>} 

				ListEmptyComponent ={this.renderEmpty}
				ItemSeparatorComponent = {this.itemSeparator}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>

			</Layout>


		)
	}
}

export default EventoList;