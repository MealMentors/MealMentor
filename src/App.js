import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import FoodSelection from './Components/RecipeSelection/RecipeDictionary.js';

function App() {
  return (
    <div>
      <LoginSignup/>
      <FoodSelection/>
    </div>
  );
}

export default App;
