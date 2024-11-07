// MonitoringStyle.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '50%',
  },
  parameterContainer: {
    width: '90%',
    backgroundColor: '#D0E9F2',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  parameterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00509E',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  coverageContainer: {
    marginTop: 20,
    backgroundColor: '#D0E9F2',
    padding: 10,
    borderRadius: 8,
  },
  coverageText: {
    fontSize: 20,
    color: '#00509E',
    fontWeight: 'bold',
  },
});
