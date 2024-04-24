// import React, {useRef, useState, useEffect} from 'react';
// import { Link, useLocation } from "react-router-dom";
// import Modal from 'react-modal';
// import Datetime from 'react-datetime';
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style/Home.css";
//
// export default function ({isOpen, onClose, onEventAdded}) {
//
//
//     const [meal, setMeal] = useState("");
//     const [date, setDate] = useState(new Date());
//
//     // Fetching user profile information from local storage or initializing it as an empty object
//     const userProfile = JSON.parse(localStorage.getItem("users")) || {};
//
//     // State to hold the user's name
//     const [email, setEmail] = useState(userProfile.email || "");
//
//     const onSubmit = (event) =>  {
//         event.preventDefault()
//
//         onEventAdded({
//             date
//         })
//
//         onClose()
//     }
//
//     async function submit(e) {
//       e.preventDefault();
//
//       try {
//           onClose();
//           const response = await axios.post("http://localhost:8000/home/schedule", {
//               email, date, meal
//           });
//
//
//       } catch (error) {
//           showErrorNotification("Something went wrong. Please try again.");
//           console.error(error);
//       }
//     }
//
//     function showErrorNotification(message) {
//       const notificationElement = document.createElement("div");
//       notificationElement.classList.add("error-notification");
//       notificationElement.textContent = message;
//       document.body.appendChild(notificationElement);
//       setTimeout(() => {
//           document.body.removeChild(notificationElement);
//       }, 5000);
//     }
//
//     return (
//         <Modal isOpen={isOpen} onRequestClose={onClose}>
//           <form onSubmit={onSubmit}>
//
//             <select type="meal" onChange={e => setMeal(e.target.value)} placeholder="Meal">
//
//             <option value="(Not) Refried Beans">(Not) Refried Beans</option>
//                     <option value="Almost Boston Market Creamed Spinach">Almost Boston Market Creamed Spinach</option>
//                     <option value="Apple Oat Greek Yogurt Muffins">Apple Oat Greek Yogurt Muffins</option>
//                     <option value="Asian Pork with Mushrooms">Asian Pork with Mushrooms</option>
//                     <option value="Baba Ganoush">Baba Ganoush</option>
//                     <option value="Bacon Cheeseburger Soup">Bacon Cheeseburger Soup</option>
//                     <option value="Bacon Parmesan Spaghetti Squash">Bacon Parmesan Spaghetti Squash</option>
//                     <option value="Bacon-wrapped Green Bean Bundles">Bacon-wrapped Green Bean Bundles</option>
//                     <option value="Bacon, Mushroom, and Spinach Quiche">Bacon, Mushroom, and Spinach Quiche</option>
//                     <option value="Bacon, Onion, and Brown Lentil Skillet">Bacon, Onion, and Brown Lentil Skillet</option>
//                     <option value="Baked Broccoli Macaroni and Cheese">Baked Broccoli Macaroni and Cheese</option>
//                     <option value="Baked Chicken Milanese with Arugula and Tomatoes">Baked Chicken Milanese with Arugula and Tomatoes</option>
//                     <option value="Baked Chicken Nuggets">Baked Chicken Nuggets</option>
//                     <option value="Baked Eggplant Parmesan Stacks">Baked Eggplant Parmesan Stacks</option>
//                     <option value="Baked Falafel Salad">Baked Falafel Salad</option>
//                     <option value="Baked Falafels">Baked Falafels</option>
//                     <option value="Baked Garlic Pork Tenderloin">Baked Garlic Pork Tenderloin</option>
//                     <option value="Baked Shrimp Taquitos">Baked Shrimp Taquitos</option>
//                     <option value="Beef and Mushroom Country Casserole">Beef and Mushroom Country Casserole</option>
//                     <option value="Beef and Mushroom Stroganoff over Creamy Polenta">Beef and Mushroom Stroganoff over Creamy Polenta</option>
//                     <option value="Beef Barley Soup">Beef Barley Soup</option>
//                     <option value="Beef Burgers with Jerk Onions and Cucumber Avocado Salad">Beef Burgers with Jerk Onions and Cucumber Avocado Salad</option>
//                     <option value="Beef Pot Roast">Beef Pot Roast</option>
//                     <option value="Beef Stew with Caramelized Onions and Red Wine">Beef Stew with Caramelized Onions and Red Wine</option>
//                     <option value="Black Bean Burger">Black Bean Burger</option>
//                     <option value="Black Bean Fiesta Mason Jar Salad">Black Bean Fiesta Mason Jar Salad</option>
//                     <option value="BLT and P Soup">BLT and P Soup</option>
//                     <option value="BLT Macaroni Salad">BLT Macaroni Salad</option>
//                     <option value="BLTA Pesto Chicken Salad">BLTA Pesto Chicken Salad</option>
//                     <option value="Blue Cheese Polenta with Vegetables">Blue Cheese Polenta with Vegetables</option>
//                     <option value="Brazilian Shrimp Soup">Brazilian Shrimp Soup</option>
//                     <option value="Broiled Tilapia Parmesan">Broiled Tilapia Parmesan</option>
//                     <option value="Cabbage Lasagna">Cabbage Lasagna</option>
//                     <option value="California Grilled Chicken">California Grilled Chicken</option>
//                     <option value="Caramelized Onion and Beef Loco Moco">Caramelized Onion and Beef Loco Moco</option>
//                     <option value="Caramelized Onion, Mushroom, and Swiss Stuffed Chicken">Caramelized Onion, Mushroom, and Swiss Stuffed Chicken</option>
//                     <option value="Cauliflower Pesto Crust Pizza">Cauliflower Pesto Crust Pizza</option>
//                     <option value="Cheese & Spinach Stuffed Portobellos">Cheese & Spinach Stuffed Portobellos</option>
//                     <option value="Cheesy Cauliflower and Potato Soup">Cheesy Cauliflower and Potato Soup</option>
//                     <option value="Cheesy Zucchini and Corn Fritters with Herb Sour Cream">Cheesy Zucchini and Corn Fritters with Herb Sour Cream</option>
//                     <option value="Chicken & Mushrooms in a Garlic White Wine Sauce">Chicken & Mushrooms in a Garlic White Wine Sauce</option>
//                     <option value="Chicken Alfredo with Broccoli">Chicken Alfredo with Broccoli</option>
//                     <option value="Chicken Club Avocado Boats">Chicken Club Avocado Boats</option>
//                     <option value="Chicken Gyro Bowls">Chicken Gyro Bowls</option>
//                     <option value="Chicken Helper">Chicken Helper</option>
//                     <option value="Chicken Panang Curry Noodle Bowls">Chicken Panang Curry Noodle Bowls</option>
//                     <option value="Chicken Parmesan Soup">Chicken Parmesan Soup</option>
//                     <option value="Chicken Pesto Bake">Chicken Pesto Bake</option>
//                     <option value="Chicken Pot Pie Soup">Chicken Pot Pie Soup</option>
//                     <option value="Chicken Rollatini with Spinach">Chicken Rollatini with Spinach</option>
//                     <option value="Chicken Spinach Soup">Chicken Spinach Soup</option>
//                     <option value="Chicken Tikka Masala">Chicken Tikka Masala</option>
//                     <option value="Chicken, Feta Cheese, and Sun-Dried Tomato Wraps">Chicken, Feta Cheese, and Sun-Dried Tomato Wraps</option>
//                     <option value="Chipotle Cheddar Cauliflower Black Bean Enchiladas">Chipotle Cheddar Cauliflower Black Bean Enchiladas</option>
//                     <option value="Chipotle Chicken Taco Salad">Chipotle Chicken Taco Salad</option>
//                     <option value="Chipotle Sofritas">Chipotle Sofritas</option>
//                     <option value="Chipotle-Lime Radish Salad">Chipotle-Lime Radish Salad</option>
//                     <option value="Chipotle-Spiced Beef and Bean Chili">Chipotle-Spiced Beef and Bean Chili</option>
//                     <option value="Chopped Chicken Sesame Noodle Bowls">Chopped Chicken Sesame Noodle Bowls</option>
//                     <option value="Chorizo Stuffed Poblano Peppers">Chorizo Stuffed Poblano Peppers</option>
//                     <option value="Chorizo Turkey Meatballs">Chorizo Turkey Meatballs</option>
//                     <option value="Cilantro-Lime Rice">Cilantro-Lime Rice</option>
//                     <option value="Classic Meatloaf">Classic Meatloaf</option>
//                     <option value="Coconut Red Curry with Tofu">Coconut Red Curry with Tofu</option>
//                     <option value="Corn Salsa">Corn Salsa</option>
//                     <option value="Cottage Cheese Biscuits">Cottage Cheese Biscuits</option>
//                     <option value="Creamy Cucumber and Tomato Salad">Creamy Cucumber and Tomato Salad</option>
//                     <option value="Creamy Garlic Mushroom Chicken">Creamy Garlic Mushroom Chicken</option>
//                     <option value="Creamy Garlic Mushroom Soup">Creamy Garlic Mushroom Soup</option>
//                     <option value="Creamy Lemon Dill Greek Pasta Salad">Creamy Lemon Dill Greek Pasta Salad</option>
//                     <option value="Creamy Mexican Slow Cooker Chicken">Creamy Mexican Slow Cooker Chicken</option>
//                     <option value="Creamy Sun-dried tomato & Parmesan Chicken Zoodles">Creamy Sun-dried tomato & Parmesan Chicken Zoodles</option>
//                     <option value="Creamy Three-Bean Stew">Creamy Three-Bean Stew</option>
//                     <option value="Crispy and Tender Baked Chicken Thighs">Crispy and Tender Baked Chicken Thighs</option>
//                     <option value="Crispy Baked Chicken Breasts">Crispy Baked Chicken Breasts</option>
//                     <option value="Crispy Chicken Thighs with Bacon and Wilted Escarole">Crispy Chicken Thighs with Bacon and Wilted Escarole</option>
//                     <option value="Crock Pot Beef Quinoa Stew">Crock Pot Beef Quinoa Stew</option>
//                     <option value="Crock Pot Breakfast Pie">Crock Pot Breakfast Pie</option>
//                     <option value="Crock Pot Carne Guisada">Crock Pot Carne Guisada</option>
//                     <option value="Crock Pot Chicken Cacciatore">Crock Pot Chicken Cacciatore</option>
//                     <option value="Crock Pot Chicken Enchilada Soup">Crock Pot Chicken Enchilada Soup</option>
//                     <option value="Crock Pot Chicken Gnocchi Soup">Crock Pot Chicken Gnocchi Soup</option>
//                     <option value="Crock Pot Chinese Beef and Broccoli">Crock Pot Chinese Beef and Broccoli</option>
//                     <option value="Crock Pot Corned Beef & Cabbage">Crock Pot Corned Beef & Cabbage</option>
//                     <option value="Crock Pot Picadillo">Crock Pot Picadillo</option>
//                     <option value="Cucumber Avocado Salad">Cucumber Avocado Salad</option>
//                     <option value="Cucumber-Dill Tzatziki">Cucumber-Dill Tzatziki</option>
//                     <option value="Curried Cauliflower Soup">Curried Cauliflower Soup</option>
//                     <option value="Curried Chickpeas with Spinach">Curried Chickpeas with Spinach</option>
//                     <option value="Curry Soup with Lentils and Potato">Curry Soup with Lentils and Potato</option>
//                     <option value="Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil">Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil</option>
//                     <option value="Easy Oven Fajitas">Easy Oven Fajitas</option>
//                     <option value="Easy Spinach Pie">Easy Spinach Pie</option>
//                     <option value="Eggplant and Tofu Curry">Eggplant and Tofu Curry</option>
//                     <option value="Eggplant Bruschetta">Eggplant Bruschetta</option>
//                     <option value="Eggplant Lasagna">Eggplant Lasagna</option>
//                     <option value="Fat Guacamole Devils">Fat Guacamole Devils</option>
//                     <option value="Food Cart-Style Chicken Salad with White Sauce">Food Cart-Style Chicken Salad with White Sauce</option>
//                     <option value="Fresh Raspberry Balsamic Vinaigrette">Fresh Raspberry Balsamic Vinaigrette</option>
//                     <option value="Fresh Tomato Basil Pasta with Ricotta">Fresh Tomato Basil Pasta with Ricotta</option>
//                     <option value="Garlic Cheddar Biscuits">Garlic Cheddar Biscuits</option>
//                     <option value="Garlic Green Beans">Garlic Green Beans</option>
//                     <option value="Garlic Roasted Cabbage Wedges">Garlic Roasted Cabbage Wedges</option>
//                     <option value="Geechigirl Crab Cakes">Geechigirl Crab Cakes</option>
//                     <option value="Granola Bars">Granola Bars</option>
//                     <option value="Greek Turkey Burgers">Greek Turkey Burgers</option>
//                     <option value="Greek Yogurt Pancakes">Greek Yogurt Pancakes</option>
//                     <option value="Grilled Corn and Poblano Salad">Grilled Corn and Poblano Salad</option>
//                     <option value="Grilled Steak with Tomatoes, Red Onion, and Balsamic">Grilled Steak with Tomatoes, Red Onion, and Balsamic</option>
//                     <option value="Harvest Roasted Vegetable Grain Bowl">Harvest Roasted Vegetable Grain Bowl</option>
//                     <option value="Healthier Stuffed Peppers">Healthier Stuffed Peppers</option>
//                     <option value="Healthy Freezer Breakfast Burritos">Healthy Freezer Breakfast Burritos</option>
//                     <option value="Healthy Mac and Cheese">Healthy Mac and Cheese</option>
//                     <option value="Hearty Lentil and Black Bean Soup">Hearty Lentil and Black Bean Soup</option>
//                     <option value="Herb Roasted Chicken Breasts">Herb Roasted Chicken Breasts</option>
//                     <option value="Indonesian Chicken">Indonesian Chicken</option>
//                     <option value="Israeli Couscous">Israeli Couscous</option>
//                     <option value="Italian Orzo Spinach Soup">Italian Orzo Spinach Soup</option>
//                     <option value="Italian Sausage Soup">Italian Sausage Soup</option>
//                     <option value="Jalapeno Popper Chicken Salad">Jalapeno Popper Chicken Salad</option>
//                     <option value="Jalapeno, Pepper Jack, and Turkey Bacon Quiche">Jalapeno, Pepper Jack, and Turkey Bacon Quiche</option>
//                     <option value="Kale and Cabbage Soup">Kale and Cabbage Soup</option>
//                     <option value="Korean Style Ground Beef and Spinach Rice Bowls">Korean Style Ground Beef and Spinach Rice Bowls</option>
//                     <option value="Lemon Chicken Orzo Soup">Lemon Chicken Orzo Soup</option>
//                     <option value="Lemon Tahini Salad Dressing">Lemon Tahini Salad Dressing</option>
//                     <option value="Lemon, Rice, and Chicken Soup">Lemon, Rice, and Chicken Soup</option>
//                     <option value="Lentil & Black Bean Soup">Lentil & Black Bean Soup</option>
//                     <option value="Lentil Dal with Hearty Greens">Lentil Dal with Hearty Greens</option>
//                     <option value="Light Balsamic Vinaigrette">Light Balsamic Vinaigrette</option>
//                     <option value="Light Mexican Casserole">Light Mexican Casserole</option>
//                     <option value="Loaded Potato Soup">Loaded Potato Soup</option>
//                     <option value="Lower-Fat Coleslaw">Lower-Fat Coleslaw</option>
//                     <option value="Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon">Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon</option>
//                     <option value="Marinated Baked Tofu">Marinated Baked Tofu</option>
//                     <option value="Matzo Ball Soup">Matzo Ball Soup</option>
//                     <option value="Mediterranean Hummus Bowls">Mediterranean Hummus Bowls</option>
//                     <option value="Mexican Casserole with Roasted Corn and Peppers">Mexican Casserole with Roasted Corn and Peppers</option>
//                     <option value="Mexican Pinto Bean Soup with Queso">Mexican Pinto Bean Soup with Queso</option>
//                     <option value="Mexican Taco Casserole Bake">Mexican Taco Casserole Bake</option>
//                     <option value="Mini Garden Turkey Loaves">Mini Garden Turkey Loaves</option>
//                     <option value="Moroccan Lentil and Vegetable Stew">Moroccan Lentil and Vegetable Stew</option>
//                     <option value="Moroccan Sweet Potato Lentil Soup">Moroccan Sweet Potato Lentil Soup</option>
//                     <option value="Mozzarella Chicken in Tomato Sauce">Mozzarella Chicken in Tomato Sauce</option>
//                     <option value="Mujaddara">Mujaddara</option>
//                     <option value="Mushroom and Spinach Lasagna">Mushroom and Spinach Lasagna</option>
//                     <option value="Mustard Cream Sauce for Haddock">Mustard Cream Sauce for Haddock</option>
//                     <option value="No Sugar Added Apple Pie Overnight Oats">No Sugar Added Apple Pie Overnight Oats</option>
//                     <option value="No-Cook BLT Salad">No-Cook BLT Salad</option>
//                     <option value="No-Noodle Zucchini Lasagna Recipe">No-Noodle Zucchini Lasagna Recipe</option>
//                     <option value="Oatmeal Cottage Cheese Pancakes">Oatmeal Cottage Cheese Pancakes</option>
//                     <option value="One Pan Cheesy Jalapeno Chicken">One Pan Cheesy Jalapeno Chicken</option>
//                     <option value="One Pot Cheesy Taco Orzo">One Pot Cheesy Taco Orzo</option>
//                     <option value="One Pot Creamy Cajun Chicken Pasta">One Pot Creamy Cajun Chicken Pasta</option>
//                     <option value="One Pot Sausage and Mushroom Pasta">One Pot Sausage and Mushroom Pasta</option>
//                     <option value="One Pot Sausage and Sun Dried Tomato Pasta">One Pot Sausage and Sun Dried Tomato Pasta</option>
//                     <option value="One Pot Unstuffed Cabbage Rolls">One Pot Unstuffed Cabbage Rolls</option>
//                     <option value="Orange Tofu Chickpea Bowls">Orange Tofu Chickpea Bowls</option>
//                     <option value="Paleo Meatloaf with Bacon and Balsamic Onions">Paleo Meatloaf with Bacon and Balsamic Onions</option>
//                     <option value="Pan-Toasted Sweet Corn with Wilted Chard and Black Beans">Pan-Toasted Sweet Corn with Wilted Chard and Black Beans</option>
//                     <option value="Parmesan and Peppercorn Ranch Dressing">Parmesan and Peppercorn Ranch Dressing</option>
//                     <option value="Parmesan Basil Tomato Soup">Parmesan Basil Tomato Soup</option>
//                     <option value="Parmesan Garlic Spaghetti Squash">Parmesan Garlic Spaghetti Squash</option>
//                     <option value="Pasta Salad with Creamy Chipotle Dressing">Pasta Salad with Creamy Chipotle Dressing</option>
//                     <option value="Pasta Salad with Sausage and Arugula">Pasta Salad with Sausage and Arugula</option>
//                     <option value="Pasta with Butternut Sauce, Sausage, and Spinach">Pasta with Butternut Sauce, Sausage, and Spinach</option>
//                     <option value="Peanut Butter Marinated Chicken">Peanut Butter Marinated Chicken</option>
//                     <option value="Peanutty Quinoa Bowls with Baked Tofu">Peanutty Quinoa Bowls with Baked Tofu</option>
//                     <option value="Philly Cheesesteak Stuffed Portobello Mushrooms">Philly Cheesesteak Stuffed Portobello Mushrooms</option>
//                     <option value="Pico de Gallo">Pico de Gallo</option>
//                     <option value="Pork Chops and Couscous with Tomato-Caper Sauce">Pork Chops and Couscous with Tomato-Caper Sauce</option>
//                     <option value="Pork Egg Roll in a Bowl">Pork Egg Roll in a Bowl</option>
//                     <option value="Pork Gyoza">Pork Gyoza</option>
//                     <option value="Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables">Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables</option>
//                     <option value="Portobello Polenta Bowls">Portobello Polenta Bowls</option>
//                     <option value="Potato, Leek, and Corn Chowder">Potato, Leek, and Corn Chowder</option>
//                     <option value="Pozole Verde Chicken">Pozole Verde Chicken</option>
//                     <option value="Pulled Pork">Pulled Pork</option>
//                     <option value="Quick & Easy Mexican Chicken">Quick & Easy Mexican Chicken</option>
//                     <option value="Quinoa with Roasted Garlic and Potatoes">Quinoa with Roasted Garlic and Potatoes</option>
//                     <option value="Raita">Raita</option>
//                     <option value="Red Wine Vinaigrette">Red Wine Vinaigrette</option>
//                     <option value="Ricotta Goat Cheese Polenta Bake">Ricotta Goat Cheese Polenta Bake</option>
//                     <option value="Roasted Cabbage Wedges with Onion Dijon Sauce">Roasted Cabbage Wedges with Onion Dijon Sauce</option>
//                     <option value="Roasted Carrots">Roasted Carrots</option>
//                     <option value="Roasted Cauliflower and Chickpeas with Minted Yogurt">Roasted Cauliflower and Chickpeas with Minted Yogurt</option>
//                     <option value="Roasted Cauliflower Salad with Lemon Tahini Dressing">Roasted Cauliflower Salad with Lemon Tahini Dressing</option>
//                     <option value="Roasted Garlic Chicken Salad">Roasted Garlic Chicken Salad</option>
//                     <option value="Roasted Parmesan Broccoli">Roasted Parmesan Broccoli</option>
//                     <option value="Roasted Red Pepper and Garlic Soup">Roasted Red Pepper and Garlic Soup</option>
//                     <option value="Roasted Tomato Soup">Roasted Tomato Soup</option>
//                     <option value="Roasted Tomato Soup">Roasted Tomato Soup</option>
//                     <option value="Sausage and Kale Cassoulet">Sausage and Kale Cassoulet</option>
//                     <option value="Sausage and Mushroom Bread Pudding">Sausage and Mushroom Bread Pudding</option>
//                     <option value="Sausage and Mushroom Pasta">Sausage and Mushroom Pasta</option>
//                     <option value="Sausage and Tortelloni Soup">Sausage and Tortelloni Soup</option>
//                     <option value="Sausage-stuffed zuchini boats">Sausage-stuffed zuchini boats</option>
//                     <option value="Sauteed Cabbage and Kielbasa">Sauteed Cabbage and Kielbasa</option>
//                     <option value="Savory Slow Cooker Brisket">Savory Slow Cooker Brisket</option>
//                     <option value="Sesame Soba Noodles with Collard Greens and Tempeh Croutons">Sesame Soba Noodles with Collard Greens and Tempeh Croutons</option>
//                     <option value="Shakshuka">Shakshuka</option>
//                     <option value="Shawarma-Spiced Grilled Chicken with Garlic Yogurt">Shawarma-Spiced Grilled Chicken with Garlic Yogurt</option>
//                     <option value="Sheet Pan Pork Chop Supper">Sheet Pan Pork Chop Supper</option>
//                     <option value="Simple Baked Chicken Drumsticks">Simple Baked Chicken Drumsticks</option>
//                     <option value="Simple Herb Mushroom Barley Salad">Simple Herb Mushroom Barley Salad</option>
//                     <option value="Simple Perfect Enchiladas">Simple Perfect Enchiladas</option>
//                     <option value="Simple Tomato Cucumber Salad">Simple Tomato Cucumber Salad</option>
//                     <option value="Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta ">Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta </option>
//                     <option value="Skillet Sicilian Chicken">Skillet Sicilian Chicken</option>
//                     <option value="Skillet Steak with Onions and Mushrooms">Skillet Steak with Onions and Mushrooms</option>
//                     <option value="Skinny Balsamic Vinaigrette">Skinny Balsamic Vinaigrette</option>
//                     <option value="Skinny Cheeseburger Casserole">Skinny Cheeseburger Casserole</option>
//                     <option value="Slow Cooker 5 spice pulled pork">Slow Cooker 5 spice pulled pork</option>
//                     <option value="Slow Cooker Beef and Pepper Soup">Slow Cooker Beef and Pepper Soup</option>
//                     <option value="Slow Cooker Beef Stew">Slow Cooker Beef Stew</option>
//                     <option value="Slow Cooker Carnitas">Slow Cooker Carnitas</option>
//                     <option value="Slow Cooker Cashew Chicken">Slow Cooker Cashew Chicken</option>
//                     <option value="Slow Cooker Cheater Pork Stew">Slow Cooker Cheater Pork Stew</option>
//                     <option value="Slow Cooker Cheeseburger Soup">Slow Cooker Cheeseburger Soup</option>
//                     <option value="Slow Cooker Cheesy Enchilada Meatballs">Slow Cooker Cheesy Enchilada Meatballs</option>
//                     <option value="Slow Cooker Chicken Cauliflower Curry">Slow Cooker Chicken Cauliflower Curry</option>
//                     <option value="Slow Cooker Chicken Tortilla Soup">Slow Cooker Chicken Tortilla Soup</option>
//                     <option value="Slow Cooker Cilantro Lime Chicken Tacos">Slow Cooker Cilantro Lime Chicken Tacos</option>
//                     <option value="Slow Cooker Coconut Curry Lentils">Slow Cooker Coconut Curry Lentils</option>
//                     <option value="Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms">Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms</option>
//                     <option value="Slow Cooker Enchilada Quinoa">Slow Cooker Enchilada Quinoa</option>
//                     <option value="Slow Cooker Italian Meatballs">Slow Cooker Italian Meatballs</option>
//                     <option value="Slow Cooker Lemon Garlic Chicken Thighs">Slow Cooker Lemon Garlic Chicken Thighs</option>
//                     <option value="Slow Cooker Mediterranean Chicken & Orzo">Slow Cooker Mediterranean Chicken & Orzo</option>
//                     <option value="Slow Cooker Mushroom Barley Risotto">Slow Cooker Mushroom Barley Risotto</option>
//                     <option value="Slow Cooker Peanut Butter Chicken">Slow Cooker Peanut Butter Chicken</option>
//                     <option value="Slow Cooker Poblano Turkey Chili">Slow Cooker Poblano Turkey Chili</option>
//                     <option value="Slow Cooker Roast">Slow Cooker Roast</option>
//                     <option value="Slow Cooker Sausage and White Bean Soup">Slow Cooker Sausage and White Bean Soup</option>
//                     <option value="Slow Cooker Thai Green Curry with Chicken">Slow Cooker Thai Green Curry with Chicken</option>
//                     <option value="Slow Cooker Tofu Tikka Masala">Slow Cooker Tofu Tikka Masala</option>
//                     <option value="Slow Cooker White Chicken Chili">Slow Cooker White Chicken Chili</option>
//                     <option value="Southwest Black Beans Polenta Casserole">Southwest Black Beans Polenta Casserole</option>
//                     <option value="Southwest Salad with Taco Ranch Dressing">Southwest Salad with Taco Ranch Dressing</option>
//                     <option value="Southwestern Veggie-Packed Tater Tot Casserole">Southwestern Veggie-Packed Tater Tot Casserole</option>
//                     <option value="Spicy Black Bean Burgers">Spicy Black Bean Burgers</option>
//                     <option value="Spicy California Shrimp Stack">Spicy California Shrimp Stack</option>
//                     <option value="Spicy Fish Taco Bowls">Spicy Fish Taco Bowls</option>
//                     <option value="Spicy Sausage and Cabbage Soup">Spicy Sausage and Cabbage Soup</option>
//                     <option value="Spicy Shrimp & Tomato Pasta">Spicy Shrimp & Tomato Pasta</option>
//                     <option value="Spicy Tuna Cakes">Spicy Tuna Cakes</option>
//                     <option value="Spicy Vegan Cream of Corn Soup">Spicy Vegan Cream of Corn Soup</option>
//                     <option value="Spinach Tortellini Soup">Spinach Tortellini Soup</option>
//                     <option value="Spinach, Mushroom, and Feta Crustless Quiche">Spinach, Mushroom, and Feta Crustless Quiche</option>
//                     <option value="Spinach. Artichoke. and Feta Breakfast Bake">Spinach. Artichoke. and Feta Breakfast Bake</option>
//                     <option value="Sriracha Chickpea Salad Wraps">Sriracha Chickpea Salad Wraps</option>
//                     <option value="Steak Kebabs with Chimichurri">Steak Kebabs with Chimichurri</option>
//                     <option value="Stewed Tofu with Corn and Tomatoes">Stewed Tofu with Corn and Tomatoes</option>
//                     <option value="Stir-Fried Chicken with Bok Choy">Stir-Fried Chicken with Bok Choy</option>
//                     <option value="Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions">Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions</option>
//                     <option value="Stovetop Red Beans and Rice">Stovetop Red Beans and Rice</option>
//                     <option value="Stuffed Buffalo Chicken Breasts">Stuffed Buffalo Chicken Breasts</option>
//                     <option value="Stuffed Eggplant">Stuffed Eggplant</option>
//                     <option value="Stuffed Peppers with Corn, Black Beans, and Pepper Jack">Stuffed Peppers with Corn, Black Beans, and Pepper Jack</option>
//                     <option value="Stuffed Tomatoes">Stuffed Tomatoes</option>
//                     <option value="Summer Slaw">Summer Slaw</option>
//                     <option value="Summer Squash and Corn Chowder">Summer Squash and Corn Chowder</option>
//                     <option value="Sweet Potato and Poblano Pepper Soup">Sweet Potato and Poblano Pepper Soup</option>
//                     <option value="Taco Soup">Taco Soup</option>
//                     <option value="Tamale Pie">Tamale Pie</option>
//                     <option value="Tex-Mex Breakfast Casserole">Tex-Mex Breakfast Casserole</option>
//                     <option value="Thai Coconut Curry Braised Chicken Thighs">Thai Coconut Curry Braised Chicken Thighs</option>
//                     <option value="Thai Coconut Curry Butternut Squash Soup">Thai Coconut Curry Butternut Squash Soup</option>
//                     <option value="Thai Coconut Soup">Thai Coconut Soup</option>
//                     <option value="Thai Curry Vegetable Soup">Thai Curry Vegetable Soup</option>
//                     <option value="Thai Meatball and Egg Drop Soup">Thai Meatball and Egg Drop Soup</option>
//                     <option value="Thai Red Curry with Vegetables">Thai Red Curry with Vegetables</option>
//                     <option value="The Great Big Vegan Salad">The Great Big Vegan Salad</option>
//                     <option value="Tofu Broccoli Stir fry">Tofu Broccoli Stir fry</option>
//                     <option value="Tofu Parmigiana">Tofu Parmigiana</option>
//                     <option value="Tofu Steaks">Tofu Steaks</option>
//                     <option value="Tomato Dijon Turkey Meatballs">Tomato Dijon Turkey Meatballs</option>
//                     <option value="Turkey Meatball Stroganoff">Turkey Meatball Stroganoff</option>
//                     <option value="Umbrian-Style Chicken">Umbrian-Style Chicken</option>
//                     <option value="Unstuffed Bell Peppers">Unstuffed Bell Peppers</option>
//                     <option value="Vegan Buddha Bowl">Vegan Buddha Bowl</option>
//                     <option value="Vegan Coconut Curry Lentil Soup">Vegan Coconut Curry Lentil Soup</option>
//                     <option value="Vegan Tacos">Vegan Tacos</option>
//                     <option value="Vegan Winter Lentil Stew">Vegan Winter Lentil Stew</option>
//                     <option value="Vegetable Enchilada Casserole">Vegetable Enchilada Casserole</option>
//                     <option value="Weeknight Enchiladas">Weeknight Enchiladas</option>
//                     <option value="White Bean, Spinach, & Turkey Stuffed Bell Peppers">White Bean, Spinach, & Turkey Stuffed Bell Peppers</option>
//                     <option value="White Chili">White Chili</option>
//                     <option value="Whole-Grain Veggie Burrito Bowl">Whole-Grain Veggie Burrito Bowl</option>
//                     <option value="Will it Skillet? Mac & Cheese">Will it Skillet? Mac & Cheese</option>
//                     <option value="Yassa Poulet">Yassa Poulet</option>
//                     <option value="Zucchini Cheddar Scones">Zucchini Cheddar Scones</option>
//                     <option value="Zuppa Toscana">Zuppa Toscana</option>
//               </select>
//
//             {/* <input type="meal" onChange={e => setMeal(e.target.value)} placeholder="Meal"/> */}
//             <div>
//               <label>Date</label>
//               <Datetime value={date} onChange={date => setDate(date)} placeholder="Date" />
//
//               </div>
//             <button type="submit" onClick={submit}>Add</button>
//
//           </form>
//         </Modal>
//       )
//     };

import React, {useState} from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
import "./Style/Home.css";

Modal.setAppElement('#root'); // Correct usage of Modal.setAppElement for accessibility.

export default function AddEventModal({isOpen, onClose, onEventAdded}) {
    const [meal, setMeal] = useState('""');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [error, setError] = useState('');

    // Fetching user profile information from local storage or initializing it as an empty object
    const userProfile = JSON.parse(localStorage.getItem("users")) || {};
    const email = userProfile.email || "";

    // FOR TESTING //
    const submit = async (event) => {
        event.preventDefault();
        //Add event in backend
        
        const response = await axios.post("http://localhost:8000/create-event", {
            email, meal, start, end
        });

        //Code for get all existing events
        const a = await axios.post("http://localhost:8000/get-events", {
            email
        });
        //alert(a.data.length);
        for (let i = 0; i < a.data.length;i++) {
            onEventAdded({email:a.data[i].email,start:a.data[i].start,end:a.data[i].end,meal:a.data[i].meal});
        }
        //End of get
        
        //onEventAdded({email, start, end, meal}); // Update the calendar with the new event

    // rest of your submission logic...
    };


    // const submit = async (event) => {
    //     event.preventDefault();
    //
    //     onEventAdded({email, meal, start, end}); // Update the calendar with the new event
    //
    //     try {
    //         const response = await axios.post("/create-event", {
    //             email,
    //             meal,
    //             start,
    //             end
    //         });
    //
    //         if (response.status === 201) {
    //             onEventAdded(response.data); // Update the calendar with the new event
    //             onClose(); // Close the modal after successful addition
    //         } else {
    //             setError("Failed to add meal. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("Failed to add event:", error);
    //         setError("Something went wrong. Please try again.");
    //     }
    // };


    // Clear error message when modal is closed
    const handleModalClose = () => {
        setError('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={handleModalClose}>
            <form onSubmit={submit}>
                <select className="form-control" value={meal} onChange={e => setMeal(e.target.value)}>
                    <option value="">Select a meal...</option>
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
                    <option value="Beef and Mushroom Stroganoff over Creamy Polenta">Beef and Mushroom Stroganoff over
                        Creamy Polenta
                    </option>
                    <option value="Beef Barley Soup">Beef Barley Soup</option>
                    <option value="Beef Burgers with Jerk Onions and Cucumber Avocado Salad">Beef Burgers with Jerk
                        Onions and Cucumber Avocado Salad
                    </option>
                    <option value="Beef Pot Roast">Beef Pot Roast</option>
                    <option value="Beef Stew with Caramelized Onions and Red Wine">Beef Stew with Caramelized Onions and
                        Red Wine
                    </option>
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
                    <option value="Caramelized Onion, Mushroom, and Swiss Stuffed Chicken">Caramelized Onion, Mushroom,
                        and Swiss Stuffed Chicken
                    </option>
                    <option value="Cauliflower Pesto Crust Pizza">Cauliflower Pesto Crust Pizza</option>
                    <option value="Cheese & Spinach Stuffed Portobellos">Cheese & Spinach Stuffed Portobellos</option>
                    <option value="Cheesy Cauliflower and Potato Soup">Cheesy Cauliflower and Potato Soup</option>
                    <option value="Cheesy Zucchini and Corn Fritters with Herb Sour Cream">Cheesy Zucchini and Corn
                        Fritters with Herb Sour Cream
                    </option>
                    <option value="Chicken & Mushrooms in a Garlic White Wine Sauce">Chicken & Mushrooms in a Garlic
                        White Wine Sauce
                    </option>
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
                    <option value="Chicken, Feta Cheese, and Sun-Dried Tomato Wraps">Chicken, Feta Cheese, and Sun-Dried
                        Tomato Wraps
                    </option>
                    <option value="Chipotle Cheddar Cauliflower Black Bean Enchiladas">Chipotle Cheddar Cauliflower
                        Black Bean Enchiladas
                    </option>
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
                    <option value="Creamy Sun-dried tomato & Parmesan Chicken Zoodles">Creamy Sun-dried tomato &
                        Parmesan Chicken Zoodles
                    </option>
                    <option value="Creamy Three-Bean Stew">Creamy Three-Bean Stew</option>
                    <option value="Crispy and Tender Baked Chicken Thighs">Crispy and Tender Baked Chicken Thighs
                    </option>
                    <option value="Crispy Baked Chicken Breasts">Crispy Baked Chicken Breasts</option>
                    <option value="Crispy Chicken Thighs with Bacon and Wilted Escarole">Crispy Chicken Thighs with
                        Bacon and Wilted Escarole
                    </option>
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
                    <option value="Easy Mustard Pork Tenderloin with Grilled Vegetables in Foil">Easy Mustard Pork
                        Tenderloin with Grilled Vegetables in Foil
                    </option>
                    <option value="Easy Oven Fajitas">Easy Oven Fajitas</option>
                    <option value="Easy Spinach Pie">Easy Spinach Pie</option>
                    <option value="Eggplant and Tofu Curry">Eggplant and Tofu Curry</option>
                    <option value="Eggplant Bruschetta">Eggplant Bruschetta</option>
                    <option value="Eggplant Lasagna">Eggplant Lasagna</option>
                    <option value="Fat Guacamole Devils">Fat Guacamole Devils</option>
                    <option value="Food Cart-Style Chicken Salad with White Sauce">Food Cart-Style Chicken Salad with
                        White Sauce
                    </option>
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
                    <option value="Grilled Steak with Tomatoes, Red Onion, and Balsamic">Grilled Steak with Tomatoes,
                        Red Onion, and Balsamic
                    </option>
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
                    <option value="Jalapeno, Pepper Jack, and Turkey Bacon Quiche">Jalapeno, Pepper Jack, and Turkey
                        Bacon Quiche
                    </option>
                    <option value="Kale and Cabbage Soup">Kale and Cabbage Soup</option>
                    <option value="Korean Style Ground Beef and Spinach Rice Bowls">Korean Style Ground Beef and Spinach
                        Rice Bowls
                    </option>
                    <option value="Lemon Chicken Orzo Soup">Lemon Chicken Orzo Soup</option>
                    <option value="Lemon Tahini Salad Dressing">Lemon Tahini Salad Dressing</option>
                    <option value="Lemon, Rice, and Chicken Soup">Lemon, Rice, and Chicken Soup</option>
                    <option value="Lentil & Black Bean Soup">Lentil & Black Bean Soup</option>
                    <option value="Lentil Dal with Hearty Greens">Lentil Dal with Hearty Greens</option>
                    <option value="Light Balsamic Vinaigrette">Light Balsamic Vinaigrette</option>
                    <option value="Light Mexican Casserole">Light Mexican Casserole</option>
                    <option value="Loaded Potato Soup">Loaded Potato Soup</option>
                    <option value="Lower-Fat Coleslaw">Lower-Fat Coleslaw</option>
                    <option value="Make-Ahead Mustardy Quinoa with Sausage, Potato, and Tarragon">Make-Ahead Mustardy
                        Quinoa with Sausage, Potato, and Tarragon
                    </option>
                    <option value="Marinated Baked Tofu">Marinated Baked Tofu</option>
                    <option value="Matzo Ball Soup">Matzo Ball Soup</option>
                    <option value="Mediterranean Hummus Bowls">Mediterranean Hummus Bowls</option>
                    <option value="Mexican Casserole with Roasted Corn and Peppers">Mexican Casserole with Roasted Corn
                        and Peppers
                    </option>
                    <option value="Mexican Pinto Bean Soup with Queso">Mexican Pinto Bean Soup with Queso</option>
                    <option value="Mexican Taco Casserole Bake">Mexican Taco Casserole Bake</option>
                    <option value="Mini Garden Turkey Loaves">Mini Garden Turkey Loaves</option>
                    <option value="Moroccan Lentil and Vegetable Stew">Moroccan Lentil and Vegetable Stew</option>
                    <option value="Moroccan Sweet Potato Lentil Soup">Moroccan Sweet Potato Lentil Soup</option>
                    <option value="Mozzarella Chicken in Tomato Sauce">Mozzarella Chicken in Tomato Sauce</option>
                    <option value="Mujaddara">Mujaddara</option>
                    <option value="Mushroom and Spinach Lasagna">Mushroom and Spinach Lasagna</option>
                    <option value="Mustard Cream Sauce for Haddock">Mustard Cream Sauce for Haddock</option>
                    <option value="No Sugar Added Apple Pie Overnight Oats">No Sugar Added Apple Pie Overnight Oats
                    </option>
                    <option value="No-Cook BLT Salad">No-Cook BLT Salad</option>
                    <option value="No-Noodle Zucchini Lasagna Recipe">No-Noodle Zucchini Lasagna Recipe</option>
                    <option value="Oatmeal Cottage Cheese Pancakes">Oatmeal Cottage Cheese Pancakes</option>
                    <option value="One Pan Cheesy Jalapeno Chicken">One Pan Cheesy Jalapeno Chicken</option>
                    <option value="One Pot Cheesy Taco Orzo">One Pot Cheesy Taco Orzo</option>
                    <option value="One Pot Creamy Cajun Chicken Pasta">One Pot Creamy Cajun Chicken Pasta</option>
                    <option value="One Pot Sausage and Mushroom Pasta">One Pot Sausage and Mushroom Pasta</option>
                    <option value="One Pot Sausage and Sun Dried Tomato Pasta">One Pot Sausage and Sun Dried Tomato
                        Pasta
                    </option>
                    <option value="One Pot Unstuffed Cabbage Rolls">One Pot Unstuffed Cabbage Rolls</option>
                    <option value="Orange Tofu Chickpea Bowls">Orange Tofu Chickpea Bowls</option>
                    <option value="Paleo Meatloaf with Bacon and Balsamic Onions">Paleo Meatloaf with Bacon and Balsamic
                        Onions
                    </option>
                    <option value="Pan-Toasted Sweet Corn with Wilted Chard and Black Beans">Pan-Toasted Sweet Corn with
                        Wilted Chard and Black Beans
                    </option>
                    <option value="Parmesan and Peppercorn Ranch Dressing">Parmesan and Peppercorn Ranch Dressing
                    </option>
                    <option value="Parmesan Basil Tomato Soup">Parmesan Basil Tomato Soup</option>
                    <option value="Parmesan Garlic Spaghetti Squash">Parmesan Garlic Spaghetti Squash</option>
                    <option value="Pasta Salad with Creamy Chipotle Dressing">Pasta Salad with Creamy Chipotle
                        Dressing
                    </option>
                    <option value="Pasta Salad with Sausage and Arugula">Pasta Salad with Sausage and Arugula</option>
                    <option value="Pasta with Butternut Sauce, Sausage, and Spinach">Pasta with Butternut Sauce,
                        Sausage, and Spinach
                    </option>
                    <option value="Peanut Butter Marinated Chicken">Peanut Butter Marinated Chicken</option>
                    <option value="Peanutty Quinoa Bowls with Baked Tofu">Peanutty Quinoa Bowls with Baked Tofu</option>
                    <option value="Philly Cheesesteak Stuffed Portobello Mushrooms">Philly Cheesesteak Stuffed
                        Portobello Mushrooms
                    </option>
                    <option value="Pico de Gallo">Pico de Gallo</option>
                    <option value="Pork Chops and Couscous with Tomato-Caper Sauce">Pork Chops and Couscous with
                        Tomato-Caper Sauce
                    </option>
                    <option value="Pork Egg Roll in a Bowl">Pork Egg Roll in a Bowl</option>
                    <option value="Pork Gyoza">Pork Gyoza</option>
                    <option value="Pork with Caramelized Onion and Rosemary-Roasted Root Vegetables">Pork with
                        Caramelized Onion and Rosemary-Roasted Root Vegetables
                    </option>
                    <option value="Portobello Polenta Bowls">Portobello Polenta Bowls</option>
                    <option value="Potato, Leek, and Corn Chowder">Potato, Leek, and Corn Chowder</option>
                    <option value="Pozole Verde Chicken">Pozole Verde Chicken</option>
                    <option value="Pulled Pork">Pulled Pork</option>
                    <option value="Quick & Easy Mexican Chicken">Quick & Easy Mexican Chicken</option>
                    <option value="Quinoa with Roasted Garlic and Potatoes">Quinoa with Roasted Garlic and Potatoes
                    </option>
                    <option value="Raita">Raita</option>
                    <option value="Red Wine Vinaigrette">Red Wine Vinaigrette</option>
                    <option value="Ricotta Goat Cheese Polenta Bake">Ricotta Goat Cheese Polenta Bake</option>
                    <option value="Roasted Cabbage Wedges with Onion Dijon Sauce">Roasted Cabbage Wedges with Onion
                        Dijon Sauce
                    </option>
                    <option value="Roasted Carrots">Roasted Carrots</option>
                    <option value="Roasted Cauliflower and Chickpeas with Minted Yogurt">Roasted Cauliflower and
                        Chickpeas with Minted Yogurt
                    </option>
                    <option value="Roasted Cauliflower Salad with Lemon Tahini Dressing">Roasted Cauliflower Salad with
                        Lemon Tahini Dressing
                    </option>
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
                    <option value="Sesame Soba Noodles with Collard Greens and Tempeh Croutons">Sesame Soba Noodles with
                        Collard Greens and Tempeh Croutons
                    </option>
                    <option value="Shakshuka">Shakshuka</option>
                    <option value="Shawarma-Spiced Grilled Chicken with Garlic Yogurt">Shawarma-Spiced Grilled Chicken
                        with Garlic Yogurt
                    </option>
                    <option value="Sheet Pan Pork Chop Supper">Sheet Pan Pork Chop Supper</option>
                    <option value="Simple Baked Chicken Drumsticks">Simple Baked Chicken Drumsticks</option>
                    <option value="Simple Herb Mushroom Barley Salad">Simple Herb Mushroom Barley Salad</option>
                    <option value="Simple Perfect Enchiladas">Simple Perfect Enchiladas</option>
                    <option value="Simple Tomato Cucumber Salad">Simple Tomato Cucumber Salad</option>
                    <option value="Skillet Pasta with Sun Dried Tomatoes, Walnuts, and Feta ">Skillet Pasta with Sun
                        Dried Tomatoes, Walnuts, and Feta
                    </option>
                    <option value="Skillet Sicilian Chicken">Skillet Sicilian Chicken</option>
                    <option value="Skillet Steak with Onions and Mushrooms">Skillet Steak with Onions and Mushrooms
                    </option>
                    <option value="Skinny Balsamic Vinaigrette">Skinny Balsamic Vinaigrette</option>
                    <option value="Skinny Cheeseburger Casserole">Skinny Cheeseburger Casserole</option>
                    <option value="Slow Cooker 5 spice pulled pork">Slow Cooker 5 spice pulled pork</option>
                    <option value="Slow Cooker Beef and Pepper Soup">Slow Cooker Beef and Pepper Soup</option>
                    <option value="Slow Cooker Beef Stew">Slow Cooker Beef Stew</option>
                    <option value="Slow Cooker Carnitas">Slow Cooker Carnitas</option>
                    <option value="Slow Cooker Cashew Chicken">Slow Cooker Cashew Chicken</option>
                    <option value="Slow Cooker Cheater Pork Stew">Slow Cooker Cheater Pork Stew</option>
                    <option value="Slow Cooker Cheeseburger Soup">Slow Cooker Cheeseburger Soup</option>
                    <option value="Slow Cooker Cheesy Enchilada Meatballs">Slow Cooker Cheesy Enchilada Meatballs
                    </option>
                    <option value="Slow Cooker Chicken Cauliflower Curry">Slow Cooker Chicken Cauliflower Curry</option>
                    <option value="Slow Cooker Chicken Tortilla Soup">Slow Cooker Chicken Tortilla Soup</option>
                    <option value="Slow Cooker Cilantro Lime Chicken Tacos">Slow Cooker Cilantro Lime Chicken Tacos
                    </option>
                    <option value="Slow Cooker Coconut Curry Lentils">Slow Cooker Coconut Curry Lentils</option>
                    <option value="Slow Cooker Creamy Wild Rice Soup with Butter Roasted Mushrooms">Slow Cooker Creamy
                        Wild Rice Soup with Butter Roasted Mushrooms
                    </option>
                    <option value="Slow Cooker Enchilada Quinoa">Slow Cooker Enchilada Quinoa</option>
                    <option value="Slow Cooker Italian Meatballs">Slow Cooker Italian Meatballs</option>
                    <option value="Slow Cooker Lemon Garlic Chicken Thighs">Slow Cooker Lemon Garlic Chicken Thighs
                    </option>
                    <option value="Slow Cooker Mediterranean Chicken & Orzo">Slow Cooker Mediterranean Chicken & Orzo
                    </option>
                    <option value="Slow Cooker Mushroom Barley Risotto">Slow Cooker Mushroom Barley Risotto</option>
                    <option value="Slow Cooker Peanut Butter Chicken">Slow Cooker Peanut Butter Chicken</option>
                    <option value="Slow Cooker Poblano Turkey Chili">Slow Cooker Poblano Turkey Chili</option>
                    <option value="Slow Cooker Roast">Slow Cooker Roast</option>
                    <option value="Slow Cooker Sausage and White Bean Soup">Slow Cooker Sausage and White Bean Soup
                    </option>
                    <option value="Slow Cooker Thai Green Curry with Chicken">Slow Cooker Thai Green Curry with
                        Chicken
                    </option>
                    <option value="Slow Cooker Tofu Tikka Masala">Slow Cooker Tofu Tikka Masala</option>
                    <option value="Slow Cooker White Chicken Chili">Slow Cooker White Chicken Chili</option>
                    <option value="Southwest Black Beans Polenta Casserole">Southwest Black Beans Polenta Casserole
                    </option>
                    <option value="Southwest Salad with Taco Ranch Dressing">Southwest Salad with Taco Ranch Dressing
                    </option>
                    <option value="Southwestern Veggie-Packed Tater Tot Casserole">Southwestern Veggie-Packed Tater Tot
                        Casserole
                    </option>
                    <option value="Spicy Black Bean Burgers">Spicy Black Bean Burgers</option>
                    <option value="Spicy California Shrimp Stack">Spicy California Shrimp Stack</option>
                    <option value="Spicy Fish Taco Bowls">Spicy Fish Taco Bowls</option>
                    <option value="Spicy Sausage and Cabbage Soup">Spicy Sausage and Cabbage Soup</option>
                    <option value="Spicy Shrimp & Tomato Pasta">Spicy Shrimp & Tomato Pasta</option>
                    <option value="Spicy Tuna Cakes">Spicy Tuna Cakes</option>
                    <option value="Spicy Vegan Cream of Corn Soup">Spicy Vegan Cream of Corn Soup</option>
                    <option value="Spinach Tortellini Soup">Spinach Tortellini Soup</option>
                    <option value="Spinach, Mushroom, and Feta Crustless Quiche">Spinach, Mushroom, and Feta Crustless
                        Quiche
                    </option>
                    <option value="Spinach. Artichoke. and Feta Breakfast Bake">Spinach. Artichoke. and Feta Breakfast
                        Bake
                    </option>
                    <option value="Sriracha Chickpea Salad Wraps">Sriracha Chickpea Salad Wraps</option>
                    <option value="Steak Kebabs with Chimichurri">Steak Kebabs with Chimichurri</option>
                    <option value="Stewed Tofu with Corn and Tomatoes">Stewed Tofu with Corn and Tomatoes</option>
                    <option value="Stir-Fried Chicken with Bok Choy">Stir-Fried Chicken with Bok Choy</option>
                    <option value="Stir-Fried Tofu with Mushrooms, Sugar Snap Peas, and Green Onions">Stir-Fried Tofu
                        with Mushrooms, Sugar Snap Peas, and Green Onions
                    </option>
                    <option value="Stovetop Red Beans and Rice">Stovetop Red Beans and Rice</option>
                    <option value="Stuffed Buffalo Chicken Breasts">Stuffed Buffalo Chicken Breasts</option>
                    <option value="Stuffed Eggplant">Stuffed Eggplant</option>
                    <option value="Stuffed Peppers with Corn, Black Beans, and Pepper Jack">Stuffed Peppers with Corn,
                        Black Beans, and Pepper Jack
                    </option>
                    <option value="Stuffed Tomatoes">Stuffed Tomatoes</option>
                    <option value="Summer Slaw">Summer Slaw</option>
                    <option value="Summer Squash and Corn Chowder">Summer Squash and Corn Chowder</option>
                    <option value="Sweet Potato and Poblano Pepper Soup">Sweet Potato and Poblano Pepper Soup</option>
                    <option value="Taco Soup">Taco Soup</option>
                    <option value="Tamale Pie">Tamale Pie</option>
                    <option value="Tex-Mex Breakfast Casserole">Tex-Mex Breakfast Casserole</option>
                    <option value="Thai Coconut Curry Braised Chicken Thighs">Thai Coconut Curry Braised Chicken
                        Thighs
                    </option>
                    <option value="Thai Coconut Curry Butternut Squash Soup">Thai Coconut Curry Butternut Squash Soup
                    </option>
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
                    <option value="White Bean, Spinach, & Turkey Stuffed Bell Peppers">White Bean, Spinach, & Turkey
                        Stuffed Bell Peppers
                    </option>
                    <option value="White Chili">White Chili</option>
                    <option value="Whole-Grain Veggie Burrito Bowl">Whole-Grain Veggie Burrito Bowl</option>
                    <option value="Will it Skillet? Mac & Cheese">Will it Skillet? Mac & Cheese</option>
                    <option value="Yassa Poulet">Yassa Poulet</option>
                    <option value="Zucchini Cheddar Scones">Zucchini Cheddar Scones</option>
                    <option value="Zuppa Toscana">Zuppa Toscana</option>
                </select>
                <div>
                    <label>Start Date</label>
                    <Datetime
                        value={start}
                        onChange={date => setStart(date)}
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <Datetime
                        value={end}
                        onChange={date => setEnd(date)}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Add Meal</button>
            </form>
        </Modal>
    );
}
