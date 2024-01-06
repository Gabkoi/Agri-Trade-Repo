import React from "react";
import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AddToCard = () =>{
    return(
        <ScrollView style={styles.ScrollContiner}>
            <View style={styles.Container}>
            <Image
            source={require('../assets/Orangepic.jpeg')}
            style={[styles.image1]}/>

            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={styles.headingText}>Rice Seeds</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Price</Text>
                    <Text style={styles.amountText}>$20.00</Text>
                </View>
            </View>
            </View>
        <View style={styles.buttonContainer}>
             <Text style={styles.buttonText}>Checkout </Text>
        </View>     
    </ScrollView>
    );
};


export default AddToCard



const styles = StyleSheet.create({

    Container:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#fffcfc"
    },

    ScrollContiner:{
        padding:15
    },
    
    textContainer:{
        marginLeft: 10,
        marginTop:10
    },

    priceContainer:{
        flexDirection:"row",
        marginTop:-5
    },

    priceText:{
        fontSize:16,
        color:"black"
    },

    amountText:{
        paddingHorizontal: 10,
        fontSize:15,
        color: "green"
    },


    headingText:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -40
    },

    image1:{
        width:150,
        height: 100,
    },

    // button styles
    buttonContainer:{
        marginTop:30,
        backgroundColor: "#00B251",
        borderRadius:20,
        paddingHorizontal:5,
        paddingVertical: 15
      },
      
      buttonText:{
        fontSize:20,
        textAlign:"center",
        color: "#ffff"
      },
})