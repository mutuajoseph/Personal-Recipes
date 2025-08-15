export const initialRecipes = [
  {
    id: 1,
    title: "Avocado Toast",
    time: "15 min",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop",
    ingredients: [
      "2 slices bread",
      "1 avocado",
      "Salt",
      "Pepper",
      "Lemon juice",
    ],
    instructions:
      "Toast bread, mash avocado with salt, pepper, and lemon juice. Spread on toast.",
    servings: 2,
    difficulty: "Easy",
    isFavorite: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Chicken Salad",
    time: "20 min",
    category: "Lunch",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
    ingredients: [
      "2 chicken breasts",
      "Mixed greens",
      "Tomatoes",
      "Cucumber",
      "Olive oil",
      "Balsamic vinegar",
    ],
    instructions:
      "Grill chicken, slice and serve over mixed greens with vegetables and dressing.",
    servings: 2,
    difficulty: "Medium",
    isFavorite: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Salmon with Asparagus",
    time: "25 min",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
    ingredients: [
      "4 salmon fillets",
      "1 lb asparagus",
      "Lemon",
      "Olive oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Season salmon and asparagus. Bake at 400°F for 12-15 minutes.",
    servings: 4,
    difficulty: "Medium",
    isFavorite: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Beef Stir-Fry",
    time: "35 min",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
    ingredients: [
      "1 lb beef strips",
      "Mixed vegetables",
      "Soy sauce",
      "Ginger",
      "Garlic",
      "Rice",
    ],
    instructions:
      "Stir-fry beef until cooked, add vegetables and seasonings. Serve over rice.",
    servings: 4,
    difficulty: "Medium",
    isFavorite: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Vegetable Curry",
    time: "40 min",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
    ingredients: [
      "Mixed vegetables",
      "Coconut milk",
      "Curry powder",
      "Onion",
      "Garlic",
      "Ginger",
      "Rice",
    ],
    instructions:
      "Sauté onion, garlic, ginger. Add vegetables, curry powder, and coconut milk. Simmer until tender.",
    servings: 4,
    difficulty: "Easy",
    isFavorite: false,
    createdAt: new Date().toISOString(),
  },
];
