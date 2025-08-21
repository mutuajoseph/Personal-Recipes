import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

const BASE_URL = 'http://localhost:3000'

export const useRecipeStore = create(
    devtools(
        persist(
            (set) => ({
                recipes: [],
                setRecipes: (newRecipes) => set({ recipes: newRecipes }),
                fetchAllRecipes: async () => {
                    try {
                        const response = await fetch(`${BASE_URL}/recipes`);
                        const data = await response.json();
                        set({ recipes: data });
                    } catch (error) {
                        console.error('Error fetching recipes:', error);
                    }
                }, 
                addRecipe: async (newRecipe) => {
                    try {
                        const response = await fetch(`${BASE_URL}/recipes`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newRecipe),
                        });
                        const data = await response.json();

                        set((state) => ({ recipes: [...state.recipes, data] }));
                    } catch (error) {
                        console.error('Error adding recipe:', error);
                    }
                },
                removeRecipe: async (id) => {
                    try {
                        const response = await fetch(`${BASE_URL}/recipes/${id}`,{
                            method: 'DELETE',
                        })

                        if(response.ok) {
                            set((state) => ({
                                recipes: state.recipes.filter(recipe => recipe.id !== id)
                            }));
                        }
                        const data = await response.json();
                        console.log('Recipe removed:', data);
                    } catch (error) {
                        console.error('Error removing recipe:', error);
                    }
                },
                updateRecipe: async (id, updatedRecipe) => {
                    try {
                        const response = await fetch(`${BASE_URL}/recipes/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedRecipe),
                        });
                        const data = await response.json();

                        set((state) => ({
                            recipes: state.recipes.map(recipe =>
                                recipe.id === id ? data : recipe
                            ),
                        }));
                    } catch (error) {
                        console.error('Error updating recipe:', error);
                    }
                },
            }),
            {
                name: 'recipe-storage', // unique name for the storage
                getStorage: () => window.localStorage, // use localStorage as the storage
            }
        )
    )
);

