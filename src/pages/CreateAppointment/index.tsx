import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { RouteParams, Provider, AvailabilityItem } from './types';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  ProviderBlock,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  CalendarBlock,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
} from './styles';

const CreateAppointment: React.FunctionComponent = () => {
  const { goBack } = useNavigation();
  const { user } = useAuth();
  const { params } = useRoute();
  const routeParams = params as RouteParams;
  const todayDate = new Date();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(
    routeParams.providerId,
  );

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChanged = useCallback((_, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date) {
      setSelectedDate(date);
    }
  }, []);

  useEffect(() => {
    api.get('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${selectedProvider}/day-availability`, {
        params: {
          day: selectedDate.getDate(),
          month: selectedDate.getMonth() + 1,
          year: selectedDate.getFullYear(),
        },
      })
      .then(response => {
        setAvailability(response.data);
      });
  }, [selectedDate, selectedProvider]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Barber</HeaderTitle>

        <UserAvatar source={{ uri: user.avatarUrl }} />
      </Header>

      <ProviderBlock>
        <ProvidersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              selected={provider.id === selectedProvider}
              onPress={() => handleSelectProvider(provider.id)}
            >
              <ProviderAvatar source={{ uri: provider.avatarUrl }} />
              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProviderBlock>

      <CalendarBlock>
        <Title>Choose a date</Title>

        <OpenDatePickerButton onPress={handleToggleDatePicker}>
          <OpenDatePickerButtonText>pick a date</OpenDatePickerButtonText>
        </OpenDatePickerButton>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            textColor="#f4ede8"
            value={selectedDate}
            onChange={handleDateChanged}
          />
        )}
      </CalendarBlock>

      {morningAvailability.map(({ hourFormatted, available }) => (
        <Title key={hourFormatted}>{hourFormatted}</Title>
      ))}

      {afternoonAvailability.map(({ hourFormatted, available }) => (
        <Title key={hourFormatted}>{hourFormatted}</Title>
      ))}
    </Container>
  );
};

export default CreateAppointment;
