/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// componentes creados
import Home from './src/screens/container/home.js';



// const App: () => React$Node = () => {
//   return (
//     <Home>
//     </Home>
    
//   );
// };

type Props = {};
export default class App extends Component<Props>{
  render (){
    return (
      <Home>

      <Text>Header</Text>
      <Text>Buscador</Text>
      <Text>secciones</Text>
      <Text>Listado</Text>

      </Home>
      );
  }
}


export default App;
