import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {isShowingText: true};

        //Toggle the state every second

        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }

    render(){
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text style = { styles.bigblue}>{display}</Text>
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default class BlinkApp extends Component{
    render(){
        return (
            <View>
                <Blink text = "I love my INDIA"/>
                <Blink text = "Yes I love my INDIA"/>
                <Blink text = "Yeh Mera INDIA"/>
                <Blink text = "I love my INDIA"/>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject',()=> BlinkApp );

