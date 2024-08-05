import React from 'react';

export interface NewsDeatilPageProps {
  params: {
    id: string;
  };
}

export const NewsDeatilPage: React.FC<NewsDeatilPageProps> = ({ params: { id } }) => {
  return (
    <div>
      <h1>News Detail Page</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default NewsDeatilPage;
