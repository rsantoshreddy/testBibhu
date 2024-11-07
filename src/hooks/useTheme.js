import ThemeContext from 'context/themeContext'
import { useContext } from 'react'

// Custom hook to access theme and toggleTheme function
const useTheme = () => useContext(ThemeContext)

export default useTheme
