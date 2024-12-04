// monitoringStyle.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    padding: 10,
  },
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
