import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react-native';



function Header(props) {
	return(
		<View>
			// para tener un area segura en iphone
			<SafeAreaView>
				<View style={styles.container}>
					<Image 
						source={require('../../../assets/aurora.jpeg')}
						style={styles.logo}
					/>
					<View style={styles.right}>
						{props.children}

					</View>
				</View>
			</SafeAreaView>
		</View>


	)
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 25,
		// default resizeMode: 'cover';
		resizeMode: 'contain',
	},
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: 'red',
		// para colocar en una sola lines de manera horizontal los componets
		flexDirection: 'row',

	},

	right: {
		backgroundColor: 'green',
		// ocupar mas espacio al elemento
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	}

})

export default Header;