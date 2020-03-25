import react, { Component } from 'react';
import {
	FlatList,
} from 'react-native';


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
			<FlatList 

				data={list}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>

		)
	}
}

export default EventoList;