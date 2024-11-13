import { View, Image, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    flex: 1,
  },
  searchButton: {
    marginTop: 20,
  },
});