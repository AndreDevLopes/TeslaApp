import React from 'react';
import {View, Image , SafeAreaView , FlatList } from 'react-native';

 import { Container, Logo, Row,
          Title, ItemTitle, RowImg,
          Img,RowInfo,TitleInfo , SubTitleInfo,
          Box, Div} from './styles';

 const Data = [
   {
     id:'0',
     title:'Model 3'
   },

   {
     id:'1',
    title:'Model X'
   },
  {
    id:'2',
    title:'Model Y'
  },
  {
    id:'3',
    title: 'Model S'
  }
 ];




const Home = () => {
  
  const renderItem = ({item}) => (   
    <View>
    <ItemTitle>{item.title}</ItemTitle> 
   </View>
  );
  return (
  <Container>
        <Logo>
          <Image source={require('../../assets/logo1.png')}/>     
        </Logo>
        <Row>
          <Title>Tesla</Title>
          <SafeAreaView>
            <FlatList 
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal

            />
          </SafeAreaView>
        </Row>
        <RowImg>
          <Img source={require('../../assets/modely.png')} />
        </RowImg>
         <View>
          <RowInfo>
            <Box>
              <TitleInfo>300 mi</TitleInfo>
            <SubTitleInfo>Range(EPA est.)</SubTitleInfo>
            </Box>
            <Div></Div>
            <Box>
              <TitleInfo>AWD</TitleInfo>
            <SubTitleInfo>Dual Motor</SubTitleInfo>
            </Box>
                        
          </RowInfo>
          
         </View>
  </Container>);
}

export default Home;