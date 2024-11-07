import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004481',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  mapContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D0E9F2',
    borderRadius: 8,
    margin: 10,
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
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#D0E9F2',
    borderRadius: 8,
    margin: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
