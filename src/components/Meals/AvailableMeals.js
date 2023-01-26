import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bread and Ewa',
    description: 'Iya Elewa',
    price: 7000,
  },
  {
    id: 'm2',
    name: 'Rice and Beans',
    description: 'Protein ',
    price: 5300,
  },
  {
    id: 'm3',
    name: 'Yam and Egg',
    description: 'American meaty',
    price: 5000,
  },
  {
    id: 'm4',
    name: 'Custard And Moi-Moi',
    description: 'Healthy...and green...',
    price: 2000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
