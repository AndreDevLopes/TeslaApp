import React , {useState} from 'react';
import {View , SafeAreaView , FlatList ,ScrollView } from 'react-native';

 import { Container, Row,
          Title, ItemTitle, RowImg,
          Img,RowInfo,TitleInfo , SubTitleInfo,
          Box, Div, RowDesc , DescBox , DescTitle,
          DescText , Button , BntText , RowButton , ButtonItem} from './styles';

import Data from '../../data/dataHome';



const Home = ({navigation}) => {
  
  const[selectedId , setSelectedId] = useState(0);
  
  const renderItem = ({item}) =>{ 
    const size = item.id === selectedId ? '40px': '28px';
    const color = item.id === selectedId ? '#FFFFFF':'#45525c';
    return(   
    <ButtonItem
      onPress={()=> setSelectedId(item.id)}
     
    >
      <ItemTitle  size ={size} color={color}>{item.title}</ItemTitle> 
    </ButtonItem>
   
     );
  }
  return (
  <Container>
        <SafeAreaView>
          <ScrollView>
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
                   <TitleInfo>{Data[selectedId].speed}</TitleInfo>
                    <SubTitleInfo>Range(EPA est.)</SubTitleInfo>
                    </Box>
                    <Div></Div>
                    <Box>
                      <TitleInfo>AWD</TitleInfo>
                    <SubTitleInfo>Dual Motor</SubTitleInfo>
                    </Box>
                              
                </RowInfo>
                <RowDesc>
                  <DescBox>
                    <DescTitle>Acceleration:</DescTitle>
                    <DescText>{Data[selectedId].Acceleration} </DescText>
                  </DescBox>
                  <DescBox>
                    <DescTitle>Top Speed:</DescTitle>
                    <DescText> up to 150 mph</DescText>
                  </DescBox>
                </RowDesc>
              
            </View>
            <RowButton>
                  <Button onPress={()=> navigation.navigate('Car')}>
                    <BntText>ORDEM NOW</BntText>
                </Button>
            </RowButton>
          </ScrollView>
        </SafeAreaView>     
  </Container>);
}

export default Home;