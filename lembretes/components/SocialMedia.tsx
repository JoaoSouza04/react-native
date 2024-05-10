import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function SocialMedia() {
  return (
    <View style={styles.iconsView}>
      <Ionicons style={styles.icons} name="logo-facebook" size={25} color="blue" />
      <Ionicons style={styles.icons} name="logo-instagram" size={25} color="purple" />
      <Ionicons style={styles.icons} name="logo-whatsapp" size={25} color="green" />
    </View>
  )
}

const styles = StyleSheet.create({
  iconsView: {
    flexDirection: 'row',
    padding: 12,
  },
  icons: {
    marginLeft: 10
  },
})