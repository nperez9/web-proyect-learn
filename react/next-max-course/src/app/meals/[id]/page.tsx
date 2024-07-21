import Image from 'next/image';
import React from 'react';

import { getMeal } from '@/services/meals';

export interface PortfolioDetailPageProps {
  params: {
    id: string;
  };
}

const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ params }) => {
  const meal = getMeal(Number(params.id)) as any;

  return (
    <>
      <header>
        <h1>Portfolio Detail</h1>
      </header>
      <main className="custom-container">
        <section>id: {params.id}</section>
        <section>
          <Image src={meal.image} alt={meal.title} fill />
        </section>
        <section>{meal.title}</section>
      </main>
      ;
    </>
  );
};

export default PortfolioDetailPage;
