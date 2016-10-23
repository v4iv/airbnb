/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, Text} from 'react-native';
import {fetch} from 'fetch';
import ListCard from '../ListCard/index';
import styles from './stylesheet';

export default class MainScene extends Component {
    constructor() {
        super();
        this.state = {
            listings: [],
            likedIDs: [],
        };
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/frantic/892564944e2230ee712a76f2a214365d/raw/397b9e29a703a3acf5d31cb507e231fb0aaa41e5/listings.json')
            .then(response => response.json())
            .then((data) => {
                this.setState({listings: data});
            });
    }

    toggleLike(id) {
        const {likedIDs} = this.state;
        const isLiked = likedIDs.indexOf(id) !== -1;
        if (isLiked) {
            this.setState({likedIDs: likedIDs.filter(i => i !== id)});
        } else {
            this.setState({likedIDs: [...likedIDs, id]});
        }
    }

    render() {
        const listCards = this.state.listings.map(
            (listing) =>
                <ListCard
                    key={listing.id}
                    listing={listing}
                    isLiked={this.state.likedIDs.indexOf(listing.id) !== -1}
                    onLike={() => this.toggleLike(listing.id)}/>);
        return (
            <View style={{flex: 1}}>
                <View style={styles.toolbar}>
                    <Text>AirBnB</Text>
                    <Text style={styles.results}>
                        Santa Cruz • {this.state.listings.length} homes
                    </Text>
                </View>
                <ScrollView
                    style={styles.container}>
                    {listCards}
                </ScrollView>
            </View>
        );
    }
}