import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-start',  
  },

  // Hamburger Menu Button
  hamburgerButton: {
    position: 'absolute',
    top: 30,              // Adjust top as needed
    left: 20,             // Adjust left as needed
    backgroundColor: '#00509E',  // Background color for the button circle
    width: 50,            // Width of the circle
    height: 50,           // Height of the circle
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,     // Half of width and height to make it circular
    zIndex: 100,         
  },

  hamburgerIcon: {
    width: 30,
    height: 3,
    backgroundColor: '#fff', // Color of the bars (White in this case)
    borderRadius: 3,
    marginBottom: 6,
  },

  hamburgerIconMiddle: {
    width: 30,
    height: 3,
    backgroundColor: '#fff', // Color of the middle bar
    borderRadius: 3,
    marginBottom: 6,
  },

  hamburgerIconBottom: {
    width: 30,
    height: 3,
    backgroundColor: '#fff', // Color of the bottom bar
    borderRadius: 3,
  },

  // Menu 
  menuContainer: {
    position: 'absolute',
    top: 70,              // Adjust top to show below the hamburger
    left: 20,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 12,
    padding: 10,
    elevation: 10,        
    zIndex: 99,           
  },

  menuItem: {
    paddingVertical: 10,
  },

  menuItemText: {
    fontSize: 16,
    color: '#00509E',
    textAlign: 'left',
  },

  // Image container
  imageContainer: {
    width: '90%',
    height: 500,
    backgroundColor: '#B2EBF2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,        
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  parameterList: {
    width: '100%',
  },
  parameterContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  parameterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00509E',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00509E',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  recommendationContainer: {
    marginTop: 15,
    paddingLeft: 10,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00509E',
  },
  recommendationList: {
    marginTop: 10,
  },
  recommendationText: {
    fontSize: 14,
    color: '#333',
  },
});
