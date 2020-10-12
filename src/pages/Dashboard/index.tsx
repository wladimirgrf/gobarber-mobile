import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderBlock,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FunctionComponent = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

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
    </Container>
  );
};

export default Dashboard;
