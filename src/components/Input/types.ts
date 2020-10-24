import { TextInputProps, ViewStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: ViewStyle;
}

export interface InputValueReference {
  value: string;
}

export interface InputRef {
  focus(): void;
}
