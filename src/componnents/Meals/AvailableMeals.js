import MealsItem from "./MealsItem/MealsItem";
import { useState, useEffect } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import classes from '../Meals/AvailableMeals.module.css'
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredList, setFilteredList] = useState(meals);
  const [fetchError, setFetchError] = useState()
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-api-8cc95-default-rtdb.firebaseio.com/Meals.json"
      );
      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
      const trasformedData = [];
      for (const key in responseData) {
        trasformedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          cat: responseData[key].cat,
        });
      }
      setMeals(trasformedData);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setFetchError(error.message);
    });
    
  }, []);

  useEffect(() => {
    setFilteredList(
      meals.filter((meal) => {
        if (value === 3) {
          return meal.cat === "side";
        } else if (value === 2) {
          return meal.cat === "Veg";
        } else if (value === 1) {
          return meal.cat === "meat";
        } else if (value === 4) {
          return meal.cat === "fish";
        } else if (value === 0) {
          return meal.cat !== "all";
        }
        return null;
      })
    );
  }, [value, meals]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mealsList = filteredList.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealsItem>
  ));

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Meat" />
        <Tab label="Vegiterian" />
        <Tab label="Side Dishes" />
        <Tab label="Fish" />
      </Tabs>
      <section className={classes.loading}>
       {isLoading && <p>Is Loading ...</p>}
      </section>
      <section className={classes.loading}>
       {fetchError && <p>{fetchError}</p>}
      </section>
      <section>
        <ul>{mealsList}</ul>
      </section>
    </div>
  );
};

export default AvailableMeals;
