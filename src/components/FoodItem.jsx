import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <h1 className={styles.itemName}>{food.title}</h1>
        <div className={styles.buttonContainer}>
          <button onClick={
            () => {
              setFoodId(food.id)
            }
          } className={styles.itemButton}>View More</button>
        </div>
      </div>
    </div>
  );
}
