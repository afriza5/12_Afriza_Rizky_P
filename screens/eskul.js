import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import BckImage from "../assets/images/backimage.jpeg";
import Navbar from "../component/navbar";
import { useNavigation } from "@react-navigation/native";

export default function Eskulpage() {

	const navigation = useNavigation();

  const [text, onChangeText] = React.useState("masukan NIS");
  const [text2, onChangeText2] = React.useState("pilih eskul",);

  const Eskul = [
	{eskul: 'Basket'},
	{eskul: 'Web tech'},
	{eskul: 'Cyber Security'},
	{eskul: 'Futsal'},
  ]

  return (
    <>
      <Navbar />
      <ImageBackground source={BckImage} style={styles.bck1}>
        <View style={styles.wraphalo}>
          <Text style={styles.halo}>Pilih Eskul,</Text>
          <Text style={styles.Welcome}>Kembangkan bakat anda</Text>
        </View>
        <View className="flex justify-center">
          <View>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
            />
            <TextInput
              style={styles.input}
              value={text2}
              onChangeText={onChangeText2}
            />
            <TouchableOpacity
			onPress={() => navigation.navigate("Dashboard")}
			>
              <Text style={styles.daftar2}>
                Daftar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  wraphalo: {
    marginTop: 30,
    marginLeft: 20,
  },

  halo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  Welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  bck1: {
    flex: 1,
    resizeMode: "cover",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    color: "black",
	marginTop:30
  },

  daftar2:{
	color: 'black',
	backgroundColor: "yellow", 
	width:100, 
	height:30,
	textAlign: 'center',
  fontWeight:'bold',
	borderRadius: 5, 
	marginLeft: 130, 
	paddingTop:5, 
	marginTop:20
  }
});
