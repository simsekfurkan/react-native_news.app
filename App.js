import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './src/components/NewsCard';
import news_banner_date from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.news_font}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_date.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  news_font: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default App;
