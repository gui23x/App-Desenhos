import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';

export default function Home() {
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.dark,
      }}>
      <View style={style.header}>
        <View style={{ top: 40 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
            Bem-Vindo aos
          </Text>
          <Text
            style={{ fontSize: 38, color: COLORS.green, fontWeight: 'bold' }}>
            Meus Desenhos
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="person"
            size={28}
            style={{ color: COLORS.white, top: 45 }}
            onPress={() => handlePress('https://gui23x.github.io/meuportfolio/')}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={style.searchContainer}>
          <Text style={style.input}>Divirta-se</Text>
        </View>
      </View>

      <FlatList
        data={[
          {
            key: '1',
            image: require('./img/carro-esporte.png'),
            title: 'Automóveis',
            link: 'https://gui23x.github.io/desenhos/',
          },
          {
            key: '2',
            image: require('./img/caminhao.png'),
            title: 'Caminhões',
            link: 'https://gui23x.github.io/desenhos/caminhao.html',
          },
          {
            key: '3',
            image: require('./img/moto.png'),
            title: 'Motos',
            link: 'https://gui23x.github.io/desenhos/moto.html',
          },
          {
            key: '4',
            image: require('./img/ninja.png'),
            title: 'Animes',
            link: 'https://gui23x.github.io/desenhos/anime.html',
          },
          {
            key: '5',
            image: require('./img/godzilla.png'),
            title: 'Filmes',
            link: 'https://gui23x.github.io/desenhos/filmes.html',
          },
          {
            key: '6',
            image: require('./img/controle.png'),
            title: 'Jogos',
            link: 'https://gui23x.github.io/desenhos/jogo.html',
          },
          {
            key: '7',
            image: require('./img/pincel.png'),
            title: 'Realista',
            link: 'https://gui23x.github.io/desenhos/realista.html',
          },
          {
            key: '8',
            image: require('./img/engracado.png'),
            title: 'MEMES',
            link: 'https://gui23x.github.io/desenhos/meme.html',
          },
        ]}
        showsVerticalScrollIndicator={false}
        style={{ top: 80, marginBottom: 100 }}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.link)}>
            <View style={style.card}>
              <View style={{ height: 150, alignItems: 'center' }}>
                <Image
                  source={item.image}
                  style={{ flex: 1, resizeMode: 'contain' }}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginTop: 10,
                  textAlign: 'center',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    marginTop: 20,
    flex: 1,
    right: 20,
    marginLeft: 25,
    height: 225,
    backgroundColor: COLORS.light,
    width: 180,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.38,
    shadowRadius: 12.0,

    elevation: 10,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    top: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  input: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
  },
});
