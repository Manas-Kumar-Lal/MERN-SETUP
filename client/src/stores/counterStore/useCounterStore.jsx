import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import toast from 'react-hot-toast';
// persist: Saves the state to localStorage (or sessionStorage), ensuring the state persists even after page refreshes.
// devtools: Integrates with Redux DevTools, allowing you to track state changes and actions during development.

// Simulate an asynchronous saveSettings function
const saveSettings = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating success or failure
            Math.random() > 0.5 ? resolve('Settings saved successfully') : reject('Error saving settings');
        }, 5000);
    });
};

const useCounterStore = create((set) => ({
    count: 0, // Initial state

    // Actions
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => {
        toast.promise(
            saveSettings(),
            {
                loading: 'Saving...',
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
            }
        );
        set({ count: 0 })
    }
}));

export default useCounterStore;
