import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import ReactNativeBluetoothEscposPrinter from 'react-native-bluetooth-escpos-printer';

const Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  useEffect(() => {
    ReactNativeBluetoothEscposPrinter.getPairedPrinters().then(printers => {
      setPrinters(printers);
    });
  }, []);

  const handlePrint = async () => {
    if (!selectedPrinter) {
      return;
    }

    const printer = new ReactNativeBluetoothEscposPrinter.Printer(
      selectedPrinter,
    );

    // Print some text
    await printer.printText('Hello, world!');

    // Close the connection
    await printer.close();
  };

  return (
    <View>
      <Text>Printers:</Text>
      <FlatList
        data={printers}
        keyExtractor={item => item.address}
        renderItem={({item}) => (
          <Button title={item.name} onPress={() => setSelectedPrinter(item)} />
        )}
      />
      <Button title="Print" onPress={handlePrint} />
    </View>
  );
};

export default Printer;
