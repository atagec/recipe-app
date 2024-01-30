import FoodItem from "./FoodItem"

export default function FoodList({foodData, setFoodId}) {
  const foodList = foodData.map(food => <FoodItem key={food.id} food={food} setFoodId={setFoodId} />)

  return (
    <div>
      {foodList}
    </div>
  )
}