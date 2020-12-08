import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Provider } from './types';
import {
  Container,
  Header,
  HeaderBlock,
  HeaderTitle,
  UserName,
  SignOutButton,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

const Dashboard: React.FunctionComponent = () => {
  const { navigate } = useNavigation();
  const { user, signOut } = useAuth();

  const [providers, setProviders] = useState<Provider[]>([]);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  useEffect(() => {
    api.get('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: user.avatarUrl }} />
          </ProfileButton>
        </HeaderBlock>

        <HeaderBlock>
          <HeaderTitle>Welcome,</HeaderTitle>
          <UserName>{user.name}</UserName>
        </HeaderBlock>

        <HeaderBlock>
          <SignOutButton onPress={signOut}>
            <Icon name="power" color="#999591" size={23} />
          </SignOutButton>
        </HeaderBlock>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={<ProvidersListTitle>Barber</ProvidersListTitle>}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar source={{ uri: provider.avatarUrl }} />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" color="#ff9000" />
                <ProviderMetaText>Monday to Friday</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" color="#ff9000" />
                <ProviderMetaText>from 8:00 to 18:00</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
