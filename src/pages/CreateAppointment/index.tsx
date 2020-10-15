import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FunctionComponent = () => {
  const { goBack } = useNavigation();
  const { user } = useAuth();
  const { params } = useRoute();
  const { providerId } = params as RouteParams;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Barber</HeaderTitle>

        <UserAvatar source={{ uri: user.avatarUrl }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
