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
  FlatList,
  TouchableOpacity
} from 'react-native';


export default class Post extends Component<Props> {
	const width = Dimension.get('screen').width;
  render() {
    return (
          <View>
            <View style={styles.cabecalho}}>
              <Image source= {uri: this.props.foto.urlPerfil}
              style={styles.fotoDePerfil}/>
              <Text>{this.props.foto.loginUsuario}</Text>
            </View>
            <Image source= {{uri: this.props.foto.urlFoto}}
              style={styles.fotoPost}/>

            <View style={styles.rodape}>
	            <TouchableOpacity onPress={this.like}}>
	            	<Image style={styles.botaoDeLike} 
	            	source= {}
	              	/>
	            </TouchableOpacity>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create(
  cabecalho:{
    margin:10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoDePerfil{
    borderRadius:20px,
    marginRight:10,
    width:40, 
    height:40
  },
  fotoPost{
    width:width, 
    height:width
  },
  rodape{
  	flexDirection: 'row',
  	margin:10
  },
  botaoDeLike{
  	width:40,
  	height:40
  }
);