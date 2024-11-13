import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { TouchableOpacity, TouchableHighlight } from 'react-native';

export default function BuySellPanel({ stock }: any) {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Number(quantity) * stock.price);
  }, [quantity, stock.price]);

  const incrementQuantity = () => {
    setQuantity(quantity + 100);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(0, Number(quantity) - 100);
    setQuantity(newQuantity);
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{stock.symbol} - Compra/Venda</Text>
      
      <View style={styles.quantityContainer}>
        <TouchableHighlight
          onPress={decrementQuantity}
          style={[styles.quantityButton, styles.decrementButton]}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>

        <TextInput
          mode="outlined"
          value={String(quantity)}
          onChangeText={(value)=> {
              if(!isNaN(+value)){
                String(setQuantity(+value))
              }
            }}
          keyboardType="numeric"
          style={styles.quantityInput}
        />

        <TouchableOpacity
          onPress={incrementQuantity}
          style={[styles.quantityButton, styles.incrementButton]}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buySellActions}>
        <Text variant="titleMedium">
          Valor Total: ${totalPrice.toFixed(2)}
        </Text>
        <Button mode="contained" onPress={() => {}}>
          Comprar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  buySellActions:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  quantityInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  decrementButton: {
    backgroundColor: '#FF4444',
  },
  incrementButton: {
    backgroundColor: '#44FF44',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});