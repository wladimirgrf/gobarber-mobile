import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Provider } from './types';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const HeaderBlock = styled.View``;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  line-height: 28px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const UserName = styled.Text`
  font-size: 20px;
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)``;
