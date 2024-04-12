// JavaScript source code
import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import RecipeSelection from "./Style/RecipeSelection.css";

export default function FoodSelection() {
    var dict = {
        "(Not) Refried Beans": { Servings: "9", Calories: "86", ProteinGrams: "10", FatGrams: "0", CarbsGrams: "27", Meal: "Protein", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://www.budgetbytes.com/2011/08/not-refried-beans/" },
        "Almost Boston Market Creamed Spinach": { Servings: "4", Calories: "382", ProteinGrams: "18", FatGrams: "27", CarbsGrams: "18", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "One serving is very small", Link: "http://www.food.com/recipe/almost-boston-market-creamed-spinach-77206" },
        "Apple Oat Greek Yogurt Muffins": { Servings: "12", Calories: "115", ProteinGrams: "5", FatGrams: "2", CarbsGrams: "20", Meal: "Bread", Cuisine: "American", Protein: "Greek yogurt", Notes: "None", Link: "http://www.runningwithspoons.com/2015/01/21/apple-oat-greek-yogurt-muffins/" },
        "Asian Pork with Mushrooms": { Servings: "7", Calories: "292", ProteinGrams: "33", FatGrams: "5", CarbsGrams: "27", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "None", Link: "http://www.skinnytaste.com/2011/10/crock-pot-asian-pork-with-mushrooms.html" },
        "Baba Ganoush": { Servings: "4", Calories: "107", ProteinGrams: "3", FatGrams: "8", CarbsGrams: "10", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "none", Notes: "None", Link: "http://minimalistbaker.com/simple-baba-ganoush/" },
        "Bacon Cheeseburger Soup": { Servings: "5", Calories: "561", ProteinGrams: "33", FatGrams: "42", CarbsGrams: "12", Meal: "Soup", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "https://www.ruled.me/bacon-cheeseburger-soup/" },
        "Bacon Parmesan Spaghetti Squash": { Servings: "6", Calories: "96", ProteinGrams: "2", FatGrams: "7", CarbsGrams: "3", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "None", Link: "https://www.skinnytaste.com/spaghetti-squash-with-bacon-and-parmesan/" },
        "Bacon-wrapped Green Bean Bundles": { Servings: "4", Calories: "168", ProteinGrams: "5", FatGrams: "13", CarbsGrams: "9", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "These are very tasty and have a lot of bacon flavor", Link: "http://www.skinnytaste.com/bacon-wrapped-green-bean-bundles/" },
        "Bacon, Mushroom, and Spinach Quiche": { Servings: "8", Calories: "299", ProteinGrams: "14", FatGrams: "22", CarbsGrams: "10", Meal: "Entree", Cuisine: "French", Protein: "Bacon", Notes: "None", Link: "http://www.honeybeesrecipes.com/recipes/bacon-mushroom-spinach-quiche-brunch-please.html" },
        "Bacon, Onion, and Brown Lentil Skillet": { Servings: "4", Calories: "269", ProteinGrams: "18", FatGrams: "4", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Bacon", Notes: "None", Link: "http://www.myrecipes.com/recipe/bacon-onion-brown-lentil-skillet" },
        "Baked Broccoli Macaroni and Cheese": { Servings: "8", Calories: "464", ProteinGrams: "31", FatGrams: "29", CarbsGrams: "48", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "Small portion", Link: "http://www.skinnytaste.com/skinny-baked-broccoli-macaroni-and/" },
        "Baked Chicken Milanese with Arugula and Tomatoes": { Servings: "6", Calories: "284", ProteinGrams: "28", FatGrams: "10", CarbsGrams: "22", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "https://www.skinnytaste.com/chicken-milanese-with-arugula-and/" },
        "Baked Chicken Nuggets": { Servings: "4", Calories: "217", ProteinGrams: "39", FatGrams: "8", CarbsGrams: "12", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/2011/04/healthy-baked-chicken-nuggets.html" },
        "Baked Eggplant Parmesan Stacks": { Servings: "4", Calories: "128", ProteinGrams: "9", FatGrams: "5", CarbsGrams: "13", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None", Link: "http://www.homesweetjones.com/baked-eggplant-parmesan-stacks/" },
        "Baked Falafel Salad": { Servings: "5", Calories: "370", ProteinGrams: "22", FatGrams: "17", CarbsGrams: "52", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "use canned chickpeas. 1 hour soaking is not enough. but the dressing is great!!!", Link: "https://www.acouplecooks.com/baked-falafel-salad-bowl-recipe/" },
        "Baked Falafels": { Servings: "5", Calories: "173", ProteinGrams: "9", FatGrams: "2", CarbsGrams: "30", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "None", Link: "http://pickyeaterblog.com/healthy-falafel-recipe/" },
        "Baked Garlic Pork Tenderloin": { Servings: "6", Calories: "353", ProteinGrams: "46", FatGrams: "17", CarbsGrams: "3", Meal: "Protein", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "https://sweetcsdesigns.com/best-baked-garlic-pork-tenderloin/" },
        "Baked Shrimp Taquitos": { Servings: "4", Calories: "303", ProteinGrams: "32", FatGrams: "12", CarbsGrams: "34", Meal: "Entree", Cuisine: "Mexican", Protein: "Shrimp", Notes: "None", Link: "http://www.skinnytaste.com/baked-shrimp-taquitos/" },
        "Beef and Mushroom Country Casserole": { Servings: "6", Calories: "428", ProteinGrams: "22", FatGrams: "18", CarbsGrams: "43", Meal: "Entree", Cuisine: "Southern", Protein: "Ground beef", Notes: "Very hearty", Link: "http://www.budgetbytes.com/2016/10/beef-mushroom-country-casserole/" },
        "Beef and Mushroom Stroganoff over Creamy Polenta": { Servings: "5", Calories: "367", ProteinGrams: "19", FatGrams: "18", CarbsGrams: "30", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "http://www.foodnetwork.com/recipes/beef-and-mushroom-stroganoff-over-creamy-polenta-3269964" },
        "Beef Barley Soup": { Servings: "6", Calories: "192", ProteinGrams: "21", FatGrams: "9", CarbsGrams: "27", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "https://www.jocooks.com/wprm_print/13867" },
        "Beef Burgers with Jerk Onions and Cucumber Avocado Salad": { Servings: "4", Calories: "421", ProteinGrams: "27", FatGrams: "28", CarbsGrams: "22", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "http://eatdrinkpaleo.com.au/beef-burgers-with-jerk-onions-cucumber-avocado-salad/" },
        "Beef Pot Roast": { Servings: "6", Calories: "477", ProteinGrams: "24", FatGrams: "21", CarbsGrams: "37", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "http://www.myrecipes.com/recipe/classic-beef-pot-roast" },
        "Beef Stew with Caramelized Onions and Red Wine": { Servings: "6", Calories: "446", ProteinGrams: "51", FatGrams: "15", CarbsGrams: "16", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "https://www.ambitiouskitchen.com/jalapeno-pepper-jack-turkey-bacon-quiche-potato-crust/" },
        "Black Bean Burger": { Servings: "4", Calories: "313", ProteinGrams: "16", FatGrams: "9", CarbsGrams: "43", Meal: "Entree", Cuisine: "American", Protein: "Beans", Notes: "needs a condiment", Link: "http://thepioneerwoman.com/cooking/black-bean-burger/" },
        "Black Bean Fiesta Mason Jar Salad": { Servings: "4", Calories: "316", ProteinGrams: "7", FatGrams: "17", CarbsGrams: "34", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "https://www.eatingbirdfood.com/fiesta-mason-jar-salad/" },
        "BLT and P Soup": { Servings: "6", Calories: "366", ProteinGrams: "24", FatGrams: "20", CarbsGrams: "25", Meal: "Soup", Cuisine: "American", Protein: "Bacon", Notes: "None", Link: "http://www.foodnetwork.com/recipes/rachael-ray/blt-and-p-bacon-leek-tomato-and-potato-soup-recipe.html" },
        "BLT Macaroni Salad": { Servings: "4", Calories: "151", ProteinGrams: "5", FatGrams: "4", CarbsGrams: "23", Meal: "Side", Cuisine: "American", Protein: "Bacon", Notes: "tastes exactly like a BLT with mayo", Link: "http://www.skinnytaste.com/blt-macaroni-salad/" },
        "BLTA Pesto Chicken Salad": { Servings: "4", Calories: "357", ProteinGrams: "29", FatGrams: "44", CarbsGrams: "4", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://peaceloveandlowcarb.com/blta-pesto-chicken-salad-low-carb-gluten-free-paleo/" },
        "Blue Cheese Polenta with Vegetables": { Servings: "4", Calories: "359", ProteinGrams: "15", FatGrams: "14", CarbsGrams: "42", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "http://www.myrecipes.com/recipe/blue-cheese-polenta-vegetables" },
        "Brazilian Shrimp Soup": { Servings: "4", Calories: "359", ProteinGrams: "24", FatGrams: "17", CarbsGrams: "28", Meal: "Soup", Cuisine: "South American", Protein: "Shrimp", Notes: "None", Link: "http://www.jocooks.com/soups/brazilian-shrimp-soup/" },
        "Broiled Tilapia Parmesan": { Servings: "8", Calories: "224", ProteinGrams: "25", FatGrams: "12", CarbsGrams: "1", Meal: "Entree", Cuisine: "Seafood", Protein: "Fish", Notes: "The butter/Parmesan spread is really good on other things too, like steamed broccolli", Link: "http://allrecipes.com/recipe/50644/broiled-tilapia-parmesan/?evt19=1&referringHubId=417" },
        "Cabbage Lasagna": { Servings: "10", Calories: "444", ProteinGrams: "39", FatGrams: "28", CarbsGrams: "13", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "It sounds weird but it's a nice low-carb way to eat lasagna filling", Link: "http://lowcarbyum.com/cabbage-lasagna-recipe/" },
        "California Grilled Chicken": { Servings: "4", Calories: "464", ProteinGrams: "45", FatGrams: "21", CarbsGrams: "22", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "Don't burn the chicken or it will be bad", Link: "https://www.delish.com/cooking/recipe-ideas/recipes/a53158/california-grilled-chicken-recipe/" },
        "Caramelized Onion and Beef Loco Moco": { Servings: "6", Calories: "464", ProteinGrams: "34", FatGrams: "23", CarbsGrams: "32", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "did half ground turkey, reduced amount of rice by half to get calorie count", Link: "http://www.foodrepublic.com/recipes/caramelized-onion-and-beef-loco-moco-recipe/" },
        "Caramelized Onion, Mushroom, and Swiss Stuffed Chicken": { Servings: "3", Calories: "435", ProteinGrams: "41", FatGrams: "28", CarbsGrams: "8", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://wholeandheavenlyoven.com/2018/04/30/caramelized-onion-mushroom-swiss-stuffed-chicken-breasts/" },
        "Cauliflower Pesto Crust Pizza": { Servings: "2", Calories: "449", ProteinGrams: "24", FatGrams: "22", CarbsGrams: "46", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "cauliflower crust is hard to make be crispy", Link: "http://www.vodkaandbiscuits.com/2015/02/21/cauliflower-crust-pizza/" },
        "Cheese & Spinach Stuffed Portobellos": { Servings: "4", Calories: "185", ProteinGrams: "15", FatGrams: "9", CarbsGrams: "12", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "Delicious!!!", Link: "http://www.eatingwell.com/recipes/cheese_spinach_stuffed_portobellos.html" },
        "Cheesy Cauliflower and Potato Soup": { Servings: "6", Calories: "327", ProteinGrams: "13", FatGrams: "11", CarbsGrams: "47", Meal: "Soup", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "https://www.budgetbytes.com/cheesy-cauliflower-and-potato-soup/" },
        "Cheesy Zucchini and Corn Fritters with Herb Sour Cream": { Servings: "14", Calories: "166", ProteinGrams: "8", FatGrams: "8", CarbsGrams: "16", Meal: "Entree", Cuisine: "Southern", Protein: "Cheese", Notes: "None", Link: "http://www.nerdswithknives.com/zucchini-corn-fritters/" },
        "Chicken & Mushrooms in a Garlic White Wine Sauce": { Servings: "4", Calories: "220", ProteinGrams: "30", FatGrams: "6", CarbsGrams: "10", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/chicken-and-mushrooms-in-garlic-white/" },
        "Chicken Alfredo with Broccoli": { Servings: "4", Calories: "429", ProteinGrams: "31", FatGrams: "11", CarbsGrams: "51", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "https://gimmedelicious.com/2017/04/04/skinny-chicken-broccoli-alfredo/" },
        "Chicken Club Avocado Boats": { Servings: "4", Calories: "397", ProteinGrams: "29", FatGrams: "26", CarbsGrams: "9", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://peaceloveandlowcarb.com/s-s-chicken-club-avocado-boats/" },
        "Chicken Gyro Bowls": { Servings: "4", Calories: "386", ProteinGrams: "24", FatGrams: "15", CarbsGrams: "39", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "calculated without the pita", Link: "https://www.myrecipes.com/recipe/chicken-gyro-bowls" },
        "Chicken Helper": { Servings: "4", Calories: "418", ProteinGrams: "30", FatGrams: "14", CarbsGrams: "48", Meal: "Entree", Cuisine: "Italian", Protein: "Ground chicken", Notes: "Easy way to use up leftover ground chicken", Link: "http://www.geniuskitchen.com/recipe/chicken-helper-406113" },
        "Chicken Panang Curry Noodle Bowls": { Servings: "4", Calories: "468", ProteinGrams: "23", FatGrams: "26", CarbsGrams: "25", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken thigh", Notes: "None", Link: "http://littlespicejar.com/chicken-panang-curry-noodle-bowls/" },
        "Chicken Parmesan Soup": { Servings: "4", Calories: "360", ProteinGrams: "19", FatGrams: "12", CarbsGrams: "46", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "https://www.chelseasmessyapron.com/20-minute-chicken-parmesan-soup/" },
        "Chicken Pesto Bake": { Servings: "4", Calories: "109", ProteinGrams: "14", FatGrams: "18", CarbsGrams: "2", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/skinny-chicken-pesto-bake/" },
        "Chicken Pot Pie Soup": { Servings: "6", Calories: "272", ProteinGrams: "23", FatGrams: "5", CarbsGrams: "37", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "calculated with a lot of random veggies", Link: "http://www.skinnytaste.com/chicken-pot-pie-soup/" },
        "Chicken Rollatini with Spinach": { Servings: "4", Calories: "428", ProteinGrams: "43", FatGrams: "22", CarbsGrams: "11", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/2011/04/chicken-rollatini-with-spinach-alla.html" },
        "Chicken Spinach Soup": { Servings: "4", Calories: "233", ProteinGrams: "20", FatGrams: "1", CarbsGrams: "39", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://joyinmykitchen.blogspot.com/2010/02/chicken-spinach-soup.html#.VjpGXcqspgM" },
        "Chicken Tikka Masala": { Servings: "4", Calories: "498", ProteinGrams: "37", FatGrams: "16", CarbsGrams: "39", Meal: "Entree", Cuisine: "Indian", Protein: "Chicken thigh", Notes: "Slow cooker, so delicious", Link: "http://www.thekitchn.com/recipe-slow-cooker-chicken-tikka-masala-recipes-from-the-kitchn-211284" },
        "Chicken, Feta Cheese, and Sun-Dried Tomato Wraps": { Servings: "4", Calories: "270", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "32", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None", Link: "https://www.allrecipes.com/recipe/73649/chicken-feta-cheese-and-sun-dried-tomato-wraps/" },
        "Chipotle Cheddar Cauliflower Black Bean Enchiladas": { Servings: "6", Calories: "436", ProteinGrams: "19", FatGrams: "21", CarbsGrams: "62", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "https://www.halfbakedharvest.com/chipotle-cheddar-cauliflower-black-bean-enchiladas/" },
        "Chipotle Chicken Taco Salad": { Servings: "4", Calories: "296", ProteinGrams: "22", FatGrams: "8", CarbsGrams: "36", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "http://www.myrecipes.com/recipe/chipotle-chicken-taco-salad" },
        "Chipotle Sofritas": { Servings: "5", Calories: "250", ProteinGrams: "17", FatGrams: "13", CarbsGrams: "18", Meal: "Entree", Cuisine: "Mexican", Protein: "Tofu", Notes: "None", Link: "http://www.chefdehome.com/Recipes/429/chipotle-sofritas-chipotle-mexican-grill-s-braised-sofritas-copycat" },
        "Chipotle-Lime Radish Salad": { Servings: "6", Calories: "160", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "17", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None", Link: "http://blessherheartyall.com/chipotle-lime-radish-salad" },
        "Chipotle-Spiced Beef and Bean Chili": { Servings: "4", Calories: "444", ProteinGrams: "32", FatGrams: "20", CarbsGrams: "34", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://allrecipes.com/recipe/13274/ten-minute-chipotle-spiced-beef-and-bean-chili/" },
        "Chopped Chicken Sesame Noodle Bowls": { Servings: "6", Calories: "306", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "23", Meal: "Soup", Cuisine: "Asian", Protein: "Chicken breast", Notes: "soba noodles are good, but this makes small portions", Link: "https://pinchofyum.com/chopped-chicken-sesame-noodle-bowls" },
        "Chorizo Stuffed Poblano Peppers": { Servings: "4", Calories: "365", ProteinGrams: "17", FatGrams: "26", CarbsGrams: "14", Meal: "Entree", Cuisine: "Mexican", Protein: "Chorizo", Notes: "They're small but packed with flavor", Link: "http://allrecipes.com/recipe/229885/chorizo-stuffed-poblano-peppers/" },
        "Chorizo Turkey Meatballs": { Servings: "10", Calories: "376", ProteinGrams: "36", FatGrams: "16", CarbsGrams: "23", Meal: "Protein", Cuisine: "Italian", Protein: "Ground turkey", Notes: "None", Link: "http://witandvinegar.com/2013/03/chorizo-turkey-meatballs.html" },
        "Cilantro-Lime Rice": { Servings: "1", Calories: "172", ProteinGrams: "3", FatGrams: "0", CarbsGrams: "38", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None", Link: "http://www.myrecipes.com/recipe/cilantro-lime-rice" },
        "Classic Meatloaf": { Servings: "8", Calories: "449", ProteinGrams: "36", FatGrams: "27", CarbsGrams: "13", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "https://www.simplyrecipes.com/recipes/classic_meatloaf/" },
        "Coconut Red Curry with Tofu": { Servings: "4", Calories: "429", ProteinGrams: "16", FatGrams: "19", CarbsGrams: "47", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None", Link: "https://cooking.nytimes.com/recipes/1016196-coconut-red-curry-with-tofu" },
        "Corn Salsa": { Servings: "6", Calories: "94", ProteinGrams: "3", FatGrams: "1", CarbsGrams: "22", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None", Link: "http://www.skinnytaste.com/2010/02/corn-salsa-with-lime.html" },
        "Cottage Cheese Biscuits": { Servings: "18", Calories: "95", ProteinGrams: "5", FatGrams: "4", CarbsGrams: "11", Meal: "Bread", Cuisine: "Southern", Protein: "Cottage cheese", Notes: "None", Link: "http://healthyrecipesblogs.com/2012/09/12/cottage-cheese-biscuits/" },
        "Creamy Cucumber and Tomato Salad": { Servings: "4", Calories: "130", ProteinGrams: "1", FatGrams: "9", CarbsGrams: "11", Meal: "Side", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "https://natashaskitchen.com/2010/08/16/creamy-cucumber-and-tomato-salad/" },
        "Creamy Garlic Mushroom Chicken": { Servings: "4", Calories: "286", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "6", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "https://www.budgetbytes.com/2017/01/creamy-garlic-mushroom-chicken/" },
        "Creamy Garlic Mushroom Soup": { Servings: "4", Calories: "171", ProteinGrams: "12", FatGrams: "10", CarbsGrams: "8", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://www.budgetbytes.com/2017/09/creamy-garlic-mushroom-soup/" },
        "Creamy Lemon Dill Greek Pasta Salad": { Servings: "6", Calories: "420", ProteinGrams: "14", FatGrams: "12", CarbsGrams: "66", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Greek yogurt", Notes: "None", Link: "https://www.budgetbytes.com/creamy-lemon-dill-greek-pasta-salad/" },
        "Creamy Mexican Slow Cooker Chicken": { Servings: "5", Calories: "332", ProteinGrams: "41", FatGrams: "12", CarbsGrams: "13", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "http://peaceloveandlowcarb.com/creamymexicanslowcookerchicken/" },
        "Creamy Sun-dried tomato & Parmesan Chicken Zoodles": { Servings: "6", Calories: "329", ProteinGrams: "29", FatGrams: "17", CarbsGrams: "10", Meal: "Entree", Cuisine: "Italian?", Protein: "Chicken thigh", Notes: "I don't like zoodles so it's good (but more calories) with actual pasta", Link: "http://cafedelites.com/2015/07/27/creamy-sun-dried-tomato-parmesan-chicken-zoodles/" },
        "Creamy Three-Bean Stew": { Servings: "4", Calories: "424", ProteinGrams: "25", FatGrams: "10", CarbsGrams: "72", Meal: "Soup", Cuisine: "Italian", Protein: "Beans", Notes: "None", Link: "https://www.amuse-your-bouche.com/creamy-three-bean-stew/" },
        "Crispy and Tender Baked Chicken Thighs": { Servings: "4", Calories: "247", ProteinGrams: "18", FatGrams: "20", CarbsGrams: "0", Meal: "Protein", Cuisine: "American", Protein: "Chicken thigh", Notes: "None", Link: "http://allrecipes.com/recipe/235151/crispy-and-tender-baked-chicken-thighs/" },
        "Crispy Baked Chicken Breasts": { Servings: "4", Calories: "293", ProteinGrams: "29", FatGrams: "6", CarbsGrams: "33", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "https://aseasyasapplepie.com/crispy-baked-chicken-breasts/" },
        "Crispy Chicken Thighs with Bacon and Wilted Escarole": { Servings: "4", Calories: "469", ProteinGrams: "31", FatGrams: "36", CarbsGrams: "7", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken thigh", Notes: "None", Link: "https://www.epicurious.com/recipes/food/views/crispy-chicken-thighs-with-bacon-and-wilted-escarole" },
        "Crock Pot Beef Quinoa Stew": { Servings: "6", Calories: "387", ProteinGrams: "23", FatGrams: "14", CarbsGrams: "43", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "Not satisfying", Link: "https://flouronmyface.com/crock-pot-beef-quinoa-stew/" },
        "Crock Pot Breakfast Pie": { Servings: "5", Calories: "412", ProteinGrams: "30", FatGrams: "32", CarbsGrams: "10", Meal: "Breakfast", Cuisine: "American", Protein: "Eggs", Notes: "Almost flavorless", Link: "http://paleomg.com/easy-crockpot-breakfast-pie/" },
        "Crock Pot Carne Guisada": { Servings: "5", Calories: "284", ProteinGrams: "35", FatGrams: "8", CarbsGrams: "17", Meal: "Soup", Cuisine: "South American", Protein: "Beef", Notes: "None", Link: "http://www.skinnytaste.com/crock-pot-carne-guisada-latin-beef-stew/" },
        "Crock Pot Chicken Cacciatore": { Servings: "8", Calories: "278", ProteinGrams: "20", FatGrams: "19", CarbsGrams: "9", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken thigh", Notes: "None", Link: "http://www.skinnytaste.com/2012/06/crock-pot-chicken-cacciatore.html#more" },
        "Crock Pot Chicken Enchilada Soup": { Servings: "6", Calories: "351", ProteinGrams: "26", FatGrams: "12", CarbsGrams: "39", Meal: "Soup", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/crock-pot-chicken-enchilada-soup/" },
        "Crock Pot Chicken Gnocchi Soup": { Servings: "6", Calories: "360", ProteinGrams: "27", FatGrams: "10", CarbsGrams: "42", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "Seriously, if you're gonna try one thing, make it be this.", Link: "http://pinchofyum.com/crockpot-chicken-gnocchi-soup" },
        "Crock Pot Chinese Beef and Broccoli": { Servings: "6", Calories: "360", ProteinGrams: "34", FatGrams: "16", CarbsGrams: "17", Meal: "Entree", Cuisine: "Asian", Protein: "Beef", Notes: "None", Link: "http://www.stockpilingmoms.com/2016/05/crockpot-chinese-beef-and-broccoli/" },
        "Crock Pot Corned Beef & Cabbage": { Servings: "6", Calories: "364", ProteinGrams: "23", FatGrams: "19", CarbsGrams: "26", Meal: "Entree", Cuisine: "European", Protein: "Beef", Notes: "None", Link: "http://www.skinnytaste.com/2012/03/crock-pot-corned-beef-and-cabbage.html" },
        "Crock Pot Picadillo": { Servings: "8", Calories: "234", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "6", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "Fun flavor", Link: "http://www.skinnytaste.com/crock-pot-picadillo/" },
        "Cucumber Avocado Salad": { Servings: "4", Calories: "110", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://eatdrinkpaleo.com.au/beef-burgers-with-jerk-onions-cucumber-avocado-salad/" },
        "Cucumber-Dill Tzatziki": { Servings: "24", Calories: "26", ProteinGrams: "2", FatGrams: "2", CarbsGrams: "1", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "Greek yogurt", Notes: "Do not freeze, it turns to water once thawed :(", Link: "http://www.bonappetit.com/recipe/cucumber-dill-tzatziki" },
        "Curried Cauliflower Soup": { Servings: "4", Calories: "256", ProteinGrams: "5", FatGrams: "16", CarbsGrams: "20", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "Don't skimp on the cilantro!", Link: "https://cookieandkate.com/2013/curried-cauliflower-soup/" },
        "Curried Chickpeas with Spinach": { Servings: "4", Calories: "245", ProteinGrams: "10", FatGrams: "9", CarbsGrams: "37", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "not spicy at all, could use a kick", Link: "http://www.budgetbytes.com/2013/12/curried-chickpeas-spinach/" },
        "Curry Soup with Lentils and Potato": { Servings: "4", Calories: "426", ProteinGrams: "13", FatGrams: "6", CarbsGrams: "83", Meal: "Soup", Cuisine: "Indian", Protein: "Lentils", Notes: "Large volume of portions", Link: "https://minimalistbaker.com/curried-potato-lentil-soup-1-pot/" },
        "Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil": { Servings: "4", Calories: "436", ProteinGrams: "34", FatGrams: "27", CarbsGrams: "21", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "https://www.wellplated.com/mustard-pork-tenderloin-grilled-vegetables-in-foil/" },
        "Easy Oven Fajitas": { Servings: "4", Calories: "394", ProteinGrams: "29", FatGrams: "16", CarbsGrams: "40", Meal: "Protein", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "https://www.budgetbytes.com/2013/02/oven-fajitas/" },
        "Easy Spinach Pie": { Servings: "8", Calories: "384", ProteinGrams: "8", FatGrams: "17", CarbsGrams: "42", Meal: "Entree", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "https://www.budgetbytes.com/2012/09/spinach-pie/" },
        "Eggplant and Tofu Curry": { Servings: "4", Calories: "470", ProteinGrams: "17", FatGrams: "31", CarbsGrams: "33", Meal: "Entree", Cuisine: "Indian", Protein: "Tofu", Notes: "None", Link: "http://www.foodnetwork.com/recipes/food-network-kitchens/eggplant-and-tofu-curry-recipe.html" },
        "Eggplant Bruschetta": { Servings: "4", Calories: "181", ProteinGrams: "2", FatGrams: "13", CarbsGrams: "14", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None", Link: "http://peaceloveandlowcarb.com/eggplant-bruschetta-low-carb-paleo-gluten-free/" },
        "Eggplant Lasagna": { Servings: "9", Calories: "406", ProteinGrams: "31", FatGrams: "16", CarbsGrams: "31", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None", Link: "http://allrecipes.com/recipe/220094/eggplant-lasagna/" },
        "Fat Guacamole Devils": { Servings: "1", Calories: "240", ProteinGrams: "14", FatGrams: "21", CarbsGrams: "6", Meal: "Protein", Cuisine: "American", Protein: "Eggs", Notes: "None", Link: "http://www.marksdailyapple.com/fat-guacamole-devils/#axzz46gJDEThY" },
        "Food Cart-Style Chicken Salad with White Sauce": { Servings: "4", Calories: "339", ProteinGrams: "37", FatGrams: "16", CarbsGrams: "14", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chicken thigh", Notes: "None", Link: "https://www.skinnytaste.com/food-cart-style-chicken-salad-with-white-sauce/" },
        "Fresh Raspberry Balsamic Vinaigrette": { Servings: "6", Calories: "88", ProteinGrams: "0", FatGrams: "7", CarbsGrams: "7", Meal: "Condiment", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://flavorthemoments.com/fresh-raspberry-balsamic-vinaigrette/" },
        "Fresh Tomato Basil Pasta with Ricotta": { Servings: "4", Calories: "465", ProteinGrams: "17", FatGrams: "15", CarbsGrams: "62", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None", Link: "https://www.budgetbytes.com/fresh-tomato-basil-pasta-with-ricotta/" },
        "Garlic Cheddar Biscuits": { Servings: "7", Calories: "108", ProteinGrams: "3", FatGrams: "5", CarbsGrams: "13", Meal: "Bread", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "http://www.skinnytaste.com/garlic-cheddar-biscuits/" },
        "Garlic Green Beans": { Servings: "5", Calories: "49", ProteinGrams: "2", FatGrams: "3", CarbsGrams: "6", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://www.marthastewart.com/317422/microwave-steamed-garlic-green-beans" },
        "Garlic Roasted Cabbage Wedges": { Servings: "4", Calories: "188", ProteinGrams: "4", FatGrams: "12", CarbsGrams: "19", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://www.cookingclassy.com/garlic-roasted-cabbage-wedges/" },
        "Geechigirl Crab Cakes": { Servings: "4", Calories: "364", ProteinGrams: "28", FatGrams: "25", CarbsGrams: "6", Meal: "Entree", Cuisine: "Southern", Protein: "Fish", Notes: "Very savory.", Link: "http://www.delish.com/cooking/recipe-ideas/recipes/a13225/geechigirl-crab-cakes-recipe-opr0910/" },
        "Granola Bars": { Servings: "15", Calories: "234", ProteinGrams: "4", FatGrams: "12", CarbsGrams: "29", Meal: "Snack", Cuisine: "American", Protein: "None", Notes: "My mix: craisins, slivered almonds, chopped walnuts, wheat germ", Link: "http://smittenkitchen.com/blog/2010/02/thick-chewy-granola-bars/" },
        "Greek Turkey Burgers": { Servings: "6", Calories: "253", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "11", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Turkey", Notes: "None", Link: "https://www.budgetbytes.com/2011/03/greek-turkey-burgers/" },
        "Greek Yogurt Pancakes": { Servings: "4", Calories: "346", ProteinGrams: "12", FatGrams: "13", CarbsGrams: "44", Meal: "Breakfast", Cuisine: "American", Protein: "Greek yogurt", Notes: "None", Link: "https://www.lecremedelacrumb.com/greek-yogurt-pancakes" },
        "Grilled Corn and Poblano Salad": { Servings: "4", Calories: "278", ProteinGrams: "5", FatGrams: "16", CarbsGrams: "36", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None", Link: "https://www.bonappetit.com/recipe/grilled-corn-and-poblano-chile-salad" },
        "Grilled Steak with Tomatoes, Red Onion, and Balsamic": { Servings: "6", Calories: "285", ProteinGrams: "33", FatGrams: "14", CarbsGrams: "5", Meal: "Entree", Cuisine: "Italian", Protein: "Beef", Notes: "Doesn't save for 5 full days", Link: "http://www.skinnytaste.com/grilled-flank-steak-with-tomatoes-red/" },
        "Harvest Roasted Vegetable Grain Bowl": { Servings: "4", Calories: "425", ProteinGrams: "15", FatGrams: "19", CarbsGrams: "47", Meal: "Entree", Cuisine: "American", Protein: "Farro", Notes: "None", Link: "https://www.joyfulhealthyeats.com/harvest-roasted-vegetable-grain-bowl/" },
        "Healthier Stuffed Peppers": { Servings: "6", Calories: "341", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "33", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "https://www.allrecipes.com/recipe/219447/healthier-stuffed-peppers/" },
        "Healthy Freezer Breakfast Burritos": { Servings: "7", Calories: "521", ProteinGrams: "30", FatGrams: "27", CarbsGrams: "40", Meal: "Breakfast", Cuisine: "American", Protein: "Sausage", Notes: "None", Link: "https://www.ahealthysliceoflife.com/healthy-freezer-breakfast-burritos-recipe/" },
        "Healthy Mac and Cheese": { Servings: "5", Calories: "365", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "this is the best way to eat mac and cheese on a diet", Link: "https://pinchofyum.com/healthy-mac-and-cheese" },
        "Hearty Lentil and Black Bean Soup": { Servings: "5", Calories: "266", ProteinGrams: "16", FatGrams: "4", CarbsGrams: "44", Meal: "Soup", Cuisine: "American", Protein: "Beans, lentils", Notes: "it's really easy to get sick of this soup. trust me.", Link: "http://www.cookincanuck.com/2011/11/hearty-lentil-black-bean-soup-with-smoked-paprika-recipe/" },
        "Herb Roasted Chicken Breasts": { Servings: "4", Calories: "336", ProteinGrams: "35", FatGrams: "17", CarbsGrams: "13", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "definitely get the bone-in skin-on split breasts, or there's not really a point", Link: "https://www.budgetbytes.com/2017/01/herb-roasted-chicken-breasts/" },
        "Indonesian Chicken": { Servings: "4", Calories: "218", ProteinGrams: "22", FatGrams: "10", CarbsGrams: "11", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken wings", Notes: "None", Link: "http://www.laaloosh.com/2012/12/12/crock-pot-indonesian-chicken-recipe/" },
        "Israeli Couscous": { Servings: "6", Calories: "335", ProteinGrams: "11", FatGrams: "13", CarbsGrams: "45", Meal: "Entree", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "https://www.themediterraneandish.com/israeli-couscous-recipe/" },
        "Italian Orzo Spinach Soup": { Servings: "4", Calories: "356", ProteinGrams: "10", FatGrams: "10", CarbsGrams: "56", Meal: "Soup", Cuisine: "Italian", Protein: "None", Notes: "None", Link: "https://www.gimmesomeoven.com/italian-orzo-spinach-soup-recipe/" },
        "Italian Sausage Soup": { Servings: "4", Calories: "236", ProteinGrams: "14", FatGrams: "12", CarbsGrams: "17", Meal: "Soup", Cuisine: "Italian", Protein: "Eggs, sausage", Notes: "None", Link: "http://www.myrecipes.com/recipe/italian-sausage-soup" },
        "Jalapeno Popper Chicken Salad": { Servings: "6", Calories: "436", ProteinGrams: "53", FatGrams: "23", CarbsGrams: "1", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "http://paleomg.com/jalapeno-popper-chicken-salad-cooking-video/" },
        "Jalapeno, Pepper Jack, and Turkey Bacon Quiche": { Servings: "4", Calories: "416", ProteinGrams: "25", FatGrams: "24", CarbsGrams: "27", Meal: "Breakfast", Cuisine: "Mexican", Protein: "Turkey bacon", Notes: "Not spicy at all.", Link: "https://www.ambitiouskitchen.com/jalapeno-pepper-jack-turkey-bacon-quiche-potato-crust/" },
        "Kale and Cabbage Soup": { Servings: "8", Calories: "158", ProteinGrams: "6", FatGrams: "7", CarbsGrams: "28", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://allrecipes.com/recipe/232406/kale-and-cabbage-soup/" },
        "Korean Style Ground Beef and Spinach Rice Bowls": { Servings: "4", Calories: "473", ProteinGrams: "33", FatGrams: "24", CarbsGrams: "30", Meal: "Entree", Cuisine: "Asian", Protein: "Ground beef", Notes: "None", Link: "https://www.mashupmom.com/korean-style-ground-beef-and-spinach-rice-bowls/" },
        "Lemon Chicken Orzo Soup": { Servings: "6", Calories: "246", ProteinGrams: "19", FatGrams: "8", CarbsGrams: "23", Meal: "Soup", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "https://damndelicious.net/2014/04/25/lemon-chicken-orzo-soup/" },
        "Lemon Tahini Salad Dressing": { Servings: "5", Calories: "83", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "http://www.food.com/recipe/lemon-tahini-salad-dressing-428628" },
        "Lemon, Rice, and Chicken Soup": { Servings: "6", Calories: "201", ProteinGrams: "16", FatGrams: "6", CarbsGrams: "16", Meal: "Soup", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None", Link: "https://www.jocooks.com/recipes/lemon-rice-and-chicken-soup/" },
        "Lentil & Black Bean Soup": { Servings: "5", Calories: "266", ProteinGrams: "16", FatGrams: "4", CarbsGrams: "44", Meal: "Soup", Cuisine: "American", Protein: "Lentils, beans", Notes: "recipe says it's 4 servings, really more like 5.", Link: "http://www.cookincanuck.com/2011/11/hearty-lentil-black-bean-soup-with-smoked-paprika-recipe/" },
        "Lentil Dal with Hearty Greens": { Servings: "4", Calories: "331", ProteinGrams: "18", FatGrams: "7", CarbsGrams: "48", Meal: "Entree", Cuisine: "Indian", Protein: "Lentils", Notes: "None", Link: "http://www.thekitchn.com/recipe-lentil-dal-with-hearty-greens-223147" },
        "Light Balsamic Vinaigrette": { Servings: "8", Calories: "60", ProteinGrams: "0", FatGrams: "5", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "my go-to salad dressing!", Link: "http://www.theskinnyfork.com/blog/skinny-balsamic-vinaigrette" },
        "Light Mexican Casserole": { Servings: "6", Calories: "374", ProteinGrams: "29", FatGrams: "10", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef, beans", Notes: "None", Link: "http://www.tasteofhome.com/recipes/light-mexican-casserole" },
        "Loaded Potato Soup": { Servings: "4", Calories: "345", ProteinGrams: "11", FatGrams: "13", CarbsGrams: "46", Meal: "Soup", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "http://www.handletheheat.com/light-loaded-potato-soup/" },
        "Lower-Fat Coleslaw": { Servings: "6", Calories: "100", ProteinGrams: "3", FatGrams: "4", CarbsGrams: "16", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "None", Link: "http://allrecipes.com/recipe/222816/lower-fat-coleslaw/" },
        "Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon": { Servings: "4", Calories: "312", ProteinGrams: "9", FatGrams: "15", CarbsGrams: "36", Meal: "Entree", Cuisine: "American", Protein: "Sausage, quinoa", Notes: "None", Link: "https://www.seriouseats.com/recipes/2013/07/make-ahead-mustard-quinoa-sausage-potato-tarragon-recipe.html" },
        "Marinated Baked Tofu": { Servings: "4", Calories: "179", ProteinGrams: "13", FatGrams: "12", CarbsGrams: "6", Meal: "Protein", Cuisine: "Asian", Protein: "Tofu", Notes: "None", Link: "http://www.food.com/recipe/marinated-baked-tofu-114102" },
        "Matzo Ball Soup": { Servings: "5", Calories: "361", ProteinGrams: "25", FatGrams: "18", CarbsGrams: "24", Meal: "Soup", Cuisine: "European", Protein: "Chicken", Notes: "None", Link: "https://www.budgetbytes.com/2015/10/matzo-ball-soup/" },
        "Mediterranean Hummus Bowls": { Servings: "4", Calories: "531", ProteinGrams: "24", FatGrams: "29", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Ground beef", Notes: "calculated with 3 cups of brown rice", Link: "https://www.budgetbytes.com/mediterranean-hummus-bowls/" },
        "Mexican Casserole with Roasted Corn and Peppers": { Servings: "4", Calories: "366", ProteinGrams: "15", FatGrams: "11", CarbsGrams: "57", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://pinchofyum.com/healthy-mexican-casserole-roasted-corn-peppers" },
        "Mexican Pinto Bean Soup with Queso": { Servings: "6", Calories: "377", ProteinGrams: "20", FatGrams: "13", CarbsGrams: "55", Meal: "Soup", Cuisine: "Mexican", Protein: "Beans", Notes: "Very cilantro. Great if you love cilantro (which I do)!", Link: "https://www.skinnytaste.com/mexican-pinto-beans-with-queso-frijoles-con-todo/" },
        "Mexican Taco Casserole Bake": { Servings: "14", Calories: "343", ProteinGrams: "24", FatGrams: "25", CarbsGrams: "6", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://lowcarbyum.com/mexican-taco-casserole-bake/" },
        "Mini Garden Turkey Loaves": { Servings: "6", Calories: "294", ProteinGrams: "21", FatGrams: "10", CarbsGrams: "32", Meal: "Entree", Cuisine: "American", Protein: "Ground turkey", Notes: "1 serve = 2 loaves. Great way to eat veggies!", Link: "https://www.budgetbytes.com/mini-garden-turkey-loaves/" },
        "Moroccan Lentil and Vegetable Stew": { Servings: "6", Calories: "193", ProteinGrams: "8", FatGrams: "6", CarbsGrams: "30", Meal: "Soup", Cuisine: "African", Protein: "Lentils", Notes: "None", Link: "https://www.budgetbytes.com/2014/11/moroccan-lentil-vegetable-stew/" },
        "Moroccan Sweet Potato Lentil Soup": { Servings: "6", Calories: "224", ProteinGrams: "13", FatGrams: "38", CarbsGrams: "1", Meal: "Soup", Cuisine: "African", Protein: "Lentils", Notes: "None", Link: "http://littlespicejar.com/moroccan-sweet-potato-lentil-soup/" },
        "Mozzarella Chicken in Tomato Sauce": { Servings: "4", Calories: "207", ProteinGrams: "22", FatGrams: "12", CarbsGrams: "4", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "https://cafedelites.com/mozzarella-chicken-in-tomato-sauce/" },
        "Mujaddara": { Servings: "6", Calories: "261", ProteinGrams: "12", FatGrams: "1", CarbsGrams: "45", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Lentils", Notes: "None", Link: "https://www.budgetbytes.com/2015/03/mujaddara/" },
        "Mushroom and Spinach Lasagna": { Servings: "6", Calories: "448", ProteinGrams: "28", FatGrams: "23", CarbsGrams: "37", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "Very cheesy", Link: "http://www.lifeasastrawberry.com/mushroom-and-spinach-lasagna/" },
        "Mustard Cream Sauce for Haddock": { Servings: "2", Calories: "203", ProteinGrams: "1", FatGrams: "22", CarbsGrams: "2", Meal: "Condiment", Cuisine: "Seafood", Protein: "None", Notes: "None", Link: "http://www.cookingforkeeps.com/brown-butter-seared-haddock-with-mustard-cream-sauce/" },
        "No Sugar Added Apple Pie Overnight Oats": { Servings: "4", Calories: "330", ProteinGrams: "5", FatGrams: "9", CarbsGrams: "59", Meal: "Breakfast", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://www.budgetbytes.com/2016/06/no-sugar-added-apple-pie-overnight-oats/" },
        "No-Cook BLT Salad": { Servings: "4", Calories: "293", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "18", Meal: "Entree", Cuisine: "American", Protein: "Bacon", Notes: "None", Link: "https://www.cookinglight.com/food/recipe-finder/no-cook-blt-salad-recipe" },
        "No-Noodle Zucchini Lasagna Recipe": { Servings: "8", Calories: "364", ProteinGrams: "29", FatGrams: "21", CarbsGrams: "17", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None", Link: "http://allrecipes.com/recipe/172958/no-noodle-zucchini-lasagna/" },
        "Oatmeal Cottage Cheese Pancakes": { Servings: "1", Calories: "333", ProteinGrams: "35", FatGrams: "5", CarbsGrams: "33", Meal: "Breakfast", Cuisine: "American", Protein: "Cottage cheese", Notes: "would probably be amazing in a waffle iron", Link: "http://www.food.com/recipe/oatmeal-cottage-cheese-pancakes-43072" },
        "One Pan Cheesy Jalapeno Chicken": { Servings: "4", Calories: "465", ProteinGrams: "34", FatGrams: "26", CarbsGrams: "26", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "https://www.thechunkychef.com/one-pan-cheesy-jalapeno-chicken/" },
        "One Pot Cheesy Taco Orzo": { Servings: "6", Calories: "486", ProteinGrams: "31", FatGrams: "12", CarbsGrams: "61", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://www.jocooks.com/recipes/one-pot-cheesy-taco-orzo/" },
        "One Pot Creamy Cajun Chicken Pasta": { Servings: "4", Calories: "482", ProteinGrams: "34", FatGrams: "15", CarbsGrams: "51", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "Seriously, this is so good", Link: "https://www.budgetbytes.com/one-pot-creamy-cajun-chicken-pasta/" },
        "One Pot Sausage and Mushroom Pasta": { Servings: "8", Calories: "361", ProteinGrams: "14", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None", Link: "http://www.budgetbytes.com/2014/04/one-pot-sausage-mushroom-pasta/" },
        "One Pot Sausage and Sun Dried Tomato Pasta": { Servings: "4", Calories: "371", ProteinGrams: "21", FatGrams: "11", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Sausage", Notes: "None", Link: "https://www.budgetbytes.com/2017/03/one-pot-sausage-sun-dried-tomato-pasta/" },
        "One Pot Unstuffed Cabbage Rolls": { Servings: "4", Calories: "329", ProteinGrams: "29", FatGrams: "8", CarbsGrams: "35", Meal: "Entree", Cuisine: "European", Protein: "Ground beef", Notes: "None", Link: "https://www.familyfreshmeals.com/2016/08/one-pot-unstuffed-cabbage-rolls.html" },
        "Orange Tofu Chickpea Bowls": { Servings: "4", Calories: "544", ProteinGrams: "24", FatGrams: "17", CarbsGrams: "74", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "lots of food", Link: "https://www.shelikesfood.com/orange-tofu-chickpea-bowls-meal-prep/" },
        "Paleo Meatloaf with Bacon and Balsamic Onions": { Servings: "7", Calories: "417", ProteinGrams: "29", FatGrams: "31", CarbsGrams: "6", Meal: "Entree", Cuisine: "American", Protein: "Ground beef, bacon", Notes: "None", Link: "http://eatdrinkpaleo.com.au/paleo-meatloaf-bacon-balsamic-onions/" },
        "Pan-Toasted Sweet Corn with Wilted Chard and Black Beans": { Servings: "4", Calories: "168", ProteinGrams: "9", FatGrams: "2", CarbsGrams: "32", Meal: "Side", Cuisine: "Southern", Protein: "None", Notes: "None", Link: "http://www.wholefoodsmarket.com/recipe/pan-toasted-sweet-corn-wilted-chard-and-black-beans" },
        "Parmesan and Peppercorn Ranch Dressing": { Servings: "5", Calories: "35", ProteinGrams: "3", FatGrams: "2", CarbsGrams: "1", Meal: "Condiment", Cuisine: "American", Protein: "None", Notes: "Not good", Link: "http://allrecipes.com/recipe/214081/emilys-famous-parmesan-and-peppercorn-ranch-dressing/" },
        "Parmesan Basil Tomato Soup": { Servings: "6", Calories: "362", ProteinGrams: "10", FatGrams: "19", CarbsGrams: "41", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://littlespicejar.com/parmesan-basil-tomato-soup-slow-cooker/" },
        "Parmesan Garlic Spaghetti Squash": { Servings: "4", Calories: "267", ProteinGrams: "3", FatGrams: "12", CarbsGrams: "11", Meal: "Entree", Cuisine: "Italian", Protein: "Cheese", Notes: "None", Link: "http://www.eatwell101.com/parmesan-garlic-spaghetti-squash-recipe#_a5y_p=5146411" },
        "Pasta Salad with Creamy Chipotle Dressing": { Servings: "8", Calories: "441", ProteinGrams: "16", FatGrams: "21", CarbsGrams: "52", Meal: "Entree", Cuisine: "Mexican", Protein: "Greek yogurt, beans", Notes: "None", Link: "https://inquiringchef.com/pasta-salad-with-creamy-chipotle-dressing/" },
        "Pasta Salad with Sausage and Arugula": { Servings: "6", Calories: "579", ProteinGrams: "22", FatGrams: "27", CarbsGrams: "62", Meal: "Entree", Cuisine: "American", Protein: "Sausage", Notes: "dressing isn't very flavorful, barely keeps for 5 days. Also, recipe says that the sausage should be a fun flavorful \"surprise\" (meaning: rare). No. Double the amount of sausage.", Link: "http://www.budgetbytes.com/2015/10/pasta-salad-with-sausage-and-arugula/" },
        "Pasta with Butternut Sauce, Sausage, and Spinach": { Servings: "5", Calories: "349", ProteinGrams: "22", FatGrams: "7", CarbsGrams: "50", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None", Link: "https://www.skinnytaste.com/pasta-with-butternut-sauce-spicy/" },
        "Peanut Butter Marinated Chicken": { Servings: "2", Calories: "281", ProteinGrams: "18", FatGrams: "22", CarbsGrams: "4", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://www.geniuskitchen.com/recipe/peanut-butter-marinade-for-chicken-505734" },
        "Peanutty Quinoa Bowls with Baked Tofu": { Servings: "4", Calories: "376", ProteinGrams: "21", FatGrams: "16", CarbsGrams: "41", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None", Link: "https://ohmyveggies.com/recipe-peanutty-quinoa-bowls-two-make-baked-tofu/" },
        "Philly Cheesesteak Stuffed Portobello Mushrooms": { Servings: "4", Calories: "282", ProteinGrams: "17", FatGrams: "18", CarbsGrams: "9", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "http://www.skinnytaste.com/philly-cheesesteak-stuffed-portobello-mushrooms/" },
        "Pico de Gallo": { Servings: "4", Calories: "150", ProteinGrams: "4", FatGrams: "0", CarbsGrams: "31", Meal: "Side", Cuisine: "Mexican", Protein: "None", Notes: "None", Link: "http://www.foodnetwork.com/recipes/ree-drummond/pico-de-gallo-recipe-2122359" },
        "Pork Chops and Couscous with Tomato-Caper Sauce": { Servings: "4", Calories: "420", ProteinGrams: "31", FatGrams: "17", CarbsGrams: "39", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Pork", Notes: "None", Link: "http://www.myrecipes.com/recipe/pork-chops-couscous-tomato-caper-sauce" },
        "Pork Egg Roll in a Bowl": { Servings: "4", Calories: "416", ProteinGrams: "22", FatGrams: "31", CarbsGrams: "11", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "Hard to eat a lot of days in a row", Link: "http://peaceloveandlowcarb.com/pork-egg-roll-in-a-bowl-crack-slaw-paleo-low-carb-whole30/" },
        "Pork Gyoza": { Servings: "50 gyoza", Calories: "44", ProteinGrams: "2", FatGrams: "2", CarbsGrams: "5", Meal: "Entree", Cuisine: "Asian", Protein: "Pork", Notes: "None", Link: "http://www.myfitnesspal.com/recipe/view/243550032695277" },
        "Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables": { Servings: "4", Calories: "362", ProteinGrams: "15", FatGrams: "8", CarbsGrams: "46", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "https://sunbasket.com/recipe/pork-loin-with-caramelized-onions-and-honey-glazed-root-vegetables" },
        "Portobello Polenta Bowls": { Servings: "4", Calories: "314", ProteinGrams: "13", FatGrams: "9", CarbsGrams: "50", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Cheese", Notes: "Very flexible recipe", Link: "http://www.budgetbytes.com/2014/03/portobello-polenta-bowls/" },
        "Potato, Leek, and Corn Chowder": { Servings: "4", Calories: "381", ProteinGrams: "13", FatGrams: "14", CarbsGrams: "53", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None", Link: "http://www.myrecipes.com/recipe/potato-corn-leek-chowder" },
        "Pozole Verde Chicken": { Servings: "6", Calories: "220", ProteinGrams: "20", FatGrams: "4", CarbsGrams: "28", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken Breast", Notes: "None", Link: "https://www.forkintheroad.co/pozole-verde-chicken/" },
        "Pulled Pork": { Servings: "5", Calories: "347", ProteinGrams: "30", FatGrams: "22", CarbsGrams: "10", Meal: "Protein", Cuisine: "Southern", Protein: "Pork", Notes: "based on 1.5lb of meat", Link: "http://southernfatty.com/pulled-pork-bbq/" },
        "Quick & Easy Mexican Chicken": { Servings: "6", Calories: "285", ProteinGrams: "44", FatGrams: "9", CarbsGrams: "3", Meal: "Protein", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "https://www.allrecipes.com/recipe/8597/quick-and-easy-mexican-chicken/" },
        "Quinoa with Roasted Garlic and Potatoes": { Servings: "5", Calories: "343", ProteinGrams: "13", FatGrams: "6", CarbsGrams: "60", Meal: "Entree", Cuisine: "American", Protein: "Quinoa, chickpeas", Notes: "this seems like it would be bland, but actually it's great.", Link: "https://mywholefoodlife.com/2016/02/14/quinoa-with-roasted-garlic-and-potatoes/" },
        "Raita": { Servings: "8", Calories: "64", ProteinGrams: "5", FatGrams: "3", CarbsGrams: "4", Meal: "Condiment", Cuisine: "Indian", Protein: "Greek yogurt", Notes: "None", Link: "http://www.myrecipes.com/recipe/raita-indian-yogurt-cucumber-condiment" },
        "Red Wine Vinaigrette": { Servings: "6", Calories: "166", ProteinGrams: "0", FatGrams: "19", CarbsGrams: "1", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "None", Link: "http://www.epicurious.com/recipes/food/views/red-wine-vinaigrette-106752" },
        "Ricotta Goat Cheese Polenta Bake": { Servings: "5", Calories: "405", ProteinGrams: "14", FatGrams: "21", CarbsGrams: "45", Meal: "Entree", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "https://www.gatheranddine.com/ricotta-goat-cheese-polenta-bake-with-mushrooms-greens-and-caramelized-onions/" },
        "Roasted Cabbage Wedges with Onion Dijon Sauce": { Servings: "4", Calories: "122", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "Love roasted cabbage! And the sauce is good too.", Link: "http://anoregoncottage.com/roasted-cabbage-wedges-with-onion-dijon-sauce/2/" },
        "Roasted Carrots": { Servings: "8", Calories: "70", ProteinGrams: "1", FatGrams: "4", CarbsGrams: "9", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://www.foodnetwork.com/recipes/ina-garten/roasted-carrots-recipe.html" },
        "Roasted Cauliflower and Chickpeas with Minted Yogurt": { Servings: "4", Calories: "205", ProteinGrams: "12", FatGrams: "7", CarbsGrams: "31", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "Minted yogurt is weird", Link: "http://www.skinnytaste.com/roasted-cauliflower-and-chickpeas-with/" },
        "Roasted Cauliflower Salad with Lemon Tahini Dressing": { Servings: "5", Calories: "316", ProteinGrams: "13", FatGrams: "20", CarbsGrams: "28", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "None", Link: "https://www.budgetbytes.com/2017/02/roasted-cauliflower-salad-lemon-tahini-dressing/" },
        "Roasted Garlic Chicken Salad": { Servings: "4", Calories: "261", ProteinGrams: "28", FatGrams: "15", CarbsGrams: "7", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://littlebitsof.com/2015/12/roasted-garlic-chicken-salad/" },
        "Roasted Parmesan Broccoli": { Servings: "4", Calories: "173", ProteinGrams: "10", FatGrams: "11", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "http://www.thecookierookie.com/parmesan-broccoli/" },
        "Roasted Red Pepper and Garlic Soup": { Servings: "4", Calories: "366", ProteinGrams: "12", FatGrams: "14", CarbsGrams: "51", Meal: "Soup", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "https://www.lazycatkitchen.com/roasted-red-pepper-garlic-soup/" },
        "Roasted Tomato Soup": { Servings: "6", Calories: "135", ProteinGrams: "3", FatGrams: "5", CarbsGrams: "19", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://www.hezzi-dsbooksandcooks.com/2013/05/roasted-tomato-soup.html" },
        "Roasted Tomato Soup": { Servings: "6", Calories: "268", ProteinGrams: "2", FatGrams: "27", CarbsGrams: "8", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "seriously this just tastes like butter", Link: "https://www.foodnetwork.com/recipes/tyler-florence/roasted-tomato-soup-recipe-1917339" },
        "Sausage and Kale Cassoulet": { Servings: "4", Calories: "339", ProteinGrams: "25", FatGrams: "5", CarbsGrams: "47", Meal: "Soup", Cuisine: "European", Protein: "Sausage", Notes: "None", Link: "http://www.budgetbytes.com/2012/12/sausage-kale-cassoulet/" },
        "Sausage and Mushroom Bread Pudding": { Servings: "12", Calories: "408", ProteinGrams: "21", FatGrams: "25", CarbsGrams: "23", Meal: "Entree", Cuisine: "American", Protein: "Sausage", Notes: "None", Link: "http://www.bakersroyale.com/sausage-and-mushroom-bread-pudding/" },
        "Sausage and Mushroom Pasta": { Servings: "8", Calories: "359", ProteinGrams: "14", FatGrams: "11", CarbsGrams: "54", Meal: "Entree", Cuisine: "Italian", Protein: "Sausage", Notes: "None", Link: "http://www.budgetbytes.com/2014/04/one-pot-sausage-mushroom-pasta/" },
        "Sausage and Tortelloni Soup": { Servings: "6", Calories: "231", ProteinGrams: "18", FatGrams: "9", CarbsGrams: "20", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage", Notes: "None", Link: "https://www.budgetbytes.com/2017/10/sausage-tortellini-soup/" },
        "Sausage-stuffed zuchini boats": { Servings: "2.5", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "Italian?", Protein: "Sausage", Notes: "I used all sweet sausage and wish I had more mozz (less parm and crumbs)", Link: "http://www.foodnetwork.com/recipes/nancy-fuller/sausage-stuffed-zucchini-boats.html" },
        "Sauteed Cabbage and Kielbasa": { Servings: "4", Calories: "381", ProteinGrams: "21", FatGrams: "18", CarbsGrams: "20", Meal: "Entree", Cuisine: "European", Protein: "Sausage", Notes: "None", Link: "https://www.saltandlavender.com/sauteed-cabbage-kielbasa/" },
        "Savory Slow Cooker Brisket": { Servings: "10", Calories: "366", ProteinGrams: "24", FatGrams: "26", CarbsGrams: "7", Meal: "Protein", Cuisine: "American", Protein: "Beef", Notes: "based on 10 servings of meat, 3.5lb of brisket", Link: "https://toriavey.com/toris-kitchen/savory-slow-cooker-brisket/" },
        "Sesame Soba Noodles with Collard Greens and Tempeh Croutons": { Servings: "6", Calories: "410", ProteinGrams: "18", FatGrams: "28", CarbsGrams: "21", Meal: "Entree", Cuisine: "Asian", Protein: "Tempeh", Notes: "None", Link: "http://www.vegkitchen.com/recipes/sesame-soba-noodles-with-collard-greens-and-tempeh-croutons/" },
        "Shakshuka": { Servings: "1", Calories: "227", ProteinGrams: "12", FatGrams: "14", CarbsGrams: "17", Meal: "Breakfast", Cuisine: "Middle Eastern", Protein: "Eggs", Notes: "warning: this meal takes 30 minutes to cook even though it's eggs", Link: "http://allrecipes.com/recipe/190276/easy-shakshuka/" },
        "Shawarma-Spiced Grilled Chicken with Garlic Yogurt": { Servings: "4", Calories: "205", ProteinGrams: "28", FatGrams: "8", CarbsGrams: "10", Meal: "Protein", Cuisine: "Mediterranean", Protein: "Chicken breast", Notes: "None", Link: "https://www.skinnytaste.com/shawarma-spiced-grilled-chicken-with-garlic-yogurt/" },
        "Sheet Pan Pork Chop Supper": { Servings: "4", Calories: "454", ProteinGrams: "50", FatGrams: "24", CarbsGrams: "19", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "https://nomnompaleo.com/sheet-pan-pork-chop-supper" },
        "Simple Baked Chicken Drumsticks": { Servings: "4", Calories: "206", ProteinGrams: "20", FatGrams: "14", CarbsGrams: "1", Meal: "Entree", Cuisine: "American", Protein: "Chicken wings", Notes: "None", Link: "http://www.food.com/recipe/simple-baked-chicken-drumsticks-443758" },
        "Simple Herb Mushroom Barley Salad": { Servings: "4", Calories: "314", ProteinGrams: "10", FatGrams: "9", CarbsGrams: "50", Meal: "Entree", Cuisine: "American", Protein: "Barley", Notes: "Barley is so good here!!!", Link: "http://www.cookingmaniac.com/simple-herb-mushroom-barley-salad/" },
        "Simple Perfect Enchiladas": { Servings: "5", Calories: "347", ProteinGrams: "20", FatGrams: "18", CarbsGrams: "23", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://www.foodnetwork.com/recipes/ree-drummond/simple-perfect-enchiladas-recipe0" },
        "Simple Tomato Cucumber Salad": { Servings: "4", Calories: "165", ProteinGrams: "2", FatGrams: "14", CarbsGrams: "6", Meal: "Side", Cuisine: "Mediterranean", Protein: "None", Notes: "None", Link: "https://www.budgetbytes.com/2015/08/simple-tomato-cucumber-salad/" },
        "Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta ": { Servings: "4", Calories: "355", ProteinGrams: "12", FatGrams: "12", CarbsGrams: "54", Meal: "Entree", Cuisine: "Mediterranean", Protein: "Nuts", Notes: "None", Link: "https://www.budgetbytes.com/2017/05/skillet-pasta-sun-dried-tomatoes-walnuts-feta/" },
        "Skillet Sicilian Chicken": { Servings: "5", Calories: "384", ProteinGrams: "21", FatGrams: "32", CarbsGrams: "5", Meal: "Protein", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://www.delish.com/cooking/recipe-ideas/recipes/a46330/skillet-sicilian-chicken-recipe/" },
        "Skillet Steak with Onions and Mushrooms": { Servings: "4", Calories: "124", ProteinGrams: "14", FatGrams: "5", CarbsGrams: "4", Meal: "Protein", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "http://www.skinnytaste.com/quick-skillet-steak-with-onions-and/" },
        "Skinny Balsamic Vinaigrette": { Servings: "5", Calories: "97", ProteinGrams: "0", FatGrams: "8", CarbsGrams: "6", Meal: "Condiment", Cuisine: "Italian", Protein: "None", Notes: "a go to of mine!", Link: "http://www.theskinnyfork.com/blog/skinny-balsamic-vinaigrette" },
        "Skinny Cheeseburger Casserole": { Servings: "6", Calories: "377", ProteinGrams: "30", FatGrams: "14", CarbsGrams: "38", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "https://www.delish.com/cooking/recipe-ideas/recipes/a54334/skinny-cheeseburger-casserole-recipe/" },
        "Slow Cooker 5 spice pulled pork": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "http://www.budgetbytes.com/2016/09/slow-cooker-5-spice-pulled-pork/" },
        "Slow Cooker Beef and Pepper Soup": { Servings: "4", Calories: "372", ProteinGrams: "41", FatGrams: "10", CarbsGrams: "29", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "https://paleoleap.com/slow-cooker-beef-pepper-soup/" },
        "Slow Cooker Beef Stew": { Servings: "8", Calories: "431", ProteinGrams: "16", FatGrams: "15", CarbsGrams: "32", Meal: "Soup", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "http://www.myrecipes.com/recipe/slow-cooker-beef-stew-2" },
        "Slow Cooker Carnitas": { Servings: "8", Calories: "411", ProteinGrams: "37", FatGrams: "28", CarbsGrams: "2", Meal: "Protein", Cuisine: "Mexican", Protein: "Pork", Notes: "None", Link: "http://www.skinnytaste.com/2010/03/mexican-slow-cooked-pork-carnitas.html" },
        "Slow Cooker Cashew Chicken": { Servings: "5", Calories: "451", ProteinGrams: "50", FatGrams: "21", CarbsGrams: "13", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None", Link: "https://www.asweetpeachef.com/slow-cooker-cashew-chicken/" },
        "Slow Cooker Cheater Pork Stew": { Servings: "8", Calories: "458", ProteinGrams: "45", FatGrams: "28", CarbsGrams: "16", Meal: "Soup", Cuisine: "American", Protein: "Pork", Notes: "None", Link: "http://nomnompaleo.com/post/8425643634/slow-cooker-cheater-pork-stew" },
        "Slow Cooker Cheeseburger Soup": { Servings: "5", Calories: "314", ProteinGrams: "30", FatGrams: "15", CarbsGrams: "12", Meal: "Soup", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "http://passionatepennypincher.com/2014/01/skinny-slow-cooker-cheeseburger-soup/" },
        "Slow Cooker Cheesy Enchilada Meatballs": { Servings: "6", Calories: "443", ProteinGrams: "39", FatGrams: "21", CarbsGrams: "23", Meal: "Protein", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://tornadoughalli.com/2016/10/slow-cooker-cheesy-enchilada-meatballs-southwest-potato-skins/" },
        "Slow Cooker Chicken Cauliflower Curry": { Servings: "6", Calories: "350", ProteinGrams: "35", FatGrams: "16", CarbsGrams: "19", Meal: "Entree", Cuisine: "Indian", Protein: "Chicken breast", Notes: "None", Link: "https://www.asweetpeachef.com/slow-cooker-chicken-cauliflower-curry/" },
        "Slow Cooker Chicken Tortilla Soup": { Servings: "6", Calories: "346", ProteinGrams: "36", FatGrams: "9", CarbsGrams: "28", Meal: "Soup", Cuisine: "Mexican", Protein: "Chicken breast, thigh", Notes: "None", Link: "https://www.asweetpeachef.com/slow-cooker-chicken-tortilla-soup/" },
        "Slow Cooker Cilantro Lime Chicken Tacos": { Servings: "8", Calories: "435", ProteinGrams: "32", FatGrams: "10", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Chicken breast", Notes: "None", Link: "https://sweetpeasandsaffron.com/slow-cooker-cilantro-lime-chicken-tacos-freezer-slow-cooker/" },
        "Slow Cooker Coconut Curry Lentils": { Servings: "10", Calories: "179", ProteinGrams: "6", FatGrams: "7", CarbsGrams: "23", Meal: "Protein", Cuisine: "Indian", Protein: "Lentils", Notes: "None", Link: "http://www.budgetbytes.com/2016/07/slow-cooker-coconut-curry-lentils/" },
        "Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms": { Servings: "8", Calories: "370", ProteinGrams: "6", FatGrams: "27", CarbsGrams: "20", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://www.halfbakedharvest.com/slow-cooker-creamy-wild-rice-soup-with-butter-roasted-mushrooms/" },
        "Slow Cooker Enchilada Quinoa": { Servings: "6", Calories: "425", ProteinGrams: "16", FatGrams: "17", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans, quinoa", Notes: "None", Link: "https://www.lecremedelacrumb.com/slow-cooker-enchilada-quinoa" },
        "Slow Cooker Italian Meatballs": { Servings: "8", Calories: "399", ProteinGrams: "32", FatGrams: "20", CarbsGrams: "23", Meal: "Protein", Cuisine: "Italian", Protein: "Ground beef", Notes: "None", Link: "http://chefsavvy.com/slow-cooker-italian-meatballs/" },
        "Slow Cooker Lemon Garlic Chicken Thighs": { Servings: "5", Calories: "323", ProteinGrams: "25", FatGrams: "4", CarbsGrams: "10", Meal: "Entree", Cuisine: "American", Protein: "Chicken thigh", Notes: "None", Link: "https://sweetpeasandsaffron.com/slow-cooker-lemon-garlic-chicken-thighs-freezer-to-crock-pot/" },
        "Slow Cooker Mediterranean Chicken & Orzo": { Servings: "4", Calories: "272", ProteinGrams: "28", FatGrams: "5", CarbsGrams: "31", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://www.eatingwell.com/recipe/262157/slow-cooker-mediterranean-chicken-orzo/" },
        "Slow Cooker Mushroom Barley Risotto": { Servings: "4", Calories: "425", ProteinGrams: "13", FatGrams: "8", CarbsGrams: "71", Meal: "Entree", Cuisine: "Italian", Protein: "Barley", Notes: "None", Link: "http://www.foodnetwork.com/recipes/food-network-kitchen/slow-cooker-mushroom-barley-risotto-recipe-2112040" },
        "Slow Cooker Peanut Butter Chicken": { Servings: "4", Calories: "336", ProteinGrams: "35", FatGrams: "17", CarbsGrams: "13", Meal: "Entree", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://www.wholesomelicious.com/slow-cooker-peanut-butter-chicken/" },
        "Slow Cooker Poblano Turkey Chili": { Servings: "6", Calories: "383", ProteinGrams: "35", FatGrams: "3", CarbsGrams: "56", Meal: "Soup", Cuisine: "American", Protein: "Ground turkey", Notes: "The poblano is soooo good.", Link: "https://well-fedsoul.com/slow-cooker-poblano-turkey-chili/" },
        "Slow Cooker Roast": { Servings: "6", Calories: "381", ProteinGrams: "40", FatGrams: "12", CarbsGrams: "28", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "https://www.recipesthatcrock.com/best-ever-slow-cooker-roast/" },
        "Slow Cooker Sausage and White Bean Soup": { Servings: "6", Calories: "305", ProteinGrams: "22", FatGrams: "9", CarbsGrams: "33", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage", Notes: "warm and delicious", Link: "https://www.delish.com/cooking/recipe-ideas/recipes/a58390/slow-cooker-sausage-and-white-bean-soup-recipe/" },
        "Slow Cooker Thai Green Curry with Chicken": { Servings: "5", Calories: "360", ProteinGrams: "43", FatGrams: "13", CarbsGrams: "14", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None", Link: "https://blog.bedbathandbeyond.com/bbb-recipe/slow-cooker-thai-green-curry-recipe-with-chicken/" },
        "Slow Cooker Tofu Tikka Masala": { Servings: "4", Calories: "383", ProteinGrams: "14", FatGrams: "23", CarbsGrams: "26", Meal: "Entree", Cuisine: "Indian", Protein: "Tofu", Notes: "this tastes weird...", Link: "https://yupitsvegan.com/slow-cooker-tofu-tikka-masala/" },
        "Slow Cooker White Chicken Chili": { Servings: "6", Calories: "202", ProteinGrams: "21", FatGrams: "3", CarbsGrams: "20", Meal: "Soup", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "https://sweetpeasandsaffron.com/healthy-slow-cooker-white-chicken-chili-assemble-ahead/" },
        "Southwest Black Beans Polenta Casserole": { Servings: "6", Calories: "406", ProteinGrams: "17", FatGrams: "20", CarbsGrams: "46", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "https://www.cottercrunch.com/southwest-black-beans-polenta-casserole/" },
        "Southwest Salad with Taco Ranch Dressing": { Servings: "5", Calories: "410", ProteinGrams: "16", FatGrams: "20", CarbsGrams: "44", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "if you're going to make it in a mason jar, keep the dressing separate", Link: "https://www.budgetbytes.com/2012/04/southwest-salad-with-taco-ranch-dressing/" },
        "Southwestern Veggie-Packed Tater Tot Casserole": { Servings: "8", Calories: "408", ProteinGrams: "14", FatGrams: "16", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "https://tasty.co/recipe/southwestern-veggie-packed-tater-tot-casserole" },
        "Spicy Black Bean Burgers": { Servings: "4", Calories: "202", ProteinGrams: "13", FatGrams: "3", CarbsGrams: "35", Meal: "Protein", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://www.skinnytaste.com/spicy-black-bean-burgers-with-chipotle/" },
        "Spicy California Shrimp Stack": { Servings: "4", Calories: "289", ProteinGrams: "11", FatGrams: "19", CarbsGrams: "22", Meal: "Entree", Cuisine: "Asian", Protein: "Shrimp", Notes: "None", Link: "http://www.skinnytaste.com/2015/10/spicy-california-shrimp-stack.html" },
        "Spicy Fish Taco Bowls": { Servings: "4", Calories: "357", ProteinGrams: "20", FatGrams: "12", CarbsGrams: "44", Meal: "Entree", Cuisine: "Mexican", Protein: "Fish", Notes: "None", Link: "https://www.jocooks.com/type/healthy-eating/spicy-fish-taco-bowls/" },
        "Spicy Sausage and Cabbage Soup": { Servings: "7", Calories: "315", ProteinGrams: "14", FatGrams: "22", CarbsGrams: "15", Meal: "Soup", Cuisine: "American", Protein: "Sausage", Notes: "None", Link: "http://www.food.com/recipe/spicy-sausage-cabbage-soup-351582" },
        "Spicy Shrimp & Tomato Pasta": { Servings: "4", Calories: "314", ProteinGrams: "17", FatGrams: "12", CarbsGrams: "36", Meal: "Entree", Cuisine: "Italian", Protein: "Shrimp", Notes: "can add protein with cottage cheese", Link: "http://www.budgetbytes.com/2013/07/spicy-shrimp-tomato-pasta/" },
        "Spicy Tuna Cakes": { Servings: "12", Calories: "98", ProteinGrams: "9", FatGrams: "4", CarbsGrams: "13", Meal: "Protein", Cuisine: "American", Protein: "Fish", Notes: "None", Link: "http://nomnompaleo.com/post/91332244628/spicy-tuna-cakes" },
        "Spicy Vegan Cream of Corn Soup": { Servings: "3", Calories: "469", ProteinGrams: "9", FatGrams: "37", CarbsGrams: "27", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None", Link: "https://www.cottercrunch.com/vegan-spicy-cream-of-corn-soup-blender/" },
        "Spinach Tortellini Soup": { Servings: "7", Calories: "356", ProteinGrams: "15", FatGrams: "17", CarbsGrams: "35", Meal: "Soup", Cuisine: "Italian", Protein: "Cheese", Notes: "So. easy.", Link: "http://www.budgetbytes.com/2012/09/spinach-tortellini-soup/" },
        "Spinach, Mushroom, and Feta Crustless Quiche": { Servings: "4", Calories: "233", ProteinGrams: "19", FatGrams: "14", CarbsGrams: "7", Meal: "Breakfast", Cuisine: "Mediterranean", Protein: "Eggs", Notes: "None", Link: "http://www.budgetbytes.com/2011/11/spinach-mushroom-feta-crustless-quiche/" },
        "Spinach. Artichoke. and Feta Breakfast Bake": { Servings: "6", Calories: "292", ProteinGrams: "21", FatGrams: "19", CarbsGrams: "10", Meal: "Breakfast", Cuisine: "Mediterranean", Protein: "Eggs, sausage", Notes: "Calories include 1/2 container of breakfast sausage", Link: "http://www.skinnytaste.com/spinach-artichoke-and-feta-breakfast/" },
        "Sriracha Chickpea Salad Wraps": { Servings: "2", Calories: "484", ProteinGrams: "21", FatGrams: "8", CarbsGrams: "83", Meal: "Sandwich", Cuisine: "Mediterranean", Protein: "Chickpeas", Notes: "calories calculated using greek yogurt instead of mayo", Link: "https://www.budgetbytes.com/sriracha-chickpea-salad-wraps/" },
        "Steak Kebabs with Chimichurri": { Servings: "3", Calories: "364", ProteinGrams: "42", FatGrams: "23", CarbsGrams: "7", Meal: "Entree", Cuisine: "American", Protein: "Beef", Notes: "None", Link: "https://www.skinnytaste.com/steak-kebabs-with-chimichurri/" },
        "Stewed Tofu with Corn and Tomatoes": { Servings: "4", Calories: "302", ProteinGrams: "13", FatGrams: "13", CarbsGrams: "59", Meal: "Entree", Cuisine: "American", Protein: "Tofu", Notes: "really simple, delicious especially in the summer", Link: "http://www.vegkitchen.com/recipes/stewed-tofu-with-corn-and-tomatoes/" },
        "Stir-Fried Chicken with Bok Choy": { Servings: "4", Calories: "321", ProteinGrams: "26", FatGrams: "10", CarbsGrams: "34", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken breast", Notes: "None", Link: "http://www.marthastewart.com/897967/stir-fried-chicken-bok-choy" },
        "Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions": { Servings: "4", Calories: "224", ProteinGrams: "11", FatGrams: "12", CarbsGrams: "16", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None", Link: "http://www.epicurious.com/recipes/food/views/stir-fried-tofu-with-mushrooms-sugar-snap-peas-and-green-onions-109075" },
        "Stovetop Red Beans and Rice": { Servings: "6", Calories: "314", ProteinGrams: "29", FatGrams: "3", CarbsGrams: "68", Meal: "Entree", Cuisine: "Southern", Protein: "Beans, sausage", Notes: "None", Link: "http://www.myrecipes.com/recipe/stovetop-red-beans-rice" },
        "Stuffed Buffalo Chicken Breasts": { Servings: "5", Calories: "233", ProteinGrams: "23", FatGrams: "11", CarbsGrams: "10", Meal: "Protein", Cuisine: "American", Protein: "Chicken breast", Notes: "None", Link: "http://www.skinnytaste.com/stuffed-buffalo-chicken-breasts/" },
        "Stuffed Eggplant": { Servings: "4", Calories: "497", ProteinGrams: "30", FatGrams: "28", CarbsGrams: "38", Meal: "Entree", Cuisine: "Italian", Protein: "Ground beef", Notes: "None", Link: "http://www.foodnetwork.com/recipes/michael-chiarello/moms-stuffed-eggplant-recipe.html" },
        "Stuffed Peppers with Corn, Black Beans, and Pepper Jack": { Servings: "4", Calories: "382", ProteinGrams: "21", FatGrams: "11", CarbsGrams: "60", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://www.delish.com/cooking/recipe-ideas/recipes/a43193/stuffed-peppers-corn-black-beans-pepperjack-recipe/" },
        "Stuffed Tomatoes": { Servings: "6", Calories: "291", ProteinGrams: "24", FatGrams: "12", CarbsGrams: "23", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "make sure you get large tomatoes!", Link: "http://www.goodhousekeeping.com/food-recipes/a9456/stuffed-tomatoes-lean-ground-beef-recipe/" },
        "Summer Slaw": { Servings: "6", Calories: "135", ProteinGrams: "2", FatGrams: "9", CarbsGrams: "10", Meal: "Side", Cuisine: "American", Protein: "None", Notes: "None", Link: "http://paleomg.com/summer-slaw/" },
        "Summer Squash and Corn Chowder": { Servings: "6", Calories: "344", ProteinGrams: "12", FatGrams: "16", CarbsGrams: "40", Meal: "Soup", Cuisine: "Southern", Protein: "None", Notes: "None", Link: "https://www.cookingclassy.com/summer-squash-corn-chowder/" },
        "Sweet Potato and Poblano Pepper Soup": { Servings: "6", Calories: "170", ProteinGrams: "13", FatGrams: "12", CarbsGrams: "15", Meal: "Soup", Cuisine: "American", Protein: "None", Notes: "None", Link: "https://nourishedkitchen.com/sweet-potato-poblano-pepper-soup/" },
        "Taco Soup": { Servings: "6", Calories: "321", ProteinGrams: "23", FatGrams: "7", CarbsGrams: "39", Meal: "Soup", Cuisine: "Mexican", Protein: "Ground beef", Notes: "more of a stew than a soup", Link: "http://www.food.com/recipe/taco-soup-81029" },
        "Tamale Pie": { Servings: "6", Calories: "470", ProteinGrams: "26", FatGrams: "28", CarbsGrams: "27", Meal: "Entree", Cuisine: "Mexican", Protein: "Ground beef", Notes: "None", Link: "http://www.2teaspoons.com/tamale-pie/" },
        "Tex-Mex Breakfast Casserole": { Servings: "10", Calories: "281", ProteinGrams: "21", FatGrams: "27", CarbsGrams: "12", Meal: "Breakfast", Cuisine: "Mexican", Protein: "Eggs, beans", Notes: "None", Link: "https://www.skinnytaste.com/tex-mex-breakfast-casserole/" },
        "Thai Coconut Curry Braised Chicken Thighs": { Servings: "5", Calories: "373", ProteinGrams: "18", FatGrams: "10", CarbsGrams: "50", Meal: "Entree", Cuisine: "Asian", Protein: "Chicken thighs", Notes: "None", Link: "http://www.budgetbytes.com/2016/05/thai-coconut-curry-braised-chicken-thighs/comment-page-1/#comments" },
        "Thai Coconut Curry Butternut Squash Soup": { Servings: "4", Calories: "306", ProteinGrams: "6", FatGrams: "21", CarbsGrams: "25", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None", Link: "http://hostthetoast.com/thai-coconut-curry-butternut-squash-soup/" },
        "Thai Coconut Soup": { Servings: "4", Calories: "225", ProteinGrams: "3", FatGrams: "7", CarbsGrams: "38", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None", Link: "https://choosingchia.com/northern-style-vegan-thai-coconut-soup/" },
        "Thai Curry Vegetable Soup": { Servings: "4", Calories: "368", ProteinGrams: "4", FatGrams: "23", CarbsGrams: "35", Meal: "Soup", Cuisine: "Asian", Protein: "None", Notes: "None", Link: "http://www.budgetbytes.com/2016/03/thai-curry-vegetable-soup/" },
        "Thai Meatball and Egg Drop Soup": { Servings: "4", Calories: "340", ProteinGrams: "30", FatGrams: "17", CarbsGrams: "11", Meal: "Soup", Cuisine: "Asian", Protein: "Ground turkey", Notes: "None", Link: "https://www.asaucykitchen.com/thai-meatball-and-egg-drop-soup/" },
        "Thai Red Curry with Vegetables": { Servings: "4", Calories: "519", ProteinGrams: "16", FatGrams: "25", CarbsGrams: "58", Meal: "Entree", Cuisine: "Asian", Protein: "Tofu", Notes: "None", Link: "http://cookieandkate.com/2015/thai-red-curry-recipe/" },
        "The Great Big Vegan Salad": { Servings: "5", Calories: "426", ProteinGrams: "24", FatGrams: "18", CarbsGrams: "49", Meal: "Entree", Cuisine: "American", Protein: "Lentils, tempeh", Notes: "Think about your ingredients... the one we made was not good.", Link: "https://www.delishknowledge.com/the-great-big-vegan-salad/" },
        "Tofu Broccoli Stir fry": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "", Cuisine: "Asian", Protein: "Tofu", Notes: "This is like really good", Link: "https://www.budgetbytes.com/2016/02/pan-fried-sesame-tofu-with-broccoli/" },
        "Tofu Parmigiana": { Servings: "4", Calories: "229", ProteinGrams: "16", FatGrams: "11", CarbsGrams: "17", Meal: "Entree", Cuisine: "Italian", Protein: "Tofu", Notes: "Hard to make it so the breading doesn't just fall off", Link: "http://www.eatingwell.com/recipes/tofu_parmigiana.html" },
        "Tofu Steaks": { Servings: "3", Calories: "233", ProteinGrams: "18", FatGrams: "12", CarbsGrams: "16", Meal: "Protein", Cuisine: "Asian", Protein: "tofu", Notes: "None", Link: "https://www.reddit.com/r/MealPrepSunday/comments/6a84wj/tofu_steaks_white_rice_and_roasted_veggies/dhdrjx8/" },
        "Tomato Dijon Turkey Meatballs": { Servings: "4", Calories: "220", ProteinGrams: "40", FatGrams: "2", CarbsGrams: "5", Meal: "Protein", Cuisine: "Italian", Protein: "Ground turkey", Notes: "None", Link: "http://peaceloveandlowcarb.com/tomato-dijon-turkey-meatballs/" },
        "Turkey Meatball Stroganoff": { Servings: "4", Calories: "286", ProteinGrams: "28", FatGrams: "13", CarbsGrams: "17", Meal: "Entree", Cuisine: "European", Protein: "Ground turkey", Notes: "None", Link: "http://www.skinnytaste.com/turkey-meatball-stroganoff-instant-pot-slow-cooker-or-stove-top/" },
        "Umbrian-Style Chicken": { Servings: "", Calories: "", ProteinGrams: "", FatGrams: "", CarbsGrams: "", Meal: "Entree", Cuisine: "Italian", Protein: "Chicken breast", Notes: "None", Link: "http://cooking.nytimes.com/recipes/1018267-umbrian-style-chicken-alla-cacciatora" },
        "Unstuffed Bell Peppers": { Servings: "6", Calories: "296", ProteinGrams: "13", FatGrams: "10", CarbsGrams: "40", Meal: "Entree", Cuisine: "American", Protein: "Ground beef", Notes: "None", Link: "http://www.budgetbytes.com/2014/08/unstuffed-bell-peppers/" },
        "Vegan Buddha Bowl": { Servings: "4", Calories: "497", ProteinGrams: "18", FatGrams: "28", CarbsGrams: "56", Meal: "Entree", Cuisine: "American", Protein: "Tofu", Notes: "calculated without avocado", Link: "https://lovingitvegan.com/vegan-buddha-bowl/" },
        "Vegan Coconut Curry Lentil Soup": { Servings: "6", Calories: "332", ProteinGrams: "14", FatGrams: "13", CarbsGrams: "38", Meal: "Soup", Cuisine: "Indian", Protein: "Lentils", Notes: "None", Link: "http://vegangela.com/2014/01/09/coconut-curry-lentil-soup/" },
        "Vegan Tacos": { Servings: "6", Calories: "301", ProteinGrams: "12", FatGrams: "12", CarbsGrams: "38", Meal: "Entree", Cuisine: "Mexican", Protein: "Soy", Notes: "None", Link: "https://www.bonappetit.com/recipe/vegan-tacos" },
        "Vegan Winter Lentil Stew": { Servings: "6", Calories: "313", ProteinGrams: "11", FatGrams: "7", CarbsGrams: "59", Meal: "Soup", Cuisine: "American", Protein: "Lentils", Notes: "hearty af", Link: "https://www.budgetbytes.com/vegan-winter-lentil-stew/" },
        "Vegetable Enchilada Casserole": { Servings: "6", Calories: "379", ProteinGrams: "15", FatGrams: "16", CarbsGrams: "49", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://www.budgetbytes.com/2015/10/vegetable-enchilada-casserole/" },
        "Weeknight Enchiladas": { Servings: "6", Calories: "444", ProteinGrams: "26", FatGrams: "22", CarbsGrams: "66", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "http://www.budgetbytes.com/2016/01/weeknight-enchiladas/" },
        "White Bean, Spinach, & Turkey Stuffed Bell Peppers": { Servings: "6", Calories: "361", ProteinGrams: "25", FatGrams: "12", CarbsGrams: "38", Meal: "Entree", Cuisine: "Italian", Protein: "Beans, ground turkey", Notes: "None", Link: "https://www.ambitiouskitchen.com/white-bean-spinach-turkey-stuffed-bell-peppers-with-burrata" },
        "White Chili": { Servings: "5", Calories: "326", ProteinGrams: "19", FatGrams: "19", CarbsGrams: "17", Meal: "Entree", Cuisine: "American", Protein: "Ground pork", Notes: "Pork is good for this! (Also good with ground turkey)", Link: "http://allrecipes.com/recipe/12897/white-chili-i/" },
        "Whole-Grain Veggie Burrito Bowl": { Servings: "4", Calories: "394", ProteinGrams: "15", FatGrams: "19", CarbsGrams: "53", Meal: "Entree", Cuisine: "Mexican", Protein: "Beans", Notes: "None", Link: "https://www.myrecipes.com/recipe/whole-grain-veggie-burrito-bowl" },
        "Will it Skillet? Mac & Cheese": { Servings: "6", Calories: "274", ProteinGrams: "13", FatGrams: "14", CarbsGrams: "28", Meal: "Side", Cuisine: "American", Protein: "Cheese", Notes: "small portion!", Link: "https://www.budgetbytes.com/will-skillet-mac-cheese/" },
        "Yassa Poulet": { Servings: "6", Calories: "459", ProteinGrams: "26", FatGrams: "30", CarbsGrams: "17", Meal: "Entree", Cuisine: "African", Protein: "Chicken wings", Notes: "None", Link: "https://www.saveur.com/article/Recipes/Yassa-Poulet-Grilled-Chicken-Caramelized-Onion" },
        "Zucchini Cheddar Scones": { Servings: "8", Calories: "343", ProteinGrams: "8", FatGrams: "18", CarbsGrams: "37", Meal: "Bread", Cuisine: "American", Protein: "Cheese", Notes: "None", Link: "https://bakerbynature.com/zucchini-cheddar-scones/" },
        "Zuppa Toscana": { Servings: "6", Calories: "338", ProteinGrams: "19", FatGrams: "14", CarbsGrams: "38", Meal: "Soup", Cuisine: "Italian", Protein: "Sausage, beans", Notes: "so. tasty.", Link: "http://www.budgetbytes.com/2015/01/zuppa-toscana/" }
    }; //Currently Hardcoded in, connect to database once setup
    const [value, setValue] = React.useState("(Not) Refried Beans");
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    //Get the user's name from the previous page
    const location = useLocation()
    const userName = location.state && location.state.name ? location.state.name : '';

    return (
        <div>
            <label className="header">
                <h1>Recipe Selection:</h1>
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
            <label className="centered">
                <label className="macros">
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
                <p className="longdescription">Notes: {dict[value].Notes}</p>
                <p className="linkdescription">Link: <a href={dict[value].Link}>{dict[value].Link}</a></p>

            </label>
            <div className="button-div">
                {/* <a href="../home"><button id="back-to-home-btn">Back to Home</button></a> */}
                <Link to={{ pathname: '../home', state: useState }} ><button id="back-to-home-btn">Back to Home</button></Link>
            </div>

        </div>
    )
}

