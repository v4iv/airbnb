/**
 * React Native AirBnB App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
import { fetch } from 'fetch';

class ListCard extends Component {

  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{uri: this.props.listing.previewImageURL}}>
        </Image>
        <View style={styles.info}>
          <View style={styles.main}>
            <Text style={styles.name}>
              {this.props.listing.name}
            </Text>
            <Text style={styles.details}>
              {this.props.listing.typeText}
              {' • '}
              {this.props.listing.location}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class airbnb extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/frantic/892564944e2230ee712a76f2a214365d/raw/397b9e29a703a3acf5d31cb507e231fb0aaa41e5/listings.json')
      .then(response => response.json())
      .then((data) => {
        console.log('Response from API:', data);
        this.setState({listings: data});
      });
  }
  render() {
    const listCards = this.state.listings.map((listing) => <ListCard key={listing.id} listing={listing}/> );
    return (
      <ScrollView>
        {listCards}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 16,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: '#333',
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  image: {
    height: 150,
  },
});


AppRegistry.registerComponent('airbnb', () => airbnb);
