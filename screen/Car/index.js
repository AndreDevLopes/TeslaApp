import React from 'react';
import { ScrollView , View} from 'react-native';

import { Container , Row ,Title, Img ,
         RowInfo , BoxTitle , Money, Box ,
         InfoTitle, Div , RowBox , RowInfoBox,
          SubTitle, SubTitleBox , RowBoxMoney,
        Button,ButtonText} from './styles';

const Car = ({navigation}) => {
  return (<Container>
      <ScrollView>
        <Row>
          <Title>Select Your Car</Title>
          <Img source={require('../../assets/car.png')} />
          <RowInfo>
              <View>
                <BoxTitle color="#000000">Performance</BoxTitle>
                <Money color ='#D01000'>$55,700</Money> 
              </View>
              <View>
                 <BoxTitle color='#979797'>Long Range</BoxTitle>
              <Money color='#A4B0BC'>$46,700</Money>
              </View>
              
          </RowInfo>
          <Box>
            <RowInfoBox>
              <RowBox>
                  <InfoTitle>3.5s</InfoTitle>
                  <SubTitle>0-60 mph</SubTitle>
              </RowBox>
              <Div />
              <RowBox>
                    <InfoTitle>150mph</InfoTitle>
                    <SubTitle>Top Speed</SubTitle>
              </RowBox> 
            </RowInfoBox> 
            <SubTitleBox>
                <SubTitle>
                Tesla All-Wheel Drive has two independent motors.
                Unlike traditional all-wheel drive systems, 
                these two motors digitally control torque to the front and rear wheels—for 
                far better handling and traction control.
              </SubTitle>
            </SubTitleBox>
            <RowBoxMoney>
                <Money color ='#000000'>$55,700</Money> 
                <Button onPress={()=>navigation.navigate('exterior')}>
                  <ButtonText>Next</ButtonText>
                </Button>
            </RowBoxMoney>            
          </Box>
        </Row>
      </ScrollView>
  </Container>);
}

export default Car;