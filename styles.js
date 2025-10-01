import {StyleSheet} from "react-native";

export default StyleSheet.create({
   title:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: '15%',
    alignContent: 'center',
  },
    input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  imgLogo: {
    width: '200px',
    height: '200px',
    resizeMode: 'contain',
    padding: 10,
  },
  ReviewButton: {
    width: '15%',
    alignContent: 'center',
    borderRadius: 8,
  },
  userInfo: {
    fontSize: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  userInfoContainer: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
})