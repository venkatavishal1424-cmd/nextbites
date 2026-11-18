export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: string;
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil and salt",
    ],
    steps: [
      "Preheat the oven as hot as it goes.",
      "Stretch the dough into a thin round base.",
      "Spread tomato sauce and top with torn mozzarella.",
      "Bake for 7 to 9 minutes until crust blisters.",
      "Finish with fresh basil leaves and olive oil.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Indian",
    ingredients: [
      "250g paneer cubes",
      "1/2 cup thick yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp garam masala and turmeric",
      "Bell peppers and onion chunks",
    ],
    steps: [
      "Whisk yogurt with spices and ginger-garlic paste.",
      "Coat paneer cubes, peppers, and onions in the marinade.",
      "Thread onto skewers and rest for 15 minutes.",
      "Grill or pan-sear until charred on all sides.",
      "Serve hot with mint chutney and lemon wedges.",
    ],
  },
  {
    id: "cold-brew",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Beverage",
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
      "Milk or sweetener (optional)",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a jar.",
      "Stir gently until all grounds are wet.",
      "Cover and steep in the fridge for 12 to 18 hours.",
      "Strain through a fine mesh sieve or coffee filter.",
      "Serve over ice with milk or water to taste.",
    ],
  },
  {
    id: "ramen-bowl",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "2 packs ramen noodles",
      "4 cups vegetable or chicken broth",
      "2 tbsp white miso paste",
      "1 tbsp chili oil or sriracha",
      "Soft-boiled egg, scallions, and nori",
    ],
    steps: [
      "Simmer broth in a pot and whisk in miso paste and chili oil.",
      "Boil ramen noodles separately according to package instructions.",
      "Drain noodles and divide into two deep bowls.",
      "Ladle the hot spicy miso broth over the noodles.",
      "Top with soft-boiled egg halves, sliced scallions, and nori.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}