import React from 'react';
import { Image} from 'react-native';

import { Container } from './styles';

const Logo = () => {
  return (<Container>
      <Image source={require('../../assets/logo2.png')} />
  </Container>);
}

export default Logo;