import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Screen = (props) => {
  const { children } = props;
  return (
    <SafeAreaView style={styles.container}>
      { children }
    </SafeAreaView>
  );
}

export default Screen