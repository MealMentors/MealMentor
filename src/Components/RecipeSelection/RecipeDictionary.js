// JavaScript source code
import React from "react";
import LoginSignup from "./RecipeSelection.css";

export default function FoodSelection() {
    var dict = {
        "(Not) Refried Beans": { Servings: "9", Calories: "86", ProteinGrams: "10", FatGrams: "0", CarbsGrams: "27", Meal: "Protein", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Almost Boston Market Creamed Spinach": { Servings: "4", Calories: "382", ProteinGrams: "18", FatGrams: "27", CarbsGrams: "18", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "One serving is very small" },
        "Apple Oat Greek Yogurt Muffins": { Servings: "12", Calories: "115", ProteinGrams: "5", FatGrams: "2", CarbsGrams: "20", Meal: "Bread", Cuisine: "American", Protein: "Greek yogurt", Notes: "None" },
        "Asian Pork with Mushrooms": { Servings: "7", Calories: "292", ProteinGrams: "33", FatGrams: "5", CarbsGrams: "27", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "None" },
        "Baba Ganoush": { Servings: "4", Calories: "107", ProteinGrams: "3", FatGrams: "8", CarbsGrams: "10", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "none", Notes: "None" },
        "Bacon Cheeseburger Soup": { Servings: "5", Calories: "561", ProteinGrams: "33", FatGrams: "42", CarbsGrams: "12", Meal: "Soup", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Bacon Parmesan Spaghetti Squash": { Servings: "6", Calories: "96", ProteinGrams: "2", FatGrams: "7", CarbsGrams: "3", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "None" },
        "Bacon-wrapped Green Bean Bundles": { Servings: "4", Calories: "168", ProteinGrams: "5", FatGrams: "13", CarbsGrams: "9", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "These are very tasty and have a lot of bacon flavor" },
        "Bacon, Mushroom, and Spinach Quiche": { Servings: "8", Calories: "299", ProteinGrams: "14", FatGrams: "22", CarbsGrams: "10", Meal: "Entree", Cuisine: "French", Protein: "Bacon", Notes: "None" },
        "Bacon, Onion, and Brown Lentil Skillet": { Servings: "4", Calories: "269", ProteinGrams: "18", FatGrams: "4", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Bacon", Notes: "None" },
        "Baked Broccoli Macaroni and Cheese": { Servings: "8", Calories: "464", ProteinGrams: "31", FatGrams: "29", CarbsGrams: "48", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "Small portion" },
        "Baked Chicken Milanese with Arugula and Tomatoes": { Servings: "6", Calories: "284", ProteinGrams: "28", FatGrams: "10", CarbsGrams: "22", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Baked Chicken Nuggets": { Servings: "4", Calories: "217", ProteinGrams: "39", FatGrams: "8", CarbsGrams: "12", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Baked Eggplant Parmesan Stacks": { Servings: "4", Calories: "128", ProteinGrams: "9", FatGrams: "5", CarbsGrams: "13", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None" },
        "Baked Falafel Salad": { Servings: "5", Calories: "370", ProteinGrams: "22", FatGrams: "17", CarbsGrams: "52", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "use canned chickpeas. 1 hour soaking is not enough. but the dressing is great!!!" },
        "Baked Falafels": { Servings: "5", Calories: "173", ProteinGrams: "9", FatGrams: "2", CarbsGrams: "30", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "None" },
        "Baked Garlic Pork Tenderloin": { Servings: "6", Calories: "353", ProteinGrams: "46", FatGrams: "17", CarbsGrams: "3", Meal: "Protein", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Baked Shrimp Taquitos": { Servings: "4", Calories: "303", ProteinGrams: "32", FatGrams: "12", CarbsGrams: "34", Meal: "Entree", Cuisine: "Mexican", Protein: "Shrimp", Notes: "None" },
        "Beef and Mushroom Country Casserole": { Servings: "6", Calories: "428", ProteinGrams: "22", FatGrams: "18", CarbsGrams: "43", Meal: "Entree", Cuisine: "Southern", Protein: "Ground beef", Notes: "Very hearty" },
        "Beef and Mushroom Stroganoff over Creamy Polenta": { Servings: "5", Calories: "367", ProteinGrams: "19", FatGrams: "18", CarbsGrams: "30", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Beef Barley Soup": { Servings: "6", Calories: "192", ProteinGrams: "21", FatGrams: "9", CarbsGrams: "27", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Beef Burgers with Jerk Onions and Cucumber Avocado Salad": { Servings: "4", Calories: "421", ProteinGrams: "27", FatGrams: "28", CarbsGrams: "22", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Beef Pot Roast": { Servings: "6", Calories: "477", ProteinGrams: "24", FatGrams: "21", CarbsGrams: "37", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Beef Stew with Caramelized Onions and Red Wine": { Servings: "6", Calories: "446", ProteinGrams: "51", FatGrams: "15", CarbsGrams: "16", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Black Bean Burger": { Servings: "4", Calories: "313", ProteinGrams: "16", FatGrams: "9", CarbsGrams: "43", Meal: "Entree", Cuisine: "American", Protein: "Beans", Notes: "needs a condiment" },
        "Black Bean Fiesta Mason Jar Salad": { Servings: "4", Calories: "316", ProteinGrams: "7", FatGrams: "17", CarbsGrams: "34", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "BLT and P Soup": { Servings: "6", Calories: "366", ProteinGrams: "24", FatGrams: "20", CarbsGrams: "25", Meal: "Soup", Cuisine: "American", Protein: "Bacon", Notes: "None" },
        "BLT Macaroni Salad": { Servings: "4", Calories: "151", ProteinGrams: "5", FatGrams: "4", CarbsGrams: "23", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "tastes exactly like a BLT with mayo" },
        "BLTA Pesto Chicken Salad": { Servings: "4", Calories: "357", ProteinGrams: "29", FatGrams: "44", CarbsGrams: "4", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Blue Cheese Polenta with Vegetables": { Servings: "4", Calories: "359", ProteinGrams: "15", FatGrams: "14", CarbsGrams: "42", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Brazilian Shrimp Soup": { Servings: "4", Calories: "359", ProteinGrams: "24", FatGrams: "17", CarbsGrams: "28", Meal: "Soup", Cuisine: "South American", Protein: "Shrimp", Notes: "None" },
        "Broiled Tilapia Parmesan": { Servings: "8", Calories: "224", ProteinGrams: "25", FatGrams: "12", CarbsGrams: "1", Meal: "Entree", Cuisine: "Seafood", Protein: "Fish", Notes: "The butter/Parmesan spread is really good on other things too, like steamed broccolli" },
        "Cabbage Lasagna": { Servings: "10", Calories: "444", ProteinGrams: "39", FatGrams: "28", CarbsGrams: "13", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "It sounds weird but it's a nice low-carb way to eat lasagna filling" },
        "California Grilled Chicken": { Servings: "4", Calories: "464", ProteinGrams: "45", FatGrams: "21", CarbsGrams: "22", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "Don't burn the chicken or it will be bad" },
        "Caramelized Onion and Beef Loco Moco": { Servings: "6", Calories: "464", ProteinGrams: "34", FatGrams: "23", CarbsGrams: "32", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "did half ground turkey, reduced amount of rice by half to get calorie count" },
        "Caramelized Onion, Mushroom, and Swiss Stuffed Chicken": { Servings: "3", Calories: "435", ProteinGrams: "41", FatGrams: "28", CarbsGrams: "8", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Cauliflower Pesto Crust Pizza": { Servings: "2", Calories: "449", ProteinGrams: "24", FatGrams: "22", CarbsGrams: "46", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "cauliflower crust is hard to make be crispy" },
        "Cheese & Spinach Stuffed Portobellos": { Servings: "4", Calories: "185", ProteinGrams: "15", FatGrams: "9", CarbsGrams: "12", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "Delicious!!!" },
        "Cheesy Cauliflower and Potato Soup": { Servings: "6", Calories: "327", ProteinGrams: "13", FatGrams: "11", CarbsGrams: "47", Meal: "Soup", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Cheesy Zucchini and Corn Fritters with Herb Sour Cream": { Servings: "14", Calories: "166", ProteinGrams: "8", FatGrams: "8", CarbsGrams: "16", Meal: "Entree", Cuisine: "Southern", Protein: "Cheese", Notes: "None" },
        "Chicken & Mushrooms in a Garlic White Wine Sauce": { Servings: "4", Calories: "220", ProteinGrams: "30", FatGrams: "6", CarbsGrams: "10", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Chicken Alfredo with Broccoli": { Servings: "4", Calories: "429", ProteinGrams: "31", FatGrams: "11", CarbsGrams: "51", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Chicken Club Avocado Boats": { Servings: "4", Calories: "397", ProteinGrams: "29", FatGrams: "26", CarbsGrams: "9", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Chicken Gyro Bowls": { Servings: "4", Calories: "386", ProteinGrams: "24", FatGrams: "15", CarbsGrams: "39", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "calculated without the pita" },
        "Chicken Helper": { Servings: "4", Calories: "418", ProteinGrams: "30", FatGrams: "14", CarbsGrams: "48", Meal: "Entree", Cuisine: "Italian", Protein: "Ground chicken", Notes: "Easy way to use up leftover ground chicken" },
        "Chicken Panang Curry Noodle Bowls": { Servings: "4", Calories: "468", ProteinGrams: "23", FatGrams: "26", CarbsGrams: "25", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken thigh", Notes: "None" },
        "Chicken Parmesan Soup": { Servings: "4", Calories: "360", ProteinGrams: "19", FatGrams: "12", CarbsGrams: "46", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Chicken Pesto Bake": { Servings: "4", Calories: "109", ProteinGrams: "14", FatGrams: "18", CarbsGrams: "2", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Chicken Pot Pie Soup": { Servings: "6", Calories: "272", ProteinGrams: "23", FatGrams: "5", CarbsGrams: "37", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "calculated with a lot of random veggies" },
        "Chicken Rollatini with Spinach": { Servings: "4", Calories: "428", ProteinGrams: "43", FatGrams: "22", CarbsGrams: "11", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Chicken Spinach Soup": { Servings: "4", Calories: "233", ProteinGrams: "20", FatGrams: "1", CarbsGrams: "39", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Chicken Tikka Masala": { Servings: "4", Calories: "498", ProteinGrams: "37", FatGrams: "16", CarbsGrams: "39", Meal: "Entree", Cuisine: "Indian", Protein: "Chicken thigh", Notes: "Slow cooker, so delicious" },
        "Chicken, Feta Cheese, and Sun-Dried Tomato Wraps": { Servings: "4", Calories: "270", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "32", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None" },
        "Chipotle Cheddar Cauliflower Black Bean Enchiladas": { Servings: "6", Calories: "436", ProteinGrams: "19", FatGrams: "21", CarbsGrams: "62", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Chipotle Chicken Taco Salad": { Servings: "4", Calories: "296", ProteinGrams: "22", FatGrams: "8", CarbsGrams: "36", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Chipotle Sofritas": { Servings: "5", Calories: "250", ProteinGrams: "17", FatGrams: "13", CarbsGrams: "18", Meal: "Entree", Cuisine: "Mexican", Protein: "Tofu", Notes: "None" },
        "Chipotle-Lime Radish Salad": { Servings: "6", Calories: "160", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "17", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None" },
        "Chipotle-Spiced Beef and Bean Chili": { Servings: "4", Calories: "444", ProteinGrams: "32", FatGrams: "20", CarbsGrams: "34", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "Chopped Chicken Sesame Noodle Bowls": { Servings: "6", Calories: "306", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "23", Meal: "Soup", Cuisine: "Asian", Protein: "Chicken breast", Notes: "soba noodles are good, but this makes small portions" },
        "Chorizo Stuffed Poblano Peppers": { Servings: "4", Calories: "365", ProteinGrams: "17", FatGrams: "26", CarbsGrams: "14", Meal: "Entree", Cuisine: "Mexican", Protein: "Chorizo", Notes: "They're small but packed with flavor" },
        "Chorizo Turkey Meatballs": { Servings: "10", Calories: "376", ProteinGrams: "36", FatGrams: "16", CarbsGrams: "23", Meal: "Protein", Cuisine: "Italian", Protein: "Ground turkey", Notes: "None" },
        "Cilantro-Lime Rice": { Servings: "1", Calories: "172", ProteinGrams: "3", FatGrams: "0", CarbsGrams: "38", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None" },
        "Classic Meatloaf": { Servings: "8", Calories: "449", ProteinGrams: "36", FatGrams: "27", CarbsGrams: "13", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Coconut Red Curry with Tofu": { Servings: "4", Calories: "429", ProteinGrams: "16", FatGrams: "19", CarbsGrams: "47", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None" },
        "Corn Salsa": { Servings: "6", Calories: "94", ProteinGrams: "3", FatGrams: "1", CarbsGrams: "22", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None" },
        "Cottage Cheese Biscuits": { Servings: "18", Calories: "95", ProteinGrams: "5", FatGrams: "4", CarbsGrams: "11", Meal: "Bread", Cuisine: "Southern", Protein: "Cottage cheese", Notes: "None" },
        "Creamy Cucumber and Tomato Salad": { Servings: "4", Calories: "130", ProteinGrams: "1", FatGrams: "9", CarbsGrams: "11", Meal: "Side", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Creamy Garlic Mushroom Chicken": { Servings: "4", Calories: "286", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "6", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Creamy Garlic Mushroom Soup": { Servings: "4", Calories: "171", ProteinGrams: "12", FatGrams: "10", CarbsGrams: "8", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Creamy Lemon Dill Greek Pasta Salad": { Servings: "6", Calories: "420", ProteinGrams: "14", FatGrams: "12", CarbsGrams: "66", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Greek yogurt", Notes: "None" },
        "Creamy Mexican Slow Cooker Chicken": { Servings: "5", Calories: "332", ProteinGrams: "41", FatGrams: "12", CarbsGrams: "13", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Creamy Sun-dried tomato & Parmesan Chicken Zoodles": { Servings: "6", Calories: "329", ProteinGrams: "29", FatGrams: "17", CarbsGrams: "10", Meal: "Entree", Cuisine: "Italian?", Protein: "Chicken thigh", Notes: "I don't like zoodles so it's good (but more calories) with actual pasta" },
        "Creamy Three-Bean Stew": { Servings: "4", Calories: "424", ProteinGrams: "25", FatGrams: "10", CarbsGrams: "72", Meal: "Soup", Cuisine: "Italian", Protein: "Beans", Notes: "None" },
        "Crispy and Tender Baked Chicken Thighs": { Servings: "4", Calories: "247", ProteinGrams: "18", FatGrams: "20", CarbsGrams: "0", Meal: "Protein", Cuisine: "American", Protein: "Chicken thigh", Notes: "None" },
        "Crispy Baked Chicken Breasts": { Servings: "4", Calories: "293", ProteinGrams: "29", FatGrams: "6", CarbsGrams: "33", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Crispy Chicken Thighs with Bacon and Wilted Escarole": { Servings: "4", Calories: "469", ProteinGrams: "31", FatGrams: "36", CarbsGrams: "7", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken thigh", Notes: "None" },
        "Crock Pot Beef Quinoa Stew": { Servings: "6", Calories: "387", ProteinGrams: "23", FatGrams: "14", CarbsGrams: "43", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "Not satisfying" },
        "Crock Pot Breakfast Pie": { Servings: "5", Calories: "412", ProteinGrams: "30", FatGrams: "32", CarbsGrams: "10", Meal: "Breakfast", Cuisine: "American", Protein: "Eggs", Notes: "Almost flavorless" },
        "Crock Pot Carne Guisada": { Servings: "5", Calories: "284", ProteinGrams: "35", FatGrams: "8", CarbsGrams: "17", Meal: "Soup", Cuisine: "South American", Protein: "Beef", Notes: "None" },
        "Crock Pot Chicken Cacciatore": { Servings: "8", Calories: "278", ProteinGrams: "20", FatGrams: "19", CarbsGrams: "9", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken thigh", Notes: "None" },
        "Crock Pot Chicken Enchilada Soup": { Servings: "6", Calories: "351", ProteinGrams: "26", FatGrams: "12", CarbsGrams: "39", Meal: "Soup", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Crock Pot Chicken Gnocchi Soup": { Servings: "6", Calories: "360", ProteinGrams: "27", FatGrams: "10", CarbsGrams: "42", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "Seriously, if you're gonna try one thing, make it be this." },
        "Crock Pot Chinese Beef and Broccoli": { Servings: "6", Calories: "360", ProteinGrams: "34", FatGrams: "16", CarbsGrams: "17", Meal: "Entree", Cuisine: "Asian", Protein: "Beef", Notes: "None" },
        "Crock Pot Corned Beef & Cabbage": { Servings: "6", Calories: "364", ProteinGrams: "23", FatGrams: "19", CarbsGrams: "26", Meal: "Entree", Cuisine: "European", Protein: "Beef", Notes: "None" },
        "Crock Pot Picadillo": { Servings: "8", Calories: "234", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "6", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "Fun flavor" },
        "Cucumber Avocado Salad": { Servings: "4", Calories: "110", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None" },
        "Cucumber-Dill Tzatziki": { Servings: "24", Calories: "26", ProteinGrams: "2", FatGrams: "2", CarbsGrams: "1", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "Greek yogurt", Notes: "Do not freeze, it turns to water once thawed :(" },
        "Curried Cauliflower Soup": { Servings: "4", Calories: "256", ProteinGrams: "5", FatGrams: "16", CarbsGrams: "20", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "Don't skimp on the cilantro!" },
        "Curried Chickpeas with Spinach": { Servings: "4", Calories: "245", ProteinGrams: "10", FatGrams: "9", CarbsGrams: "37", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "not spicy at all, could use a kick" },
        "Curry Soup with Lentils and Potato": { Servings: "4", Calories: "426", ProteinGrams: "13", FatGrams: "6", CarbsGrams: "83", Meal: "Soup", Cuisine: "Indian", Protein: "Lentils", Notes: "Large volume of portions" },
        "Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil": { Servings: "4", Calories: "436", ProteinGrams: "34", FatGrams: "27", CarbsGrams: "21", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Easy Oven Fajitas": { Servings: "4", Calories: "394", ProteinGrams: "29", FatGrams: "16", CarbsGrams: "40", Meal: "Protein", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Easy Spinach Pie": { Servings: "8", Calories: "384", ProteinGrams: "8", FatGrams: "17", CarbsGrams: "42", Meal: "Entree", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Eggplant and Tofu Curry": { Servings: "4", Calories: "470", ProteinGrams: "17", FatGrams: "31", CarbsGrams: "33", Meal: "Entree", Cuisine: "Indian", Protein: "Tofu", Notes: "None" },
        "Eggplant Bruschetta": { Servings: "4", Calories: "181", ProteinGrams: "2", FatGrams: "13", CarbsGrams: "14", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None" },
        "Eggplant Lasagna": { Servings: "9", Calories: "406", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "31", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None" },
        "Fat Guacamole Devils": { Servings: "1", Calories: "240", ProteinGrams: "14", FatGrams: "21", CarbsGrams: "6", Meal: "Protein", Cuisine: "American", Protein: "Eggs", Notes: "None" },
        "Food Cart-Style Chicken Salad with White Sauce": { Servings: "4", Calories: "339", ProteinGrams: "37", FatGrams: "16", CarbsGrams: "14", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken thigh", Notes: "None" },
        "Fresh Raspberry Balsamic Vinaigrette": { Servings: "6", Calories: "88", ProteinGrams: "0", FatGrams: "7", CarbsGrams: "7", Meal: "Condiment", Cuisine: "American", Protein: "None", Notes: "None" },
        "Fresh Tomato Basil Pasta with Ricotta": { Servings: "4", Calories: "465", ProteinGrams: "17", FatGrams: "15", CarbsGrams: "62", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None" },
        "Garlic Cheddar Biscuits": { Servings: "7", Calories: "108", ProteinGrams: "3", FatGrams: "5", CarbsGrams: "13", Meal: "Bread", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Garlic Green Beans": { Servings: "5", Calories: "49", ProteinGrams: "2", FatGrams: "3", CarbsGrams: "6", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None" },
        "Garlic Roasted Cabbage Wedges": { Servings: "4", Calories: "188", ProteinGrams: "4", FatGrams: "12", CarbsGrams: "19", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None" },
        "Geechigirl Crab Cakes": { Servings: "4", Calories: "364", ProteinGrams: "28", FatGrams: "25", CarbsGrams: "6", Meal: "Entree", Cuisine: "Southern", Protein: "Fish", Notes: "Very savory." },
        "Granola Bars": { Servings: "15", Calories: "234", ProteinGrams: "4", FatGrams: "12", CarbsGrams: "29", Meal: "Snack", Cuisine: "American", Protein: "None", Notes: "My mix: craisins, slivered almonds, chopped walnuts, wheat germ" },
        "Greek Turkey Burgers": { Servings: "6", Calories: "253", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "11", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Turkey", Notes: "None" },
        "Greek Yogurt Pancakes": { Servings: "4", Calories: "346", ProteinGrams: "12", FatGrams: "13", CarbsGrams: "44", Meal: "Breakfast", Cuisine: "American", Protein: "Greek yogurt", Notes: "None" },
        "Grilled Corn and Poblano Salad": { Servings: "4", Calories: "278", ProteinGrams: "5", FatGrams: "16", CarbsGrams: "36", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None" },
        "Grilled Steak with Tomatoes, Red Onion, and Balsamic": { Servings: "6", Calories: "285", ProteinGrams: "33", FatGrams: "14", CarbsGrams: "5", Meal: "Entree", Cuisine: "Italian", Protein: "Beef", Notes: "Doesn't save for 5 full days" },
        "Harvest Roasted Vegetable Grain Bowl": { Servings: "4", Calories: "425", ProteinGrams: "15", FatGrams: "19", CarbsGrams: "47", Meal: "Entree", Cuisine: "American", Protein: "Farro", Notes: "None" },
        "Healthier Stuffed Peppers": { Servings: "6", Calories: "341", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "33", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Healthy Freezer Breakfast Burritos": { Servings: "7", Calories: "521", ProteinGrams: "30", FatGrams: "27", CarbsGrams: "40", Meal: "Breakfast", Cuisine: "American", Protein: "Sausage", Notes: "None" },
        "Healthy Mac and Cheese": { Servings: "5", Calories: "365", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "this is the best way to eat mac and cheese on a diet" },
        "Hearty Lentil and Black Bean Soup": { Servings: "5", Calories: "266", ProteinGrams: "16", FatGrams: "4", CarbsGrams: "44", Meal: "Soup", Cuisine: "American", Protein: "Beans, lentils", Notes: "it's really easy to get sick of this soup. trust me." },
        "Herb Roasted Chicken Breasts": { Servings: "4", Calories: "336", ProteinGrams: "35", FatGrams: "17", CarbsGrams: "13", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "definitely get the bone-in skin-on split breasts, or there's not really a point" },
        "Indonesian Chicken": { Servings: "4", Calories: "218", ProteinGrams: "22", FatGrams: "10", CarbsGrams: "11", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken wings", Notes: "None" },
        "Israeli Couscous": { Servings: "6", Calories: "335", ProteinGrams: "11", FatGrams: "13", CarbsGrams: "45", Meal: "Entree", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Italian Orzo Spinach Soup": { Servings: "4", Calories: "356", ProteinGrams: "10", FatGrams: "10", CarbsGrams: "56", Meal: "Soup", Cuisine: "Italian", Protein: "None", Notes: "None" },
        "Italian Sausage Soup": { Servings: "4", Calories: "236", ProteinGrams: "14", FatGrams: "12", CarbsGrams: "17", Meal: "Soup", Cuisine: "Italian", Protein: "Eggs, sausage", Notes: "None" },
        "Jalapeno Popper Chicken Salad": { Servings: "6", Calories: "436", ProteinGrams: "53", FatGrams: "23", CarbsGrams: "1", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Jalapeno, Pepper Jack, and Turkey Bacon Quiche": { Servings: "4", Calories: "416", ProteinGrams: "25", FatGrams: "24", CarbsGrams: "27", Meal: "Breakfast", Cuisine: "Mexican", Protein: "Turkey bacon", Notes: "Not spicy at all." },
        "Kale and Cabbage Soup": { Servings: "8", Calories: "158", ProteinGrams: "6", FatGrams: "7", CarbsGrams: "28", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Korean Style Ground Beef and Spinach Rice Bowls": { Servings: "4", Calories: "473", ProteinGrams: "33", FatGrams: "24", CarbsGrams: "30", Meal: "Entree", Cuisine: "Asian", Protein: "Ground beef", Notes: "None" },
        "Lemon Chicken Orzo Soup": { Servings: "6", Calories: "246", ProteinGrams: "19", FatGrams: "8", CarbsGrams: "23", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Lemon Tahini Salad Dressing": { Servings: "5", Calories: "83", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Lemon, Rice, and Chicken Soup": { Servings: "6", Calories: "201", ProteinGrams: "16", FatGrams: "6", CarbsGrams: "16", Meal: "Soup", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None" },
        "Lentil & Black Bean Soup": { Servings: "5", Calories: "266", ProteinGrams: "16", FatGrams: "4", CarbsGrams: "44", Meal: "Soup", Cuisine: "American", Protein: "Lentils, beans", Notes: "recipe says it's 4 servings, really more like 5." },
        "Lentil Dal with Hearty Greens": { Servings: "4", Calories: "331", ProteinGrams: "18", FatGrams: "7", CarbsGrams: "48", Meal: "Entree", Cuisine: "Indian", Protein: "Lentils", Notes: "None" },
        "Light Balsamic Vinaigrette": { Servings: "8", Calories: "60", ProteinGrams: "0", FatGrams: "5", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "my go-to salad dressing!" },
        "Light Mexican Casserole": { Servings: "6", Calories: "374", ProteinGrams: "29", FatGrams: "10", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef, beans", Notes: "None" },
        "Loaded Potato Soup": { Servings: "4", Calories: "345", ProteinGrams: "11", FatGrams: "13", CarbsGrams: "46", Meal: "Soup", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Lower-Fat Coleslaw": { Servings: "6", Calories: "100", ProteinGrams: "3", FatGrams: "4", CarbsGrams: "16", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "None" },
        "Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon": { Servings: "4", Calories: "312", ProteinGrams: "9", FatGrams: "15", CarbsGrams: "36", Meal: "Entree", Cuisine: "American", Protein: "Sausage, quinoa", Notes: "None" },
        "Marinated Baked Tofu": { Servings: "4", Calories: "179", ProteinGrams: "13", FatGrams: "12", CarbsGrams: "6", Meal: "Protein", Cuisine: "Asian", Protein: "Tofu", Notes: "None" },
        "Matzo Ball Soup": { Servings: "5", Calories: "361", ProteinGrams: "25", FatGrams: "18", CarbsGrams: "24", Meal: "Soup", Cuisine: "European", Protein: "Chicken", Notes: "None" },
        "Mediterranean Hummus Bowls": { Servings: "4", Calories: "531", ProteinGrams: "24", FatGrams: "29", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Ground beef", Notes: "calculated with 3 cups of brown rice" },
        "Mexican Casserole with Roasted Corn and Peppers": { Servings: "4", Calories: "366", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "57", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Mexican Pinto Bean Soup with Queso": { Servings: "6", Calories: "377", ProteinGrams: "20", FatGrams: "13", CarbsGrams: "55", Meal: "Soup", Cuisine: "Mexican", Protein: "Beans", Notes: "Very cilantro. Great if you love cilantro (which I do)!" },
        "Mexican Taco Casserole Bake": { Servings: "14", Calories: "343", ProteinGrams: "24", FatGrams: "25", CarbsGrams: "6", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "Mini Garden Turkey Loaves": { Servings: "6", Calories: "294", ProteinGrams: "21", FatGrams: "10", CarbsGrams: "32", Meal: "Entree", Cuisine: "American", Protein: "Ground turkey", Notes: "1 serve = 2 loaves. Great way to eat veggies!" },
        "Moroccan Lentil and Vegetable Stew": { Servings: "6", Calories: "193", ProteinGrams: "8", FatGrams: "6", CarbsGrams: "30", Meal: "Soup", Cuisine: "African", Protein: "Lentils", Notes: "None" },
        "Moroccan Sweet Potato Lentil Soup": { Servings: "6", Calories: "224", ProteinGrams: "13", FatGrams: "38", CarbsGrams: "1", Meal: "Soup", Cuisine: "African", Protein: "Lentils", Notes: "None" },
        "Mozzarella Chicken in Tomato Sauce": { Servings: "4", Calories: "207", ProteinGrams: "22", FatGrams: "12", CarbsGrams: "4", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Mujaddara": { Servings: "6", Calories: "261", ProteinGrams: "12", FatGrams: "1", CarbsGrams: "45", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Lentils", Notes: "None" },
        "Mushroom and Spinach Lasagna": { Servings: "6", Calories: "448", ProteinGrams: "28", FatGrams: "23", CarbsGrams: "37", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "Very cheesy" },
        "Mustard Cream Sauce for Haddock": { Servings: "2", Calories: "203", ProteinGrams: "1", FatGrams: "22", CarbsGrams: "2", Meal: "Condiment", Cuisine: "Seafood", Protein: "None", Notes: "None" },
        "No Sugar Added Apple Pie Overnight Oats": { Servings: "4", Calories: "330", ProteinGrams: "5", FatGrams: "9", CarbsGrams: "59", Meal: "Breakfast", Cuisine: "American", Protein: "None", Notes: "None" },
        "No-Cook BLT Salad": { Servings: "4", Calories: "293", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "18", Meal: "Entree", Cuisine: "American", Protein: "Bacon", Notes: "None" },
        "No-Noodle Zucchini Lasagna Recipe": { Servings: "8", Calories: "364", ProteinGrams: "29", FatGrams: "21", CarbsGrams: "17", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None" },
        "Oatmeal Cottage Cheese Pancakes": { Servings: "1", Calories: "333", ProteinGrams: "35", FatGrams: "5", CarbsGrams: "33", Meal: "Breakfast", Cuisine: "American", Protein: "Cottage cheese", Notes: "would probably be amazing in a waffle iron" },
        "One Pan Cheesy Jalapeno Chicken": { Servings: "4", Calories: "465", ProteinGrams: "34", FatGrams: "26", CarbsGrams: "26", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "One Pot Cheesy Taco Orzo": { Servings: "6", Calories: "486", ProteinGrams: "31", FatGrams: "12", CarbsGrams: "61", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "One Pot Creamy Cajun Chicken Pasta": { Servings: "4", Calories: "482", ProteinGrams: "34", FatGrams: "15", CarbsGrams: "51", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "Seriously, this is so good" },
        "One Pot Sausage and Mushroom Pasta": { Servings: "8", Calories: "361", ProteinGrams: "14", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None" },
        "One Pot Sausage and Sun Dried Tomato Pasta": { Servings: "4", Calories: "371", ProteinGrams: "21", FatGrams: "11", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Sausage", Notes: "None" },
        "One Pot Unstuffed Cabbage Rolls": { Servings: "4", Calories: "329", ProteinGrams: "29", FatGrams: "8", CarbsGrams: "35", Meal: "Entree", Cuisine: "European", Protein: "Ground beef", Notes: "None" },
        "Orange Tofu Chickpea Bowls": { Servings: "4", Calories: "544", ProteinGrams: "24", FatGrams: "17", CarbsGrams: "74", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "lots of food" },
        "Paleo Meatloaf with Bacon and Balsamic Onions": { Servings: "7", Calories: "417", ProteinGrams: "29", FatGrams: "31", CarbsGrams: "6", Meal: "Entree", Cuisine: "American", Protein: "Ground beef, bacon", Notes: "None" },
        "Pan-Toasted Sweet Corn with Wilted Chard and Black Beans": { Servings: "4", Calories: "168", ProteinGrams: "9", FatGrams: "2", CarbsGrams: "32", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "None" },
        "Parmesan and Peppercorn Ranch Dressing": { Servings: "5", Calories: "35", ProteinGrams: "3", FatGrams: "2", CarbsGrams: "1", Meal: "Condiment", Cuisine: "American", Protein: "None", Notes: "Not good" },
        "Parmesan Basil Tomato Soup": { Servings: "6", Calories: "362", ProteinGrams: "10", FatGrams: "19", CarbsGrams: "41", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Parmesan Garlic Spaghetti Squash": { Servings: "4", Calories: "267", ProteinGrams: "3", FatGrams: "12", CarbsGrams: "11", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None" },
        "Pasta Salad with Creamy Chipotle Dressing": { Servings: "8", Calories: "441", ProteinGrams: "16", FatGrams: "21", CarbsGrams: "52", Meal: "Entree", Cuisine: "Mexican", Protein: "Greek yogurt, beans", Notes: "None" },
        "Pasta Salad with Sausage and Arugula": { Servings: "6", Calories: "579", ProteinGrams: "22", FatGrams: "27", CarbsGrams: "62", Meal: "Entree", Cuisine: "American", Protein: "Sausage", Notes: "dressing isn't very flavorful, barely keeps for 5 days. Also, recipe says that the sausage should be a fun flavorful \"surprise\" (meaning: rare). No. Double the amount of sausage." },
        "Pasta with Butternut Sauce, Sausage, and Spinach": { Servings: "5", Calories: "349", ProteinGrams: "22", FatGrams: "7", CarbsGrams: "50", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None" },
        "Peanut Butter Marinated Chicken": { Servings: "2", Calories: "281", ProteinGrams: "18", FatGrams: "22", CarbsGrams: "4", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Peanutty Quinoa Bowls with Baked Tofu": { Servings: "4", Calories: "376", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "41", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None" },
        "Philly Cheesesteak Stuffed Portobello Mushrooms": { Servings: "4", Calories: "282", ProteinGrams: "17", FatGrams: "18", CarbsGrams: "9", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Pico de Gallo": { Servings: "4", Calories: "150", ProteinGrams: "4", FatGrams: "0", CarbsGrams: "31", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None" },
        "Pork Chops and Couscous with Tomato-Caper Sauce": { Servings: "4", Calories: "420", ProteinGrams: "31", FatGrams: "17", CarbsGrams: "39", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Pork", Notes: "None" },
        "Pork Egg Roll in a Bowl": { Servings: "4", Calories: "416", ProteinGrams: "22", FatGrams: "31", CarbsGrams: "11", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "Hard to eat a lot of days in a row" },
        "Pork Gyoza": { Servings: "50 gyoza", Calories: "44", ProteinGrams: "2", FatGrams: "2", CarbsGrams: "5", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "None" },
        "Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables": { Servings: "4", Calories: "362", ProteinGrams: "15", FatGrams: "8", CarbsGrams: "46", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Portobello Polenta Bowls": { Servings: "4", Calories: "314", ProteinGrams: "13", FatGrams: "9", CarbsGrams: "50", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Cheese", Notes: "Very flexible recipe" },
        "Potato, Leek, and Corn Chowder": { Servings: "4", Calories: "381", ProteinGrams: "13", FatGrams: "14", CarbsGrams: "53", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None" },
        "Pozole Verde Chicken": { Servings: "6", Calories: "220", ProteinGrams: "20", FatGrams: "4", CarbsGrams: "28", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken Breast", Notes: "None" },
        "Pulled Pork": { Servings: "5", Calories: "347", ProteinGrams: "30", FatGrams: "22", CarbsGrams: "10", Meal: "Protein", Cuisine: "Southern", Protein: "Pork", Notes: "based on 1.5lb of meat" },
        "Quick & Easy Mexican Chicken": { Servings: "6", Calories: "285", ProteinGrams: "44", FatGrams: "9", CarbsGrams: "3", Meal: "Protein", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Quinoa with Roasted Garlic and Potatoes": { Servings: "5", Calories: "343", ProteinGrams: "13", FatGrams: "6", CarbsGrams: "60", Meal: "Entree", Cuisine: "American", Protein: "Quinoa, chickpeas", Notes: "this seems like it would be bland, but actually it's great." },
        "Raita": { Servings: "8", Calories: "64", ProteinGrams: "5", FatGrams: "3", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Indian", Protein: "Greek yogurt", Notes: "None" },
        "Red Wine Vinaigrette": { Servings: "6", Calories: "166", ProteinGrams: "0", FatGrams: "19", CarbsGrams: "1", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "None" },
        "Ricotta Goat Cheese Polenta Bake": { Servings: "5", Calories: "405", ProteinGrams: "14", FatGrams: "21", CarbsGrams: "45", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Roasted Cabbage Wedges with Onion Dijon Sauce": { Servings: "4", Calories: "122", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "Love roasted cabbage! And the sauce is good too." },
        "Roasted Carrots": { Servings: "8", Calories: "70", ProteinGrams: "1", FatGrams: "4", CarbsGrams: "9", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None" },
        "Roasted Cauliflower and Chickpeas with Minted Yogurt": { Servings: "4", Calories: "205", ProteinGrams: "12", FatGrams: "7", CarbsGrams: "31", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "Minted yogurt is weird" },
        "Roasted Cauliflower Salad with Lemon Tahini Dressing": { Servings: "5", Calories: "316", ProteinGrams: "13", FatGrams: "20", CarbsGrams: "28", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "None" },
        "Roasted Garlic Chicken Salad": { Servings: "4", Calories: "261", ProteinGrams: "28", FatGrams: "15", CarbsGrams: "7", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Roasted Parmesan Broccoli": { Servings: "4", Calories: "173", ProteinGrams: "10", FatGrams: "11", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Roasted Red Pepper and Garlic Soup": { Servings: "4", Calories: "366", ProteinGrams: "12", FatGrams: "14", CarbsGrams: "51", Meal: "Soup", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Roasted Tomato Soup": { Servings: "6", Calories: "135", ProteinGrams: "3", FatGrams: "5", CarbsGrams: "19", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Roasted Tomato Soup": { Servings: "6", Calories: "268", ProteinGrams: "2", FatGrams: "27", CarbsGrams: "8", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "seriously this just tastes like butter" },
        "Sausage and Kale Cassoulet": { Servings: "4", Calories: "339", ProteinGrams: "25", FatGrams: "5", CarbsGrams: "47", Meal: "Soup", Cuisine: "European", Protein: "Sausage", Notes: "None" },
        "Sausage and Mushroom Bread Pudding": { Servings: "12", Calories: "408", ProteinGrams: "21", FatGrams: "25", CarbsGrams: "23", Meal: "Entree", Cuisine: "American", Protein: "Sausage", Notes: "None" },
        "Sausage and Mushroom Pasta": { Servings: "8", Calories: "359", ProteinGrams: "14", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None" },
        "Sausage and Tortelloni Soup": { Servings: "6", Calories: "231", ProteinGrams: "18", FatGrams: "9", CarbsGrams: "20", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage", Notes: "None" },
        "Sausage-stuffed zuchini boats": { Servings: "2.5", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "Italian?", Protein: "Sausage", Notes: "I used all sweet sausage and wish I had more mozz (less parm and crumbs)" },
        "Sauteed Cabbage and Kielbasa": { Servings: "4", Calories: "381", ProteinGrams: "21", FatGrams: "18", CarbsGrams: "20", Meal: "Entree", Cuisine: "European", Protein: "Sausage", Notes: "None" },
        "Savory Slow Cooker Brisket": { Servings: "10", Calories: "366", ProteinGrams: "24", FatGrams: "26", CarbsGrams: "7", Meal: "Protein", Cuisine: "American", Protein: "Beef", Notes: "based on 10 servings of meat, 3.5lb of brisket" },
        "Sesame Soba Noodles with Collard Greens and Tempeh Croutons": { Servings: "6", Calories: "410", ProteinGrams: "18", FatGrams: "28", CarbsGrams: "21", Meal: "Entree", Cuisine: "Asian", Protein: "Tempeh", Notes: "None" },
        "Shakshuka": { Servings: "1", Calories: "227", ProteinGrams: "12", FatGrams: "14", CarbsGrams: "17", Meal: "Breakfast", Cuisine: "Middle Eastern", Protein: "Eggs", Notes: "warning: this meal takes 30 minutes to cook even though it's eggs" },
        "Shawarma-Spiced Grilled Chicken with Garlic Yogurt": { Servings: "4", Calories: "205", ProteinGrams: "28", FatGrams: "8", CarbsGrams: "10", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None" },
        "Sheet Pan Pork Chop Supper": { Servings: "4", Calories: "454", ProteinGrams: "50", FatGrams: "24", CarbsGrams: "19", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Simple Baked Chicken Drumsticks": { Servings: "4", Calories: "206", ProteinGrams: "20", FatGrams: "14", CarbsGrams: "1", Meal: "Entree", Cuisine: "American", Protein: "Chicken wings", Notes: "None" },
        "Simple Herb Mushroom Barley Salad": { Servings: "4", Calories: "314", ProteinGrams: "10", FatGrams: "9", CarbsGrams: "50", Meal: "Entree", Cuisine: "American", Protein: "Barley", Notes: "Barley is so good here!!!" },
        "Simple Perfect Enchiladas": { Servings: "5", Calories: "347", ProteinGrams: "20", FatGrams: "18", CarbsGrams: "23", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "Simple Tomato Cucumber Salad": { Servings: "4", Calories: "165", ProteinGrams: "2", FatGrams: "14", CarbsGrams: "6", Meal: "Side", Cuisine: "Mediterranean", Protein: "None", Notes: "None" },
        "Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta ": { Servings: "4", Calories: "355", ProteinGrams: "12", FatGrams: "12", CarbsGrams: "54", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Nuts", Notes: "None" },
        "Skillet Sicilian Chicken": { Servings: "5", Calories: "384", ProteinGrams: "21", FatGrams: "32", CarbsGrams: "5", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Skillet Steak with Onions and Mushrooms": { Servings: "4", Calories: "124", ProteinGrams: "14", FatGrams: "5", CarbsGrams: "4", Meal: "Protein", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Skinny Balsamic Vinaigrette": { Servings: "5", Calories: "97", ProteinGrams: "0", FatGrams: "8", CarbsGrams: "6", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "a go to of mine!" },
        "Skinny Cheeseburger Casserole": { Servings: "6", Calories: "377", ProteinGrams: "30", FatGrams: "14", CarbsGrams: "38", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Slow Cooker 5 spice pulled pork": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Slow Cooker Beef and Pepper Soup": { Servings: "4", Calories: "372", ProteinGrams: "41", FatGrams: "10", CarbsGrams: "29", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Slow Cooker Beef Stew": { Servings: "8", Calories: "431", ProteinGrams: "16", FatGrams: "15", CarbsGrams: "32", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Slow Cooker Carnitas": { Servings: "8", Calories: "411", ProteinGrams: "37", FatGrams: "28", CarbsGrams: "2", Meal: "Protein", Cuisine: "Mexican", Protein: "Pork", Notes: "None" },
        "Slow Cooker Cashew Chicken": { Servings: "5", Calories: "451", ProteinGrams: "50", FatGrams: "21", CarbsGrams: "13", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Cheater Pork Stew": { Servings: "8", Calories: "458", ProteinGrams: "45", FatGrams: "28", CarbsGrams: "16", Meal: "Soup", Cuisine: "American", Protein: "Pork", Notes: "None" },
        "Slow Cooker Cheeseburger Soup": { Servings: "5", Calories: "314", ProteinGrams: "30", FatGrams: "15", CarbsGrams: "12", Meal: "Soup", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Slow Cooker Cheesy Enchilada Meatballs": { Servings: "6", Calories: "443", ProteinGrams: "39", FatGrams: "21", CarbsGrams: "23", Meal: "Protein", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "Slow Cooker Chicken Cauliflower Curry": { Servings: "6", Calories: "350", ProteinGrams: "35", FatGrams: "16", CarbsGrams: "19", Meal: "Entree", Cuisine: "Indian", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Chicken Tortilla Soup": { Servings: "6", Calories: "346", ProteinGrams: "36", FatGrams: "9", CarbsGrams: "28", Meal: "Soup", Cuisine: "Mexican", Protein: "Chicken breast, thigh", Notes: "None" },
        "Slow Cooker Cilantro Lime Chicken Tacos": { Servings: "8", Calories: "435", ProteinGrams: "32", FatGrams: "10", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Coconut Curry Lentils": { Servings: "10", Calories: "179", ProteinGrams: "6", FatGrams: "7", CarbsGrams: "23", Meal: "Protein", Cuisine: "Indian", Protein: "Lentils", Notes: "None" },
        "Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms": { Servings: "8", Calories: "370", ProteinGrams: "6", FatGrams: "27", CarbsGrams: "20", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Slow Cooker Enchilada Quinoa": { Servings: "6", Calories: "425", ProteinGrams: "16", FatGrams: "17", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans, quinoa", Notes: "None" },
        "Slow Cooker Italian Meatballs": { Servings: "8", Calories: "399", ProteinGrams: "32", FatGrams: "20", CarbsGrams: "23", Meal: "Protein", Cuisine: "Italian", Protein: "Ground beef", Notes: "None" },
        "Slow Cooker Lemon Garlic Chicken Thighs": { Servings: "5", Calories: "323", ProteinGrams: "25", FatGrams: "4", CarbsGrams: "10", Meal: "Entree", Cuisine: "American", Protein: "Chicken thigh", Notes: "None" },
        "Slow Cooker Mediterranean Chicken & Orzo": { Servings: "4", Calories: "272", ProteinGrams: "28", FatGrams: "5", CarbsGrams: "31", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Mushroom Barley Risotto": { Servings: "4", Calories: "425", ProteinGrams: "13", FatGrams: "8", CarbsGrams: "71", Meal: "Entree", Cuisine: "Italian", Protein: "Barley", Notes: "None" },
        "Slow Cooker Peanut Butter Chicken": { Servings: "4", Calories: "336", ProteinGrams: "35", FatGrams: "17", CarbsGrams: "13", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Poblano Turkey Chili": { Servings: "6", Calories: "383", ProteinGrams: "35", FatGrams: "3", CarbsGrams: "56", Meal: "Soup", Cuisine: "American", Protein: "Ground turkey", Notes: "The poblano is soooo good." },
        "Slow Cooker Roast": { Servings: "6", Calories: "381", ProteinGrams: "40", FatGrams: "12", CarbsGrams: "28", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Slow Cooker Sausage and White Bean Soup": { Servings: "6", Calories: "305", ProteinGrams: "22", FatGrams: "9", CarbsGrams: "33", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage", Notes: "warm and delicious" },
        "Slow Cooker Thai Green Curry with Chicken": { Servings: "5", Calories: "360", ProteinGrams: "43", FatGrams: "13", CarbsGrams: "14", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None" },
        "Slow Cooker Tofu Tikka Masala": { Servings: "4", Calories: "383", ProteinGrams: "14", FatGrams: "23", CarbsGrams: "26", Meal: "Entree", Cuisine: "Indian", Protein: "Tofu", Notes: "this tastes weird..." },
        "Slow Cooker White Chicken Chili": { Servings: "6", Calories: "202", ProteinGrams: "21", FatGrams: "3", CarbsGrams: "20", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Southwest Black Beans Polenta Casserole": { Servings: "6", Calories: "406", ProteinGrams: "17", FatGrams: "20", CarbsGrams: "46", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Southwest Salad with Taco Ranch Dressing": { Servings: "5", Calories: "410", ProteinGrams: "16", FatGrams: "20", CarbsGrams: "44", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "if you're going to make it in a mason jar, keep the dressing separate" },
        "Southwestern Veggie-Packed Tater Tot Casserole": { Servings: "8", Calories: "408", ProteinGrams: "14", FatGrams: "16", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Spicy Black Bean Burgers": { Servings: "4", Calories: "202", ProteinGrams: "13", FatGrams: "3", CarbsGrams: "35", Meal: "Protein", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Spicy California Shrimp Stack": { Servings: "4", Calories: "289", ProteinGrams: "11", FatGrams: "19", CarbsGrams: "22", Meal: "Entree", Cuisine: "Asian", Protein: "Shrimp", Notes: "None" },
        "Spicy Fish Taco Bowls": { Servings: "4", Calories: "357", ProteinGrams: "20", FatGrams: "12", CarbsGrams: "44", Meal: "Entree", Cuisine: "Mexican", Protein: "Fish", Notes: "None" },
        "Spicy Sausage and Cabbage Soup": { Servings: "7", Calories: "315", ProteinGrams: "14", FatGrams: "22", CarbsGrams: "15", Meal: "Soup", Cuisine: "American", Protein: "Sausage", Notes: "None" },
        "Spicy Shrimp & Tomato Pasta": { Servings: "4", Calories: "314", ProteinGrams: "17", FatGrams: "12", CarbsGrams: "36", Meal: "Entree", Cuisine: "Italian", Protein: "Shrimp", Notes: "can add protein with cottage cheese" },
        "Spicy Tuna Cakes": { Servings: "12", Calories: "98", ProteinGrams: "9", FatGrams: "4", CarbsGrams: "13", Meal: "Protein", Cuisine: "American", Protein: "Fish", Notes: "None" },
        "Spicy Vegan Cream of Corn Soup": { Servings: "3", Calories: "469", ProteinGrams: "9", FatGrams: "37", CarbsGrams: "27", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None" },
        "Spinach Tortellini Soup": { Servings: "7", Calories: "356", ProteinGrams: "15", FatGrams: "17", CarbsGrams: "35", Meal: "Soup", Cuisine: "Italian", Protein: "Cheese", Notes: "So. easy." },
        "Spinach, Mushroom, and Feta Crustless Quiche": { Servings: "4", Calories: "233", ProteinGrams: "19", FatGrams: "14", CarbsGrams: "7", Meal: "Breakfast", Cuisine: "Mediterranean", Protein: "Eggs", Notes: "None" },
        "Spinach. Artichoke. and Feta Breakfast Bake": { Servings: "6", Calories: "292", ProteinGrams: "21", FatGrams: "19", CarbsGrams: "10", Meal: "Breakfast", Cuisine: "Mediterranean", Protein: "Eggs, sausage", Notes: "Calories include 1/2 container of breakfast sausage" },
        "Sriracha Chickpea Salad Wraps": { Servings: "2", Calories: "484", ProteinGrams: "21", FatGrams: "8", CarbsGrams: "83", Meal: "Sandwich", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "calories calculated using greek yogurt instead of mayo" },
        "Steak Kebabs with Chimichurri": { Servings: "3", Calories: "364", ProteinGrams: "42", FatGrams: "23", CarbsGrams: "7", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None" },
        "Stewed Tofu with Corn and Tomatoes": { Servings: "4", Calories: "302", ProteinGrams: "13", FatGrams: "13", CarbsGrams: "59", Meal: "Entree", Cuisine: "American", Protein: "Tofu", Notes: "really simple, delicious especially in the summer" },
        "Stir-Fried Chicken with Bok Choy": { Servings: "4", Calories: "321", ProteinGrams: "26", FatGrams: "10", CarbsGrams: "34", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None" },
        "Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions": { Servings: "4", Calories: "224", ProteinGrams: "11", FatGrams: "12", CarbsGrams: "16", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None" },
        "Stovetop Red Beans and Rice": { Servings: "6", Calories: "314", ProteinGrams: "29", FatGrams: "3", CarbsGrams: "68", Meal: "Entree", Cuisine: "Southern", Protein: "Beans, sausage", Notes: "None" },
        "Stuffed Buffalo Chicken Breasts": { Servings: "5", Calories: "233", ProteinGrams: "23", FatGrams: "11", CarbsGrams: "10", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None" },
        "Stuffed Eggplant": { Servings: "4", Calories: "497", ProteinGrams: "30", FatGrams: "28", CarbsGrams: "38", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None" },
        "Stuffed Peppers with Corn, Black Beans, and Pepper Jack": { Servings: "4", Calories: "382", ProteinGrams: "21", FatGrams: "11", CarbsGrams: "60", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Stuffed Tomatoes": { Servings: "6", Calories: "291", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "23", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "make sure you get large tomatoes!" },
        "Summer Slaw": { Servings: "6", Calories: "135", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None" },
        "Summer Squash and Corn Chowder": { Servings: "6", Calories: "344", ProteinGrams: "12", FatGrams: "16", CarbsGrams: "40", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None" },
        "Sweet Potato and Poblano Pepper Soup": { Servings: "6", Calories: "170", ProteinGrams: "13", FatGrams: "12", CarbsGrams: "15", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None" },
        "Taco Soup": { Servings: "6", Calories: "321", ProteinGrams: "23", FatGrams: "7", CarbsGrams: "39", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "more of a stew than a soup" },
        "Tamale Pie": { Servings: "6", Calories: "470", ProteinGrams: "26", FatGrams: "28", CarbsGrams: "27", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None" },
        "Tex-Mex Breakfast Casserole": { Servings: "10", Calories: "281", ProteinGrams: "21", FatGrams: "27", CarbsGrams: "12", Meal: "Breakfast", Cuisine: "Mexican", Protein: "Eggs, beans", Notes: "None" },
        "Thai Coconut Curry Braised Chicken Thighs": { Servings: "5", Calories: "373", ProteinGrams: "18", FatGrams: "10", CarbsGrams: "50", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken thighs", Notes: "None" },
        "Thai Coconut Curry Butternut Squash Soup": { Servings: "4", Calories: "306", ProteinGrams: "6", FatGrams: "21", CarbsGrams: "25", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None" },
        "Thai Coconut Soup": { Servings: "4", Calories: "225", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "38", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None" },
        "Thai Curry Vegetable Soup": { Servings: "4", Calories: "368", ProteinGrams: "4", FatGrams: "23", CarbsGrams: "35", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None" },
        "Thai Meatball and Egg Drop Soup": { Servings: "4", Calories: "340", ProteinGrams: "30", FatGrams: "17", CarbsGrams: "11", Meal: "Soup", Cuisine: "Asian", Protein: "Ground turkey", Notes: "None" },
        "Thai Red Curry with Vegetables": { Servings: "4", Calories: "519", ProteinGrams: "16", FatGrams: "25", CarbsGrams: "58", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None" },
        "The Great Big Vegan Salad": { Servings: "5", Calories: "426", ProteinGrams: "24", FatGrams: "18", CarbsGrams: "49", Meal: "Entree", Cuisine: "American", Protein: "Lentils, tempeh", Notes: "Think about your ingredients... the one we made was not good." },
        "Tofu Broccoli Stir fry": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "", Cuisine: "Asian", Protein: "Tofu", Notes: "This is like really good" },
        "Tofu Parmigiana": { Servings: "4", Calories: "229", ProteinGrams: "16", FatGrams: "11", CarbsGrams: "17", Meal: "Entree", Cuisine: "Italian", Protein: "Tofu", Notes: "Hard to make it so the breading doesn't just fall off" },
        "Tofu Steaks": { Servings: "3", Calories: "233", ProteinGrams: "18", FatGrams: "12", CarbsGrams: "16", Meal: "Protein", Cuisine: "Asian", Protein: "tofu", Notes: "None" },
        "Tomato Dijon Turkey Meatballs": { Servings: "4", Calories: "220", ProteinGrams: "40", FatGrams: "2", CarbsGrams: "5", Meal: "Protein", Cuisine: "Italian", Protein: "Ground turkey", Notes: "None" },
        "Turkey Meatball Stroganoff": { Servings: "4", Calories: "286", ProteinGrams: "28", FatGrams: "13", CarbsGrams: "17", Meal: "Entree", Cuisine: "European", Protein: "Ground turkey", Notes: "None" },
        "Umbrian-Style Chicken": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None" },
        "Unstuffed Bell Peppers": { Servings: "6", Calories: "296", ProteinGrams: "13", FatGrams: "10", CarbsGrams: "40", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None" },
        "Vegan Buddha Bowl": { Servings: "4", Calories: "497", ProteinGrams: "18", FatGrams: "28", CarbsGrams: "56", Meal: "Entree", Cuisine: "American", Protein: "Tofu", Notes: "calculated without avocado" },
        "Vegan Coconut Curry Lentil Soup": { Servings: "6", Calories: "332", ProteinGrams: "14", FatGrams: "13", CarbsGrams: "38", Meal: "Soup", Cuisine: "Indian", Protein: "Lentils", Notes: "None" },
        "Vegan Tacos": { Servings: "6", Calories: "301", ProteinGrams: "12", FatGrams: "12", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mexican", Protein: "Soy", Notes: "None" },
        "Vegan Winter Lentil Stew": { Servings: "6", Calories: "313", ProteinGrams: "11", FatGrams: "7", CarbsGrams: "59", Meal: "Soup", Cuisine: "American", Protein: "Lentils", Notes: "hearty af" },
        "Vegetable Enchilada Casserole": { Servings: "6", Calories: "379", ProteinGrams: "15", FatGrams: "16", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Weeknight Enchiladas": { Servings: "6", Calories: "444", ProteinGrams: "26", FatGrams: "22", CarbsGrams: "66", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "White Bean, Spinach, & Turkey Stuffed Bell Peppers": { Servings: "6", Calories: "361", ProteinGrams: "25", FatGrams: "12", CarbsGrams: "38", Meal: "Entree", Cuisine: "Italian", Protein: "Beans, ground turkey", Notes: "None" },
        "White Chili": { Servings: "5", Calories: "326", ProteinGrams: "19", FatGrams: "19", CarbsGrams: "17", Meal: "Entree", Cuisine: "American", Protein: "Ground pork", Notes: "Pork is good for this! (Also good with ground turkey)" },
        "Whole-Grain Veggie Burrito Bowl": { Servings: "4", Calories: "394", ProteinGrams: "15", FatGrams: "19", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None" },
        "Will it Skillet? Mac & Cheese": { Servings: "6", Calories: "274", ProteinGrams: "13", FatGrams: "14", CarbsGrams: "28", Meal: "Side", Cuisine: "American", Protein: "Cheese", Notes: "small portion!" },
        "Yassa Poulet": { Servings: "6", Calories: "459", ProteinGrams: "26", FatGrams: "30", CarbsGrams: "17", Meal: "Entree", Cuisine: "African", Protein: "Chicken wings", Notes: "None" },
        "Zucchini Cheddar Scones": { Servings: "8", Calories: "343", ProteinGrams: "8", FatGrams: "18", CarbsGrams: "37", Meal: "Bread", Cuisine: "American", Protein: "Cheese", Notes: "None" },
        "Zuppa Toscana": { Servings: "6", Calories: "338", ProteinGrams: "19", FatGrams: "14", CarbsGrams: "38", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage, beans", Notes: "so. tasty." }
    }; //Currently Hardcoded in, connect to database once setup
    const [value, setValue] = React.useState("(Not) Refried Beans");
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className = "container">
            <label className= "header">
                What to eat?
                <select value={value} onChange={handleChange}>
                    <option value="(Not) Refried Beans">(Not) Refried Beans</option>
                    <option value="Almost Boston Market Creamed Spinach">Almost Boston Market Creamed Spinach</option>
                    <option value="Apple Oat Greek Yogurt Muffins">Apple Oat Greek Yogurt Muffins</option>
                    <option value="Asian Pork with Mushrooms">Asian Pork with Mushrooms</option>
                    <option value="Baba Ganoush">Baba Ganoush</option>
                    <option value="Bacon Cheeseburger Soup">Bacon Cheeseburger Soup</option>
                    <option value="Bacon Parmesan Spaghetti Squash">Bacon Parmesan Spaghetti Squash</option>
                    <option value="Bacon-wrapped Green Bean Bundles">Bacon-wrapped Green Bean Bundles</option>
                    <option value="Bacon, Mushroom, and Spinach Quiche">Bacon, Mushroom, and Spinach Quiche</option>
                    <option value="Bacon, Onion, and Brown Lentil Skillet">Bacon, Onion, and Brown Lentil Skillet</option>
                    <option value="Baked Broccoli Macaroni and Cheese">Baked Broccoli Macaroni and Cheese</option>
                    <option value="Baked Chicken Milanese with Arugula and Tomatoes">Baked Chicken Milanese with Arugula and Tomatoes</option>
                    <option value="Baked Chicken Nuggets">Baked Chicken Nuggets</option>
                    <option value="Baked Eggplant Parmesan Stacks">Baked Eggplant Parmesan Stacks</option>
                    <option value="Baked Falafel Salad">Baked Falafel Salad</option>
                    <option value="Baked Falafels">Baked Falafels</option>
                    <option value="Baked Garlic Pork Tenderloin">Baked Garlic Pork Tenderloin</option>
                    <option value="Baked Shrimp Taquitos">Baked Shrimp Taquitos</option>
                    <option value="Beef and Mushroom Country Casserole">Beef and Mushroom Country Casserole</option>
                    <option value="Beef and Mushroom Stroganoff over Creamy Polenta">Beef and Mushroom Stroganoff over Creamy Polenta</option>
                    <option value="Beef Barley Soup">Beef Barley Soup</option>
                    <option value="Beef Burgers with Jerk Onions and Cucumber Avocado Salad">Beef Burgers with Jerk Onions and Cucumber Avocado Salad</option>
                    <option value="Beef Pot Roast">Beef Pot Roast</option>
                    <option value="Beef Stew with Caramelized Onions and Red Wine">Beef Stew with Caramelized Onions and Red Wine</option>
                    <option value="Black Bean Burger">Black Bean Burger</option>
                    <option value="Black Bean Fiesta Mason Jar Salad">Black Bean Fiesta Mason Jar Salad</option>
                    <option value="BLT and P Soup">BLT and P Soup</option>
                    <option value="BLT Macaroni Salad">BLT Macaroni Salad</option>
                    <option value="BLTA Pesto Chicken Salad">BLTA Pesto Chicken Salad</option>
                    <option value="Blue Cheese Polenta with Vegetables">Blue Cheese Polenta with Vegetables</option>
                    <option value="Brazilian Shrimp Soup">Brazilian Shrimp Soup</option>
                    <option value="Broiled Tilapia Parmesan">Broiled Tilapia Parmesan</option>
                    <option value="Cabbage Lasagna">Cabbage Lasagna</option>
                    <option value="California Grilled Chicken">California Grilled Chicken</option>
                    <option value="Caramelized Onion and Beef Loco Moco">Caramelized Onion and Beef Loco Moco</option>
                    <option value="Caramelized Onion, Mushroom, and Swiss Stuffed Chicken">Caramelized Onion, Mushroom, and Swiss Stuffed Chicken</option>
                    <option value="Cauliflower Pesto Crust Pizza">Cauliflower Pesto Crust Pizza</option>
                    <option value="Cheese & Spinach Stuffed Portobellos">Cheese & Spinach Stuffed Portobellos</option>
                    <option value="Cheesy Cauliflower and Potato Soup">Cheesy Cauliflower and Potato Soup</option>
                    <option value="Cheesy Zucchini and Corn Fritters with Herb Sour Cream">Cheesy Zucchini and Corn Fritters with Herb Sour Cream</option>
                    <option value="Chicken & Mushrooms in a Garlic White Wine Sauce">Chicken & Mushrooms in a Garlic White Wine Sauce</option>
                    <option value="Chicken Alfredo with Broccoli">Chicken Alfredo with Broccoli</option>
                    <option value="Chicken Club Avocado Boats">Chicken Club Avocado Boats</option>
                    <option value="Chicken Gyro Bowls">Chicken Gyro Bowls</option>
                    <option value="Chicken Helper">Chicken Helper</option>
                    <option value="Chicken Panang Curry Noodle Bowls">Chicken Panang Curry Noodle Bowls</option>
                    <option value="Chicken Parmesan Soup">Chicken Parmesan Soup</option>
                    <option value="Chicken Pesto Bake">Chicken Pesto Bake</option>
                    <option value="Chicken Pot Pie Soup">Chicken Pot Pie Soup</option>
                    <option value="Chicken Rollatini with Spinach">Chicken Rollatini with Spinach</option>
                    <option value="Chicken Spinach Soup">Chicken Spinach Soup</option>
                    <option value="Chicken Tikka Masala">Chicken Tikka Masala</option>
                    <option value="Chicken, Feta Cheese, and Sun-Dried Tomato Wraps">Chicken, Feta Cheese, and Sun-Dried Tomato Wraps</option>
                    <option value="Chipotle Cheddar Cauliflower Black Bean Enchiladas">Chipotle Cheddar Cauliflower Black Bean Enchiladas</option>
                    <option value="Chipotle Chicken Taco Salad">Chipotle Chicken Taco Salad</option>
                    <option value="Chipotle Sofritas">Chipotle Sofritas</option>
                    <option value="Chipotle-Lime Radish Salad">Chipotle-Lime Radish Salad</option>
                    <option value="Chipotle-Spiced Beef and Bean Chili">Chipotle-Spiced Beef and Bean Chili</option>
                    <option value="Chopped Chicken Sesame Noodle Bowls">Chopped Chicken Sesame Noodle Bowls</option>
                    <option value="Chorizo Stuffed Poblano Peppers">Chorizo Stuffed Poblano Peppers</option>
                    <option value="Chorizo Turkey Meatballs">Chorizo Turkey Meatballs</option>
                    <option value="Cilantro-Lime Rice">Cilantro-Lime Rice</option>
                    <option value="Classic Meatloaf">Classic Meatloaf</option>
                    <option value="Coconut Red Curry with Tofu">Coconut Red Curry with Tofu</option>
                    <option value="Corn Salsa">Corn Salsa</option>
                    <option value="Cottage Cheese Biscuits">Cottage Cheese Biscuits</option>
                    <option value="Creamy Cucumber and Tomato Salad">Creamy Cucumber and Tomato Salad</option>
                    <option value="Creamy Garlic Mushroom Chicken">Creamy Garlic Mushroom Chicken</option>
                    <option value="Creamy Garlic Mushroom Soup">Creamy Garlic Mushroom Soup</option>
                    <option value="Creamy Lemon Dill Greek Pasta Salad">Creamy Lemon Dill Greek Pasta Salad</option>
                    <option value="Creamy Mexican Slow Cooker Chicken">Creamy Mexican Slow Cooker Chicken</option>
                    <option value="Creamy Sun-dried tomato & Parmesan Chicken Zoodles">Creamy Sun-dried tomato & Parmesan Chicken Zoodles</option>
                    <option value="Creamy Three-Bean Stew">Creamy Three-Bean Stew</option>
                    <option value="Crispy and Tender Baked Chicken Thighs">Crispy and Tender Baked Chicken Thighs</option>
                    <option value="Crispy Baked Chicken Breasts">Crispy Baked Chicken Breasts</option>
                    <option value="Crispy Chicken Thighs with Bacon and Wilted Escarole">Crispy Chicken Thighs with Bacon and Wilted Escarole</option>
                    <option value="Crock Pot Beef Quinoa Stew">Crock Pot Beef Quinoa Stew</option>
                    <option value="Crock Pot Breakfast Pie">Crock Pot Breakfast Pie</option>
                    <option value="Crock Pot Carne Guisada">Crock Pot Carne Guisada</option>
                    <option value="Crock Pot Chicken Cacciatore">Crock Pot Chicken Cacciatore</option>
                    <option value="Crock Pot Chicken Enchilada Soup">Crock Pot Chicken Enchilada Soup</option>
                    <option value="Crock Pot Chicken Gnocchi Soup">Crock Pot Chicken Gnocchi Soup</option>
                    <option value="Crock Pot Chinese Beef and Broccoli">Crock Pot Chinese Beef and Broccoli</option>
                    <option value="Crock Pot Corned Beef & Cabbage">Crock Pot Corned Beef & Cabbage</option>
                    <option value="Crock Pot Picadillo">Crock Pot Picadillo</option>
                    <option value="Cucumber Avocado Salad">Cucumber Avocado Salad</option>
                    <option value="Cucumber-Dill Tzatziki">Cucumber-Dill Tzatziki</option>
                    <option value="Curried Cauliflower Soup">Curried Cauliflower Soup</option>
                    <option value="Curried Chickpeas with Spinach">Curried Chickpeas with Spinach</option>
                    <option value="Curry Soup with Lentils and Potato">Curry Soup with Lentils and Potato</option>
                    <option value="Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil">Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil</option>
                    <option value="Easy Oven Fajitas">Easy Oven Fajitas</option>
                    <option value="Easy Spinach Pie">Easy Spinach Pie</option>
                    <option value="Eggplant and Tofu Curry">Eggplant and Tofu Curry</option>
                    <option value="Eggplant Bruschetta">Eggplant Bruschetta</option>
                    <option value="Eggplant Lasagna">Eggplant Lasagna</option>
                    <option value="Fat Guacamole Devils">Fat Guacamole Devils</option>
                    <option value="Food Cart-Style Chicken Salad with White Sauce">Food Cart-Style Chicken Salad with White Sauce</option>
                    <option value="Fresh Raspberry Balsamic Vinaigrette">Fresh Raspberry Balsamic Vinaigrette</option>
                    <option value="Fresh Tomato Basil Pasta with Ricotta">Fresh Tomato Basil Pasta with Ricotta</option>
                    <option value="Garlic Cheddar Biscuits">Garlic Cheddar Biscuits</option>
                    <option value="Garlic Green Beans">Garlic Green Beans</option>
                    <option value="Garlic Roasted Cabbage Wedges">Garlic Roasted Cabbage Wedges</option>
                    <option value="Geechigirl Crab Cakes">Geechigirl Crab Cakes</option>
                    <option value="Granola Bars">Granola Bars</option>
                    <option value="Greek Turkey Burgers">Greek Turkey Burgers</option>
                    <option value="Greek Yogurt Pancakes">Greek Yogurt Pancakes</option>
                    <option value="Grilled Corn and Poblano Salad">Grilled Corn and Poblano Salad</option>
                    <option value="Grilled Steak with Tomatoes, Red Onion, and Balsamic">Grilled Steak with Tomatoes, Red Onion, and Balsamic</option>
                    <option value="Harvest Roasted Vegetable Grain Bowl">Harvest Roasted Vegetable Grain Bowl</option>
                    <option value="Healthier Stuffed Peppers">Healthier Stuffed Peppers</option>
                    <option value="Healthy Freezer Breakfast Burritos">Healthy Freezer Breakfast Burritos</option>
                    <option value="Healthy Mac and Cheese">Healthy Mac and Cheese</option>
                    <option value="Hearty Lentil and Black Bean Soup">Hearty Lentil and Black Bean Soup</option>
                    <option value="Herb Roasted Chicken Breasts">Herb Roasted Chicken Breasts</option>
                    <option value="Indonesian Chicken">Indonesian Chicken</option>
                    <option value="Israeli Couscous">Israeli Couscous</option>
                    <option value="Italian Orzo Spinach Soup">Italian Orzo Spinach Soup</option>
                    <option value="Italian Sausage Soup">Italian Sausage Soup</option>
                    <option value="Jalapeno Popper Chicken Salad">Jalapeno Popper Chicken Salad</option>
                    <option value="Jalapeno, Pepper Jack, and Turkey Bacon Quiche">Jalapeno, Pepper Jack, and Turkey Bacon Quiche</option>
                    <option value="Kale and Cabbage Soup">Kale and Cabbage Soup</option>
                    <option value="Korean Style Ground Beef and Spinach Rice Bowls">Korean Style Ground Beef and Spinach Rice Bowls</option>
                    <option value="Lemon Chicken Orzo Soup">Lemon Chicken Orzo Soup</option>
                    <option value="Lemon Tahini Salad Dressing">Lemon Tahini Salad Dressing</option>
                    <option value="Lemon, Rice, and Chicken Soup">Lemon, Rice, and Chicken Soup</option>
                    <option value="Lentil & Black Bean Soup">Lentil & Black Bean Soup</option>
                    <option value="Lentil Dal with Hearty Greens">Lentil Dal with Hearty Greens</option>
                    <option value="Light Balsamic Vinaigrette">Light Balsamic Vinaigrette</option>
                    <option value="Light Mexican Casserole">Light Mexican Casserole</option>
                    <option value="Loaded Potato Soup">Loaded Potato Soup</option>
                    <option value="Lower-Fat Coleslaw">Lower-Fat Coleslaw</option>
                    <option value="Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon">Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon</option>
                    <option value="Marinated Baked Tofu">Marinated Baked Tofu</option>
                    <option value="Matzo Ball Soup">Matzo Ball Soup</option>
                    <option value="Mediterranean Hummus Bowls">Mediterranean Hummus Bowls</option>
                    <option value="Mexican Casserole with Roasted Corn and Peppers">Mexican Casserole with Roasted Corn and Peppers</option>
                    <option value="Mexican Pinto Bean Soup with Queso">Mexican Pinto Bean Soup with Queso</option>
                    <option value="Mexican Taco Casserole Bake">Mexican Taco Casserole Bake</option>
                    <option value="Mini Garden Turkey Loaves">Mini Garden Turkey Loaves</option>
                    <option value="Moroccan Lentil and Vegetable Stew">Moroccan Lentil and Vegetable Stew</option>
                    <option value="Moroccan Sweet Potato Lentil Soup">Moroccan Sweet Potato Lentil Soup</option>
                    <option value="Mozzarella Chicken in Tomato Sauce">Mozzarella Chicken in Tomato Sauce</option>
                    <option value="Mujaddara">Mujaddara</option>
                    <option value="Mushroom and Spinach Lasagna">Mushroom and Spinach Lasagna</option>
                    <option value="Mustard Cream Sauce for Haddock">Mustard Cream Sauce for Haddock</option>
                    <option value="No Sugar Added Apple Pie Overnight Oats">No Sugar Added Apple Pie Overnight Oats</option>
                    <option value="No-Cook BLT Salad">No-Cook BLT Salad</option>
                    <option value="No-Noodle Zucchini Lasagna Recipe">No-Noodle Zucchini Lasagna Recipe</option>
                    <option value="Oatmeal Cottage Cheese Pancakes">Oatmeal Cottage Cheese Pancakes</option>
                    <option value="One Pan Cheesy Jalapeno Chicken">One Pan Cheesy Jalapeno Chicken</option>
                    <option value="One Pot Cheesy Taco Orzo">One Pot Cheesy Taco Orzo</option>
                    <option value="One Pot Creamy Cajun Chicken Pasta">One Pot Creamy Cajun Chicken Pasta</option>
                    <option value="One Pot Sausage and Mushroom Pasta">One Pot Sausage and Mushroom Pasta</option>
                    <option value="One Pot Sausage and Sun Dried Tomato Pasta">One Pot Sausage and Sun Dried Tomato Pasta</option>
                    <option value="One Pot Unstuffed Cabbage Rolls">One Pot Unstuffed Cabbage Rolls</option>
                    <option value="Orange Tofu Chickpea Bowls">Orange Tofu Chickpea Bowls</option>
                    <option value="Paleo Meatloaf with Bacon and Balsamic Onions">Paleo Meatloaf with Bacon and Balsamic Onions</option>
                    <option value="Pan-Toasted Sweet Corn with Wilted Chard and Black Beans">Pan-Toasted Sweet Corn with Wilted Chard and Black Beans</option>
                    <option value="Parmesan and Peppercorn Ranch Dressing">Parmesan and Peppercorn Ranch Dressing</option>
                    <option value="Parmesan Basil Tomato Soup">Parmesan Basil Tomato Soup</option>
                    <option value="Parmesan Garlic Spaghetti Squash">Parmesan Garlic Spaghetti Squash</option>
                    <option value="Pasta Salad with Creamy Chipotle Dressing">Pasta Salad with Creamy Chipotle Dressing</option>
                    <option value="Pasta Salad with Sausage and Arugula">Pasta Salad with Sausage and Arugula</option>
                    <option value="Pasta with Butternut Sauce, Sausage, and Spinach">Pasta with Butternut Sauce, Sausage, and Spinach</option>
                    <option value="Peanut Butter Marinated Chicken">Peanut Butter Marinated Chicken</option>
                    <option value="Peanutty Quinoa Bowls with Baked Tofu">Peanutty Quinoa Bowls with Baked Tofu</option>
                    <option value="Philly Cheesesteak Stuffed Portobello Mushrooms">Philly Cheesesteak Stuffed Portobello Mushrooms</option>
                    <option value="Pico de Gallo">Pico de Gallo</option>
                    <option value="Pork Chops and Couscous with Tomato-Caper Sauce">Pork Chops and Couscous with Tomato-Caper Sauce</option>
                    <option value="Pork Egg Roll in a Bowl">Pork Egg Roll in a Bowl</option>
                    <option value="Pork Gyoza">Pork Gyoza</option>
                    <option value="Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables">Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables</option>
                    <option value="Portobello Polenta Bowls">Portobello Polenta Bowls</option>
                    <option value="Potato, Leek, and Corn Chowder">Potato, Leek, and Corn Chowder</option>
                    <option value="Pozole Verde Chicken">Pozole Verde Chicken</option>
                    <option value="Pulled Pork">Pulled Pork</option>
                    <option value="Quick & Easy Mexican Chicken">Quick & Easy Mexican Chicken</option>
                    <option value="Quinoa with Roasted Garlic and Potatoes">Quinoa with Roasted Garlic and Potatoes</option>
                    <option value="Raita">Raita</option>
                    <option value="Red Wine Vinaigrette">Red Wine Vinaigrette</option>
                    <option value="Ricotta Goat Cheese Polenta Bake">Ricotta Goat Cheese Polenta Bake</option>
                    <option value="Roasted Cabbage Wedges with Onion Dijon Sauce">Roasted Cabbage Wedges with Onion Dijon Sauce</option>
                    <option value="Roasted Carrots">Roasted Carrots</option>
                    <option value="Roasted Cauliflower and Chickpeas with Minted Yogurt">Roasted Cauliflower and Chickpeas with Minted Yogurt</option>
                    <option value="Roasted Cauliflower Salad with Lemon Tahini Dressing">Roasted Cauliflower Salad with Lemon Tahini Dressing</option>
                    <option value="Roasted Garlic Chicken Salad">Roasted Garlic Chicken Salad</option>
                    <option value="Roasted Parmesan Broccoli">Roasted Parmesan Broccoli</option>
                    <option value="Roasted Red Pepper and Garlic Soup">Roasted Red Pepper and Garlic Soup</option>
                    <option value="Roasted Tomato Soup">Roasted Tomato Soup</option>
                    <option value="Roasted Tomato Soup">Roasted Tomato Soup</option>
                    <option value="Sausage and Kale Cassoulet">Sausage and Kale Cassoulet</option>
                    <option value="Sausage and Mushroom Bread Pudding">Sausage and Mushroom Bread Pudding</option>
                    <option value="Sausage and Mushroom Pasta">Sausage and Mushroom Pasta</option>
                    <option value="Sausage and Tortelloni Soup">Sausage and Tortelloni Soup</option>
                    <option value="Sausage-stuffed zuchini boats">Sausage-stuffed zuchini boats</option>
                    <option value="Sauteed Cabbage and Kielbasa">Sauteed Cabbage and Kielbasa</option>
                    <option value="Savory Slow Cooker Brisket">Savory Slow Cooker Brisket</option>
                    <option value="Sesame Soba Noodles with Collard Greens and Tempeh Croutons">Sesame Soba Noodles with Collard Greens and Tempeh Croutons</option>
                    <option value="Shakshuka">Shakshuka</option>
                    <option value="Shawarma-Spiced Grilled Chicken with Garlic Yogurt">Shawarma-Spiced Grilled Chicken with Garlic Yogurt</option>
                    <option value="Sheet Pan Pork Chop Supper">Sheet Pan Pork Chop Supper</option>
                    <option value="Simple Baked Chicken Drumsticks">Simple Baked Chicken Drumsticks</option>
                    <option value="Simple Herb Mushroom Barley Salad">Simple Herb Mushroom Barley Salad</option>
                    <option value="Simple Perfect Enchiladas">Simple Perfect Enchiladas</option>
                    <option value="Simple Tomato Cucumber Salad">Simple Tomato Cucumber Salad</option>
                    <option value="Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta ">Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta </option>
                    <option value="Skillet Sicilian Chicken">Skillet Sicilian Chicken</option>
                    <option value="Skillet Steak with Onions and Mushrooms">Skillet Steak with Onions and Mushrooms</option>
                    <option value="Skinny Balsamic Vinaigrette">Skinny Balsamic Vinaigrette</option>
                    <option value="Skinny Cheeseburger Casserole">Skinny Cheeseburger Casserole</option>
                    <option value="Slow Cooker 5 spice pulled pork">Slow Cooker 5 spice pulled pork</option>
                    <option value="Slow Cooker Beef and Pepper Soup">Slow Cooker Beef and Pepper Soup</option>
                    <option value="Slow Cooker Beef Stew">Slow Cooker Beef Stew</option>
                    <option value="Slow Cooker Carnitas">Slow Cooker Carnitas</option>
                    <option value="Slow Cooker Cashew Chicken">Slow Cooker Cashew Chicken</option>
                    <option value="Slow Cooker Cheater Pork Stew">Slow Cooker Cheater Pork Stew</option>
                    <option value="Slow Cooker Cheeseburger Soup">Slow Cooker Cheeseburger Soup</option>
                    <option value="Slow Cooker Cheesy Enchilada Meatballs">Slow Cooker Cheesy Enchilada Meatballs</option>
                    <option value="Slow Cooker Chicken Cauliflower Curry">Slow Cooker Chicken Cauliflower Curry</option>
                    <option value="Slow Cooker Chicken Tortilla Soup">Slow Cooker Chicken Tortilla Soup</option>
                    <option value="Slow Cooker Cilantro Lime Chicken Tacos">Slow Cooker Cilantro Lime Chicken Tacos</option>
                    <option value="Slow Cooker Coconut Curry Lentils">Slow Cooker Coconut Curry Lentils</option>
                    <option value="Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms">Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms</option>
                    <option value="Slow Cooker Enchilada Quinoa">Slow Cooker Enchilada Quinoa</option>
                    <option value="Slow Cooker Italian Meatballs">Slow Cooker Italian Meatballs</option>
                    <option value="Slow Cooker Lemon Garlic Chicken Thighs">Slow Cooker Lemon Garlic Chicken Thighs</option>
                    <option value="Slow Cooker Mediterranean Chicken & Orzo">Slow Cooker Mediterranean Chicken & Orzo</option>
                    <option value="Slow Cooker Mushroom Barley Risotto">Slow Cooker Mushroom Barley Risotto</option>
                    <option value="Slow Cooker Peanut Butter Chicken">Slow Cooker Peanut Butter Chicken</option>
                    <option value="Slow Cooker Poblano Turkey Chili">Slow Cooker Poblano Turkey Chili</option>
                    <option value="Slow Cooker Roast">Slow Cooker Roast</option>
                    <option value="Slow Cooker Sausage and White Bean Soup">Slow Cooker Sausage and White Bean Soup</option>
                    <option value="Slow Cooker Thai Green Curry with Chicken">Slow Cooker Thai Green Curry with Chicken</option>
                    <option value="Slow Cooker Tofu Tikka Masala">Slow Cooker Tofu Tikka Masala</option>
                    <option value="Slow Cooker White Chicken Chili">Slow Cooker White Chicken Chili</option>
                    <option value="Southwest Black Beans Polenta Casserole">Southwest Black Beans Polenta Casserole</option>
                    <option value="Southwest Salad with Taco Ranch Dressing">Southwest Salad with Taco Ranch Dressing</option>
                    <option value="Southwestern Veggie-Packed Tater Tot Casserole">Southwestern Veggie-Packed Tater Tot Casserole</option>
                    <option value="Spicy Black Bean Burgers">Spicy Black Bean Burgers</option>
                    <option value="Spicy California Shrimp Stack">Spicy California Shrimp Stack</option>
                    <option value="Spicy Fish Taco Bowls">Spicy Fish Taco Bowls</option>
                    <option value="Spicy Sausage and Cabbage Soup">Spicy Sausage and Cabbage Soup</option>
                    <option value="Spicy Shrimp & Tomato Pasta">Spicy Shrimp & Tomato Pasta</option>
                    <option value="Spicy Tuna Cakes">Spicy Tuna Cakes</option>
                    <option value="Spicy Vegan Cream of Corn Soup">Spicy Vegan Cream of Corn Soup</option>
                    <option value="Spinach Tortellini Soup">Spinach Tortellini Soup</option>
                    <option value="Spinach, Mushroom, and Feta Crustless Quiche">Spinach, Mushroom, and Feta Crustless Quiche</option>
                    <option value="Spinach. Artichoke. and Feta Breakfast Bake">Spinach. Artichoke. and Feta Breakfast Bake</option>
                    <option value="Sriracha Chickpea Salad Wraps">Sriracha Chickpea Salad Wraps</option>
                    <option value="Steak Kebabs with Chimichurri">Steak Kebabs with Chimichurri</option>
                    <option value="Stewed Tofu with Corn and Tomatoes">Stewed Tofu with Corn and Tomatoes</option>
                    <option value="Stir-Fried Chicken with Bok Choy">Stir-Fried Chicken with Bok Choy</option>
                    <option value="Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions">Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions</option>
                    <option value="Stovetop Red Beans and Rice">Stovetop Red Beans and Rice</option>
                    <option value="Stuffed Buffalo Chicken Breasts">Stuffed Buffalo Chicken Breasts</option>
                    <option value="Stuffed Eggplant">Stuffed Eggplant</option>
                    <option value="Stuffed Peppers with Corn, Black Beans, and Pepper Jack">Stuffed Peppers with Corn, Black Beans, and Pepper Jack</option>
                    <option value="Stuffed Tomatoes">Stuffed Tomatoes</option>
                    <option value="Summer Slaw">Summer Slaw</option>
                    <option value="Summer Squash and Corn Chowder">Summer Squash and Corn Chowder</option>
                    <option value="Sweet Potato and Poblano Pepper Soup">Sweet Potato and Poblano Pepper Soup</option>
                    <option value="Taco Soup">Taco Soup</option>
                    <option value="Tamale Pie">Tamale Pie</option>
                    <option value="Tex-Mex Breakfast Casserole">Tex-Mex Breakfast Casserole</option>
                    <option value="Thai Coconut Curry Braised Chicken Thighs">Thai Coconut Curry Braised Chicken Thighs</option>
                    <option value="Thai Coconut Curry Butternut Squash Soup">Thai Coconut Curry Butternut Squash Soup</option>
                    <option value="Thai Coconut Soup">Thai Coconut Soup</option>
                    <option value="Thai Curry Vegetable Soup">Thai Curry Vegetable Soup</option>
                    <option value="Thai Meatball and Egg Drop Soup">Thai Meatball and Egg Drop Soup</option>
                    <option value="Thai Red Curry with Vegetables">Thai Red Curry with Vegetables</option>
                    <option value="The Great Big Vegan Salad">The Great Big Vegan Salad</option>
                    <option value="Tofu Broccoli Stir fry">Tofu Broccoli Stir fry</option>
                    <option value="Tofu Parmigiana">Tofu Parmigiana</option>
                    <option value="Tofu Steaks">Tofu Steaks</option>
                    <option value="Tomato Dijon Turkey Meatballs">Tomato Dijon Turkey Meatballs</option>
                    <option value="Turkey Meatball Stroganoff">Turkey Meatball Stroganoff</option>
                    <option value="Umbrian-Style Chicken">Umbrian-Style Chicken</option>
                    <option value="Unstuffed Bell Peppers">Unstuffed Bell Peppers</option>
                    <option value="Vegan Buddha Bowl">Vegan Buddha Bowl</option>
                    <option value="Vegan Coconut Curry Lentil Soup">Vegan Coconut Curry Lentil Soup</option>
                    <option value="Vegan Tacos">Vegan Tacos</option>
                    <option value="Vegan Winter Lentil Stew">Vegan Winter Lentil Stew</option>
                    <option value="Vegetable Enchilada Casserole">Vegetable Enchilada Casserole</option>
                    <option value="Weeknight Enchiladas">Weeknight Enchiladas</option>
                    <option value="White Bean, Spinach, & Turkey Stuffed Bell Peppers">White Bean, Spinach, & Turkey Stuffed Bell Peppers</option>
                    <option value="White Chili">White Chili</option>
                    <option value="Whole-Grain Veggie Burrito Bowl">Whole-Grain Veggie Burrito Bowl</option>
                    <option value="Will it Skillet? Mac & Cheese">Will it Skillet? Mac & Cheese</option>
                    <option value="Yassa Poulet">Yassa Poulet</option>
                    <option value="Zucchini Cheddar Scones">Zucchini Cheddar Scones</option>
                    <option value="Zuppa Toscana">Zuppa Toscana</option>
                </select>
            </label>
            <label className = "centered">
                <label className = "macros">
                    <p>
                        <label className="macro">Servings: {dict[value].Servings}</label>
                        <label className="macro">Calories: {dict[value].Calories}</label>
                        <label className="macro">Protein (g): {dict[value].ProteinGrams}</label>
                        <label className="macro">Fat (g): {dict[value].FatGrams}</label>
                        <label className="macro">Carbs (g): {dict[value].CarbsGrams}</label>
                    </p>
                </label>
                <p>
                    <label className="description">Meal: {dict[value].Meal}</label>
                    <label className="description">Cuisine: {dict[value].Cuisine}</label>
                    <label className="description">Protein: {dict[value].Protein}</label>
                </p>
                <p className = "longdescription">Notes: {dict[value].Notes}</p>
            </label>
        </div>
    )
}