import React from "react";
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.searchBarWidth]}>
          <Feather name="search" size={20} color="black" />
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Find your favorite food"
            />
          </View>
        </View>
        <Feather name="shopping-cart" size={24} color="black" style={styles.shopMe} />
      </View>

      <ScrollView>
      {/* Product List one */}
      <View style={styles.PriductlistContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Orangepic.jpeg')}
            style={[styles.image, styles.image1]}
          />
        </View>
        <View style={styles.featuretextContainer}>
          <Text style={styles.productText}>Featured Products</Text>
          <Text style={styles.productSeeall}>See All</Text>
        </View>
      </View>

      {/* Product List two */}
      <View style={styles.productcontainer}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../assets/Rice.jpg')} />
          <Text style={styles.cardText}>Rice Seeds</Text>
          <View style={styles.priceButoonContainer}>
            <Text style={styles.cardText}>$2000Ld</Text>
            <Ionicons name="add-outline" size={20} color="white" style={styles.imageIcon} />
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../assets/Cassava.jpg')} />
          <Text style={styles.cardText}>Cassava</Text>
          <View style={styles.priceButoonContainer}>
            <Text style={styles.cardText}>$2000Ld</Text>
            <Ionicons name="add-outline" size={20} color="white" style={styles.imageIcon} />
          </View>
        </View>
      </View>

      <View style={styles.productcontainer}>
       <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../assets/Cassava.jpg')} />
          <Text style={styles.cardText}>Cassava</Text>
          <View style={styles.priceButoonContainer}>
            <Text style={styles.cardText}>$2000Ld</Text>
            <Ionicons name="add-outline" size={20} color="white" style={styles.imageIcon} />
          </View>
        </View>
    
      <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../assets/Cassava.jpg')} />
          <Text style={styles.cardText}>Cassava</Text>
          <View style={styles.priceButoonContainer}>
            <Text style={styles.cardText}>$2000Ld</Text>
            <Ionicons name="add-outline" size={20} color="white" style={styles.imageIcon} />
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
    marginTop: 20,
  },

  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    padding:10,
    marginTop: 55
  },

  searchBar: {
    flex: 100,
    flexDirection: "row",
  },

  searchBarWidth: {
    borderWidth: 2,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    padding: 10,
    marginRight: 20,
    width: "100%",
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 130,
    width: 350,
    padding: 10,    
  },

  image:{
    height: 190,
    width: 340,
    resizeMode: 'cover',
    marginTop: 50,
    // margin: 16, 
    padding: 10

  },

  // This styles is for the  body card
  productcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: 20
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 3,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 170,
    borderRadius: 5,
    marginBottom: 1,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // tryme button 
  priceButoonContainer:{
    flex:1,
    flexDirection:"row",
    marginTop: 10
    // justifyContent: ""
  },

  imageIcon:{
    marginLeft:50,
    fontSize: 30,
    backgroundColor: "#00B251",
    marginBottom: 2
  }
  
});

export default Home;
