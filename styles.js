import { StyleSheet } from 'react-native';

export default StyleSheet.create({
title: {
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
},
homepageButtonRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',  
  maxWidth: 400, 
  marginTop: 20,
},

homepageButtonContainer: {
  flex: 1,
  minWidth: 120,    
  maxWidth: 180,    
  marginHorizontal: 10,
},

  container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
},

buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 15,
},

buttonContainer: {
  flex: 0.4,
  maxWidth: 140,
  borderRadius: 8,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  overflow: 'hidden',
},
input: {
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 12,
  marginBottom: 15,
  borderRadius: 8,
  backgroundColor: '#fff',
  width: '100%',
  fontWeight: 500,
  color: '#333',
  shadowColor: '#000000ff',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 2,
  elevation: 1,
},
  imgLogo: {
    width: 150,   
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  userInfoContainer: {
  width: '100%',            
  maxWidth: 400,         
  alignSelf: 'center',    
  padding: 20,
  marginBottom: 10,
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2,
},
 userInfo: {
  fontSize: 16,
  marginBottom: 12,        
  color: '#333',
  fontWeight: '500',        
  backgroundColor: '#f0f0f0', 
  padding: 10,
  borderRadius: 6,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 2,
  elevation: 1,
},
card: {
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 15,
  marginBottom: 8,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOpacity: 0.5,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 6,
  elevation: 4,
},
cardText: {
  fontSize: 14,
  color: '#222',
  marginBottom: 4,
},
reviewButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',  // more space between buttons
  width: '90%',                     // slightly wider container
  marginTop: 30,                   // more top margin for spacing from content
  alignSelf: 'center',
},

reviewButton: {
  flex: 0.45,
  maxWidth: 160,
  borderRadius: 8,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  marginHorizontal: 8,             // horizontal margin inside button containers
},
EditUserButtonContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
},
EditUserButton: {
  maxWidth: '50%',
  borderRadius: 8,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  overflow: 'hidden',
}

});
