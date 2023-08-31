import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  List: undefined;
  Detail: { id: number };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;