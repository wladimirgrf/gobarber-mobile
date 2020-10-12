import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Provider } from './types';
import {
  Container,
  Header,
  HeaderBlock,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
} from './styles';

const Dashboard: React.FunctionComponent = () => {
  // const { navigate } = useNavigation();
  const { user, signOut } = useAuth();

  const [providers, setProviders] = useState<Provider[]>([]);

  const navigateToProfile = useCallback(() => {
    // navigate('Profile');
    signOut();
  }, [signOut]);

  useEffect(() => {
    api.get('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <HeaderTitle>Welcome,</HeaderTitle>
          <UserName>{user.name}</UserName>
        </HeaderBlock>

        <HeaderBlock>
          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: user.avatarUrl }} />
          </ProfileButton>
        </HeaderBlock>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        renderItem={({ item }) => <UserName>{item.name}</UserName>}
      />
    </Container>
  );
};

export default Dashboard;
