import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Navbar from "../component/navbar";
import Animation12 from "../assets/images/extra.png";
import BckImage from "../assets/images/backimage.jpeg";
import Mapelimage from "../assets/images/mapel.png"; 
import Aktiv from "../assets/images/aktive.png"

const Home = ({ navigation }) => {
  const dataSiswa = [
	{ gambar: (Animation12), text: "Daftar Eskul" },
	{ gambar: (Mapelimage), text: "Mapel" },
	{ gambar: (Aktiv), text: "Kegiatan " },
];

  return (
    <>
      <Navbar />
      <View className="flex-1">
        <ImageBackground source={BckImage} style={styles.bck1}>
          <View style={styles.wraphalo}>
            <Text style={styles.halo}>DATA SISWA</Text>
            <Text style={styles.Welcome}>SMK TELKOM</Text>
          </View>

          {dataSiswa.map((post) => {
            return(
            <View style={styles.containerextra}>
              <Image source={post.gambar} style={styles.animation1} />
              <TouchableOpacity
                style={styles.wrapeskul}
                onPress={() => navigation.navigate("eskul")}
              >
                <Text style={styles.eskul}>{post.text}</Text>
              </TouchableOpacity>
            </View>
			)
          })}
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  wraphalo: {
    marginTop: 30,
    marginLeft: 20,
  },

  halo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },

  Welcome: {
    fontSize: 20,
    color: "black",
  },

  containerextra: {
    width: 400,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 20,
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection: "row",
  },

  animation1: {
    marginLeft: 20,
    marginTop: 5,
    width: 140,
    height: 140,
    resizeMode: "stretch",
  },
  wrapeskul: {
    width: 100,
    height: 40,
    borderRadius: 5,
    marginTop: 50,
    marginLeft: 100,
    backgroundColor: "#2B2A4C",
  },

  eskul: {
    textAlign: "center",
    marginTop: 12,
    color: "white",
  },

  bck1: {
    flex: 1,
    resizeMode: "cover",
  },
});
