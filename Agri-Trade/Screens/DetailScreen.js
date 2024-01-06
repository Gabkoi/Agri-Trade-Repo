import React from "react";
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Details = () => {
    return (
        <View style={styles.container}>
             <Image source={require('../assets/Orangepic.jpeg')}  style={styles.productImage}/>

             <View style={styles.nameContainer}>
                <Text style={styles.riceText}>Rice Seed</Text>
                {/* <Text style={styles.priceText}>$14/kg</Text> */}
             </View>

            <View style={styles.workContainer }>
             <Text style={styles.stockText}>Avialable in stock</Text>
             <Text style={styles.priceText}>$14/kg</Text>
             </View>

             
            <View style={styles.quanContainer}>
                <AntDesign name="minus" size={24} color="black" style={styles.textItem} />
                <Text style={styles.textItem}>1kg</Text>
                <Ionicons name="md-add" size={20} color="black"  style={styles.textItem}/>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.desText}>Description</Text>
                <Text numberOfLines={5} style={styles.paraText}>
                simply dummy text of the printing and typesetting good industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  1500 and it is 
                </Text>
            </View>   

            <View style={styles.buttonContainer}>
                 <Text style={styles.buttonText}>Add to Cart</Text>
            </View> 

        </View>





    )
}


export default Details;   



const styles = StyleSheet.create({
    container: {
    flex:1,
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    },

    productImage: {
      height: 200,
      width: '100%',
      borderRadius: 10, // Border radius for the image
    },


    nameContainer:{
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between"
    },

    riceText:{
        fontSize: 20
    },

     priceText:{
        fontSize: 20
     },

    stockText:{
        fontSize: 16,
        color: "green"

    },

    quanContainer:{
        flexDirection: "row",
        justifyContent:"flex-end",
        marginHorizontal: 1,
        marginTop:5
    },

    textItem:{
        marginHorizontal: 2,
    },

    workContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },

    // Decriptiion styles'
    paraText:{
        fontSize: 16,
        marginTop: 10

    },

    desText:{
        fontSize: 20,
        fontWeight: "bold"
    },

    buttonContainer:{
        marginTop:50,
        backgroundColor: "#00B251",
        borderRadius:18,
        paddingHorizontal:5,
        paddingVertical: 15
    },

    buttonText:{
        fontSize:20,
        textAlign:"center",
        color: "white"
    },

    
      
    



});
  