import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';


const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="checkmark" size={20} color="white" />}
    </Pressable>
  );
};

export default Checkbox;
const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: Colors.primaryBlue,
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: Colors.primaryBlue,
    },
    appContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    appTitle: {
      marginVertical: 16,
      fontWeight: 'bold',
      fontSize: 24,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: '500',
      fontSize: 18,
    },
  });