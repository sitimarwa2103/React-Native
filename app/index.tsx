import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Dimensions, Text, ScrollView } from 'react-native';

const GAMBAR_DATA = Array.from({ length: 9 }, (_, i) => ({
  penanda: i + 1,
  asli: `https://picsum.photos/seed/asli${i}/200`,
  cadangan: `https://picsum.photos/seed/cadangan${i}/200`,
}));

type DataGambar = {
  penanda: number;
  asli: string;
  cadangan: string;
};

const GambarInteraktif = ({ sumber }: { sumber: DataGambar }) => {
  const [pakaiCadangan, setPakaiCadangan] = useState(false);
  const [skala, setSkala] = useState(1);
  const [gagalMuat, setGagalMuat] = useState(false);

  const tekan = () => {
    if (gagalMuat) return;
    setPakaiCadangan(prev => !prev);
    setSkala(prev => Math.min(prev * 1.2, 2));
  };

  const gambarDipakai = pakaiCadangan ? sumber.cadangan : sumber.asli;

  return (
    <TouchableOpacity onPress={tekan} style={gaya.kotakGambar}>
      {gagalMuat ? (
        <View style={gaya.tampilanError}>
          <Text style={gaya.tulisanError}>Gagal</Text>
        </View>
      ) : (
        <Image
          source={{ uri: gambarDipakai }}
          onError={() => setGagalMuat(true)}
          style={[gaya.gambar, { transform: [{ scale: skala }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

export default function Grid3x3Tetap() {
  const lebar = Dimensions.get('window').width;
  const ukuranKotak = lebar / 3 - 6; // mengurangi margin

  // Bagi menjadi 3 baris manual
  const baris1 = GAMBAR_DATA.slice(0, 3);
  const baris2 = GAMBAR_DATA.slice(3, 6);
  const baris3 = GAMBAR_DATA.slice(6, 9);

  const renderBaris = (data: DataGambar[]) => (
    <View style={gaya.baris}>
      {data.map(item => (
        <View key={item.penanda} style={[gaya.kotakWrapper, { width: ukuranKotak, height: ukuranKotak }]}>
          <GambarInteraktif sumber={item} />
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={gaya.latar}>
      <ScrollView contentContainerStyle={gaya.kontainer}>
        {renderBaris(baris1)}
        {renderBaris(baris2)}
        {renderBaris(baris3)}
      </ScrollView>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  kontainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  baris: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  kotakWrapper: {
    marginHorizontal: 3,
  },
  kotakGambar: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gambar: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  tampilanError: {
    flex: 1,
    backgroundColor: '#ffeeee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  tulisanError: {
    color: '#aa0000',
    fontSize: 12,
  },
});
