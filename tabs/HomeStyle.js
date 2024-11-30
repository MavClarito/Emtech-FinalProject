import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1', // Set overall background color
  },
  
  backgroundImage: {
    width: '100%', 
    height: 250, // Fixed height for background image
    position: 'absolute',
    bottom: 0, // Position image at the bottom
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,  // Height of the overlay to match bottom section
    backgroundColor: '#E0F7FA', // Apply the background color overlay
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#004481',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    zIndex: 10,
    elevation: 5,
  },
  scrollContainer: {
    paddingTop: 170, 
    paddingHorizontal: 20,
  },
  mapContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(208, 233, 242, 0.9)', // Ensure map container is readable
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  titleText: {
    fontSize: 18,
    color: '#00509E',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00509E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: 'rgba(208, 233, 242, 0.9)', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
  },
  logo: {
    width: 80,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
