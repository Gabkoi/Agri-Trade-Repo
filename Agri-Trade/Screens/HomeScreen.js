import React from "react";
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity, handlePress } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.greetingHead}>
          <Text style={styles.greetingheadText}>Hi Gabriel</Text>
          <View style={styles.headIcon}>
            <Feather name="shopping-cart" size={24} color="black" style={styles.shopMe} onPress={()=> navigation.navigate("DetailScreen")}/>
          </View>
        </View>
      <Text style={styles.enjoyText}>Enjoy your Services</Text>

      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.searchBarWidth]}>
          <Feather name="search" size={20} color="black" />
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Find your favorite food"
            />
          </View>
        </View >
        </View>
    

      <ScrollView>
      {/* Product List one */}
      <View>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/Orangepic.jpeg')}  style={styles.productImage} />
        </View>
  
        <View style={styles.featuretextContainer}>
          <Text style={styles.productText}>Featured Products</Text>
          <Text style={styles.productSeeall}>See All</Text>
        </View>
      </View>

      {/* Product List one */}
      <View style={styles.productcontainer}>
       <View style={styles.bodyContainer}>
        <View style={styles.imageCon}>
    <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen")}>
        <Image style={styles.cardImage} source={require('../assets/Rice.jpg')} />
    </TouchableOpacity>
       <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Rice Seeds</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceStyles}>Price</Text>
          <Text style={styles.amountStyles}>$14.00</Text>
        </View>
        <View style={styles.AddContainer}>
        </View>
        </View>
       </View>
       </View>

       <View style={styles.bodyContainer}>
        <View style={styles.imageCon}>
        <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen")}>
             <Image style={styles.cardImage} source={require('../assets/Rice.jpg')} />
       </TouchableOpacity>
        <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Rice Seeds</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceStyles}>Price</Text>
          <Text style={styles.amountStyles}>$14.00</Text>
        </View>
        <View style={styles.AddContainer}>
        </View>
        </View>
       </View>
       </View>
      </View>


      {/* Product List Two */}
      <View style={styles.productcontainer}>
       <View style={styles.bodyContainer}>
        <View style={styles.imageCon}>
        <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen")}>
            <Image style={styles.cardImage} source={require('../assets/Rice.jpg')} />
       </TouchableOpacity>
       <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Rice Seeds</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceStyles}>Price</Text>
          <Text style={styles.amountStyles}>$14.00</Text>
        </View>
        <View style={styles.AddContainer}>
        </View>
        </View>
       </View>
       </View>

       <View style={styles.bodyContainer}>
        <View style={styles.imageCon}>
          <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen")}>
               <Image style={styles.cardImage} source={require('../assets/Rice.jpg')} />
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Rice Seeds</Text>
            <View style={styles.priceContainer}>
          <Text style={styles.priceStyles}>Price</Text>
          <Text style={styles.amountStyles}>$14.00</Text>
           </View>
           <View style={styles.AddContainer}>
             </View>
             </View>
       </View>
       </View>
      </View>  
      </ScrollView>
    </View>
  );
};



// export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    padding:10,
    marginTop: 10,
    width:"102%"
  },

  // greating styles 

  greetingHead:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10,
    paddingHorizontal: 18
  },
  greetingheadText:{
    fontSize:20,
    color:"black",
    fontWeight:"bold"
  },

  enjoyText: {
    fontSize: 18,
    marginTop: -10,
    paddingHorizontal: 18
  },


  searchBar: {
    flex: 100,
    flexDirection: "row",
  },

  searchBarWidth: {
    borderWidth: 2,
    height: 43,
    borderRadius: 100,
    alignItems: "center",
    padding: 10,
    marginRight: 20,
    // width: "110%",
  },

  searchInputContainer: {
    flex: 1,
    marginLeft: 10,
  },

  searchInput: {
    flex: 1,
  },

  shopMe: {
    padding: 10,
    fontSize: 25,
  },

  featuretextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginTop:30
  },

  productText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    marginTop: 40
  },

  productSeeall: {
    fontSize: 18,
    paddingRight: 10,
    color: "green",
    marginTop: 50
  },

  // product styles code 
  imageContainer:{
    flex:1,
    height: 130,
    width: 350,   
    padding: 15,
    paddingHorizontal: 10,
  },

  productImage: {
    height: 100,
    width: '100%',
    borderRadius: 10, 
    height: 180,
   
  },

  // This styles is for the  body card
  productcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: 20,
    borderColor: 'green',
  },
  

  bodyContainer: {
    flex: 1,
    padding: 3,
    marginHorizontal: 8,
  },

  cardImage: {
    width: "100%",
    height: 130,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    marginBottom: 1,
  },

  cardText: {
    fontSize: 20,
    marginTop: 1
    //  fontWeight: 'bold',
  },

  cardPrice:{
    fontSize: 18,
    fontWeight:"bold"
  },
 
  cardContainer:{
    padding: 4
  },

  priceContainer:{
    flexDirection: "row",
  },

  amountStyles:{
    paddingHorizontal: 10,
    fontSize: 15,
    color: "green"
  },

  priceStyles:{
    fontSize: 15
  },

  AddContainer:{
    backgroundColor: "#00B251",
    marginTop: 5,
    borderRadius: 10,
    width: 100,
  },


  imageCon:{
    borderWidth: 1, 
    width:"100%",
    borderRadius: 10, 
    borderColor: "green",
    borderTopLeftRadius: 18, 
    borderTopRightRadius: 18,
  },
  
  priceCard:{
    fontSize: 16,
    padding: 5,
    // fontWeight: "bold"
  },
});



export default Home;