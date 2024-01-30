import { useEffect, useState } from "react";
import styles from './search.module.css';


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2515437ed4f544a1937968bc301ca1f7"


export default function Search({foodData, setFoodData}) {
  const [ query, setQuery ] = useState("pasta");
  // useEffect bind component with an external system
  // sync with external api
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results)
      setFoodData(data.results)
    }


    fetchFood()

  }, [query])
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}