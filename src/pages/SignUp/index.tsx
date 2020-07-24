import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  Form,
  BackToSignIn,
  BackToSignInText,
} from './styles';

const SignUp: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback((data: unknown) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Sign Up for GoBarber</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input name="name" icon="user" placeholder="Name" />
              <Input name="email" icon="mail" placeholder="Email" />
              <Input name="password" icon="lock" placeholder="Password" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToSignInText>Log In.</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
