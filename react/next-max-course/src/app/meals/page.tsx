import { getMeals } from '@/services/meals';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Here is the meals',
};

const ComponentMeals = async () => {
  const meals = await getMeals();
  return (
    <div>
      {meals.map((meal: any) => (
        <div key={meal.id}>
          <h1>{meal.title}</h1>
          <p>{meal.description}</p>
        </div>
      ))}
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <main className="custom-container">
      <section>
        <h1>Meals</h1>
        <p>Here is the meals</p>
        <Suspense fallback="Loading...">
          <ComponentMeals />
        </Suspense>
      </section>
    </main>
  );
};

export default PortfolioPage;
