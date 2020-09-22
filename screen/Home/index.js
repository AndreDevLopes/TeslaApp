import React from 'react';
import {View, Image , SafeAreaView , FlatList ,ScrollView } from 'react-native';

 import { Container, Logo, Row,
          Title, ItemTitle, RowImg,
          Img,RowInfo,TitleInfo , SubTitleInfo,
          Box, Div, RowDesc , DescBox , DescTitle,
          DescText , Button , BntText , RowButton} from './styles';

import Data from '../../data/dataHome';



const Home = () => {
  
  const renderItem = ({item}) => (   
    <View>
    <ItemTitle>{item.title}</ItemTitle> 
   </View>
  );
  return (
  <Container>
        <SafeAreaView>
          <ScrollView>
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
                <RowDesc>
                  <DescBox>
                    <DescTitle>Acceleration:</DescTitle>
                    <DescText> 0-60 mph in 3.5s</DescText>
                  </DescBox>
                  <DescBox>
                    <DescTitle>Top Speed:</DescTitle>
                    <DescText> up to 150 mph</DescText>
                  </DescBox>
                </RowDesc>
              
            </View>
            <RowButton>
                  <Button>
                    <BntText>ORDEM NOW</BntText>
                </Button>
            </RowButton>
          </ScrollView>
        </SafeAreaView>     
  </Container>);
}

export default Home;