import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FunctionComponent = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Login</Title>
    </Container>
  );
};

export default SignIn;
