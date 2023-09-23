import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Printer } from 'react-native-bluetooth-escpos-printer';

const App = () => {
  const [printer, setPrinter] = useState(null);

  const connectPrinter = async () => {
    const printer = new Printer();
    await printer.connect('MAC_ADDRESS_OF_PRINTER');
    setPrinter(printer);
  };

  const disconnectPrinter = async () => {
    await printer.disconnect();
    setPrinter(null);
  };

  const printText = async () => {
    await printer.print('This is my text to print');
  };

  if (!printer) {
    return (
      <Button title="Connect to Printer" onPress={connectPrinter} />
    );
  }

  return (
    <View>
      <Button title="Disconnect from Printer" onPress={disconnectPrinter} />
      <Button title="Print Text" onPress={printText} />
    </View>
  );
};

export default App;
