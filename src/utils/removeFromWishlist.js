import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readWishlist from './readWishlist'

const removeFromWishlist = async item => {
  const formerFavorite = await readWishlist()
  const filteredFavorite = formerFavorite.filter(fav => fav.id !== item.id)
  try {
    const jsonValue = JSON.stringify(filteredFavorite)
    await AsyncStorage.setItem('favorite', jsonValue)
    showMessage({
      message: `${item.title} à bien été supprimé des favoris`,
      type: 'info'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default removeFromWishlist