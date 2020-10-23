export interface RouteParams {
  providerId: string;
}

export interface Provider {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface ProviderContainerProps {
  selected: boolean;
}

export interface ProviderNameProps {
  selected: boolean;
}

export interface AvailabilityItem {
  hour: number;
  available: boolean;
}

export interface HourProps {
  available: boolean;
  selected: boolean;
}

export interface HourTextProps {
  selected: boolean;
}
