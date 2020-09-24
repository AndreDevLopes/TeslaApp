import React , {useState } from 'react';
import { ScrollView , View ,FlatList } from 'react-native';

import { Container , Row , Title, Img ,BoxTitle,
        Money , RowCores , ButtonCor ,
         Div, Text, BoxRow, Button , ButtonText} from './styles';
import DataCores from '../../data/dataCores';

const Exterior = ({navigation}) => {
   
    const [selectId , setSelectId] = useState('0');

    
    const RenderImagem = ()=>{
      if(selectId == '0'){
        return <Img source={require('../../assets/branco.jpg')} />;
      }
      if(selectId == '1'){
        return <Img source={require('../../assets/Azul.jpg')} />;
      }
      if(selectId == '2'){
        return <Img source={require('../../assets/vermelho.jpg')} />;
      }
      if(selectId == '3'){
        return <Img source={require('../../assets/preto.jpg')} />;
      }
    }

    const renderItem = ({item}) =>{
      const selectButton = item.id === selectId ? true : false;
      return( <ButtonCor 
                color={item.color} 
                border={selectButton}
                onPress={()=>{
                  setSelectId(item.id);
                }} />);   
    }
  return (<Container>
        <ScrollView>
            <Row>
              <Title>Select Color</Title>
                <RenderImagem />
              <View>
                <BoxTitle color="#000000">Pearl White Multi-Coat</BoxTitle>
                <Money color ='#D01000'>$2,000</Money> 
              </View>
            </Row>
            <RowCores>
                <FlatList
                  data={DataCores}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal
                />
                <Div />
               
            </RowCores>
             <Text> 20’’ Performance Wheels</Text>
             <Text> Carbon fiber spoiler</Text>
            <BoxRow>
               <Money color ='#000000'>$57,700</Money> 
              <Button onPress={()=>navigation.navigate('interior')}>
                <ButtonText>Next</ButtonText>
              </Button>
            </BoxRow>
        </ScrollView>
  </Container>);
}

export default Exterior;