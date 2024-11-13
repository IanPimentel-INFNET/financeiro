import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link, Stack } from 'expo-router';

export default function Index() {
  const user = {
    name: 'Francisco',
    profileImage: 'https://thispersondoesnotexist.com/'
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Olá, {user.name}!!</Text>
        <Link href="/transactions" asChild>
        <TouchableHighlight>
          <Button
            mode="contained"
            // onPress={() => {/*navigation.navigate('Transactions')*/}}
          >
            Transações
          </Button>
          </TouchableHighlight>
        </Link>
        
      </View>
      <Link href="/stockSearch" asChild>
        <Button
          mode="contained"
          // onPress={() => {/*navigation.navigate('StockSearch') */}}
          style={styles.searchButton}
        >
          Pesquisar Ações
        </Button>
      </Link>
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
    width:"100%"
  },
});