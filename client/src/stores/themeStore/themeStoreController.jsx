// src/store/themeStoreController.js
import { lightModeAttributes, darkModeAttributes } from '../../theme/themeColors';

export const switchTheme = (set, get, specificThemeMode) => {

    let newTheme = get().theme;
    let newThemeMode = get().currentTheme;

    if (specificThemeMode === 'dark') {
        newThemeMode = 'dark';
        newTheme = darkModeAttributes;
    } else if (specificThemeMode === 'light') {
        newThemeMode = 'light';
        newTheme = lightModeAttributes;
    } else if (specificThemeMode === 'auto') {
        if (typeof window !== 'undefined') {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? 'dark'
                : 'light';
            newThemeMode = systemTheme;
            newTheme = systemTheme === 'dark' ? darkModeAttributes : lightModeAttributes;
        }
    } else {
        // Toggle between themes
        if (get().theme.name === 'light') {
            newThemeMode = 'dark';
            newTheme = darkModeAttributes;
        } else {
            newThemeMode = 'light';
            newTheme = lightModeAttributes;
        }
    }

    // Update store state
    set({
        currentTheme: newThemeMode,
        theme: newTheme,
    });
};
