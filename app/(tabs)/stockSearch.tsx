import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar, Button, Card, Text, TextInput, IconButton, MD3Colors } from 'react-native-paper';

import { useDeferredValue, useState } from 'react'

import StockCard from '../../components/StockCard';
import BuySellPanel from '../../components/BuySellPanel';

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState(null as any);
  const [showBuySellPanel, setShowBuySellPanel] = useState(false);

  const mockStocks = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 150.25 },
    { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.50 },
  ];

  const [listaFiltrada, setListaFiltrada] = useState(mockStocks);

  function filter(clear = false) {
    setListaFiltrada(mockStocks.filter(({ symbol, name }) => {

        return clear || (
          searchQuery === "" ||
          symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }))
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Buscar ações"
          onChangeText={text => {
            setSearchQuery(text);
          }}
          onClearIconPress={() => {
            filter(true)
          }}
          value={searchQuery}
          style={styles.searchBar}
        />

        <Button mode="contained" onPress={() => filter()}>
          Buscar
        </Button>
      </View>
      {listaFiltrada.map(stock => (
        <StockCard
          key={stock.id}
          stock={stock}
          onPress={() => {
            setSelectedStock(stock)
          }}
          onBuySellPress={() => setShowBuySellPanel(true)}
        />

      ))}

      {/* <BuySellPanel stock={mockStocks[0]} /> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    marginRight: 8,
  },
  stockCard: {
    marginBottom: 8,
  }
});