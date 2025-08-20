import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

export const useRecipeStore = create(
    devtools(
        persist(
            (set) => ({
                recipes: [],
                setRecipes: (newRecipes) => set({ recipes: newRecipes }),
            }),
            {
                name: 'recipe-storage', // unique name for the storage
                getStorage: () => window.localStorage, // use localStorage as the storage
            }
        )
    )
);

