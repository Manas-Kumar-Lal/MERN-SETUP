import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { lightModeAttributes } from '../../theme/themeColors';
import { switchTheme } from './themeStoreController';
// persist: Saves the state to localStorage (or sessionStorage), ensuring the state persists even after page refreshes.
// devtools: Integrates with Redux DevTools, allowing you to track state changes and actions during development.

const useThemeStore = create(
    devtools(
        persist(
            (set, get) => ({
                // Initial state
                theme: lightModeAttributes,
                currentTheme: 'light',

                // Actions
                switchTheme: (specificThemeMode) => switchTheme(set, get, specificThemeMode),
            }),
            {
                name: 'theme-store', // Unique storage key
            }
        )
    )
);

export default useThemeStore;
