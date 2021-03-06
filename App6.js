import React, {Component} from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TextInput} from 'react-native';

export default class ButtonBasics extends Component{
    _onPressButton(){
        Alert.alert('You tapped the button!!!');
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress = {this._onPressButton}
                            title = 'Press me 1'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress = {this._onPressButton}
                            title = 'Press me 2'
                            color = "#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    buttonContainer:{
        margin: 20
    },
    alternativeLayoutButtonContainer:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

