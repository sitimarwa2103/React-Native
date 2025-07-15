import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TampilanBentuk() {
  return (
    <View style={gaya.tataLetakUtama}>
      <View style={gaya.segitigaVisual} />

      <View style={gaya.bingkaiNama}>
        <Text style={gaya.teksKonten}>Siti Marwa</Text>
      </View>

      <View style={gaya.lencanaIdentitas}>
        <Text style={gaya.teksKonten}>105841100122</Text>
      </View>
    </View>
  );
}

const gaya = StyleSheet.create({
  tataLetakUtama: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
  segitigaVisual: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 65,
    borderRightWidth: 65,
    borderBottomWidth: 100,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#6a1b9a',
  },
  bingkaiNama: {
    width: 270,
    height: 64,
    backgroundColor: '#0277bd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  lencanaIdentitas: {
    width: 270,
    height: 64,
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  teksKonten: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
