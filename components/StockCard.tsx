import { Card, Button, Text, IconButton, MD3Colors } from 'react-native-paper';
import BuySellPanel from './BuySellPanel';
import { StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function StockCard({ stock }:any) {
  const [open, setOpen] = useState(false)
  const [showBuySellPanel, setShowBuySellPanel] = useState(false)

  return (
    <Card style={styles.card}>
      {open ? (
        <>
        <Card.Content style={styles.card} >
          <Pressable onPress={()=>setOpen(!open)}>
            <Text variant="titleLarge">{stock.symbol}</Text>
            <Text variant="bodyMedium">{stock.name}</Text>
            <Text variant="bodyMedium">Preço: ${stock.price}</Text>
          </Pressable>
          {showBuySellPanel && <BuySellPanel stock={stock}/>}
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => setShowBuySellPanel(!showBuySellPanel)}>
            C/V
          </Button>
        </Card.Actions>
        </>
      )
       : (
        <Pressable onPress={()=>setOpen(!open)}>
          <Card.Content style={styles.stockInList} >
            <View>
            <Text>{stock.symbol} - {stock.name}</Text>
            <Text>Preço: ${stock.price}</Text>
            </View>
          </Card.Content>
        </Pressable>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    paddingVertical: 8,
  },
  stockInList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});