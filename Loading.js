import React from 'react';
import { StyleSheet, Text, View  , StatusBar} from 'react-native';

const Loading = () => {
    return (
        <View style = {styles.container}>
            <StatusBar
        barStyle='light-content'
        animated={true}
        backgroundColor='#fdf6aa'
 />
            <Text style = {styles.text}>Получение данных...</Text>
            <Text style = {styles.text}>Rostislav Rancevich</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
       justifyContent:'space-around',
       alignContent:'center',
       alignItems:'center',
       backgroundColor:'#fdf6aa'
    },
    text:{
        fontStyle:'italic',
        fontSize:24,
        color:'#2c2c2c'
    }

})


export default Loading;