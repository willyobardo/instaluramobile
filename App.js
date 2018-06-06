/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Images,
  Dimension,
  ScrollView,
  FlatList
} from 'react-native';
import Post from ('./src/components/post.js')

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};


export default class App extends Component<Props> {

  //const width = Dimension.get('screen').width;
   constructor() {
            super();
            this.state = {
                fotos: []
            }
        }

        componentDidMount() {
          //Recebe os arquivos batendo na API
          //Pega a resposta.json e trata colocando na resposta
          //passa o json tratado para o fotos do state do componente

            fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
                .then(resposta => resposta.json())
                .then(json => this.setState({fotos: json}));
        }

    /*          componentDidMount() {
        fetch('http://localhost:8080/api/public/fotos/rafael')
          .then(resposta => resposta.json())
          .then(json => this.setState({fotos: json}))
          .catch(e => {
            console.warn('Não foi possível carregar as fotos: ' + e);
            this.setState({status: 'ERRO'})
          });
      }
    */

  render() {
    return (
      //Componente de Alto nivel, aonde varias interacoes como Infinite scroll ou go to top podem ser feitas mais facil

      <FlatList style = {style.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={ ({item})} =>
        <Post foto={item}/> // Passa pro component props do data do json
      /> 

  /*

        <ScrollView>
          {fotos.map(foto=>
            <View key={fotos.id}>
              <Text>{fotos.usuario}</Text>
              <Image source= {require('.resources/img/placeholder.jpg')}
              style={{width:width, height:width}}/>
            </View>
          )}
        </ScrollView>
  */

    );
  }
}

const styles = StyleSheet.create(
  container: {
    marginTop:20
  }
);