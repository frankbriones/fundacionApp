import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';


function Empty(props){
	return (
		<View styles={style.container}>
			<Text styles={style.text}>{props.text}</Text>
		</View>

	)
}


const styles = StyleSheet.create({
	container:{
		padding: 10,
	},

	text: {
		fontSize: 16,
	}
})

export default Empty;