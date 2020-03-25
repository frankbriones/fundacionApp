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
				<Image 
					source={require('../../../assets/aurora.jpeg')}
					style={styles.logo}
				/>
			</SafeAreaView>
		</View>


	)
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 25,
		resizeMode: 'contain',
	},

})

export default Header;