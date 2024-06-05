import './App.css'
import { RecipePage } from './components/Recipe'
import imgRecipe from './assets/images/image-omelette.jpeg';

function App() {


  return (
      <RecipePage
      imgRecipe={imgRecipe}
      titleRecipe='Simple Omelette Recipe'
      descriptionRecipe='An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats'
      timeTotal={10}
      timePreparation={5}
      timeCooking={5}
      ingredients1='2-3 large eggs'
      ingredients2='salt, to taste'
      ingredients3='Pepper, to taste'
      ingredients4='1 tablespoon of butter or oil'
      ingredients5='Optional fillings: cheese, diced vegetables, cookedmeats, herbs'
      titleInstruction1='Beat the eggs'
      titleInstruction2='Heat the pan'
      titleInstruction3='Cook the omelette'
      titleInstruction4='Add fillings (optional)'
      titleInstruction5='Fold and serve'
      titleInstruction6='Enjoy'
      textInstruction1='In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
      textInstruction2='Place a non-stick frying pan over medium heat and add butter or oil.'
      textInstruction3='Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
      textInstruction4='When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
      textInstruction5='As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
      textInstruction6='Serve hot, with additional salt and pepper if needed.'
      calories={277}
      carbs={0}
      protein={20}
      fat={22}
      />
  )
}

export default App
