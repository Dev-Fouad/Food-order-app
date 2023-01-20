import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bread and beans',
    description: 'Ewagon yin',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Spaghetti and turkey',
    description: 'A rick kid specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Rice and Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chicken Fries',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
