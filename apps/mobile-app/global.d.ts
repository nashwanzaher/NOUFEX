/// <reference types="expo-router/types" />
/// <reference types="expo/types" />

declare module '*.png' {
  const value: import('expo-image').ImageSource;
  export default value;
}

declare module '*.jpg' {
  const value: import('expo-image').ImageSource;
  export default value;
}

declare module '*.svg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}
