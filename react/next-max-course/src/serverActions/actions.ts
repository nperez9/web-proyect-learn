'use server';

import { saveMeal } from '@/services/meals';
import { isValidText, isValidImage } from '@/utils/validations';
import { redirect } from 'next/navigation';

// executes only on server
export async function shareMeal(formData: FormData) {
  // TODO: validate form data
  const meal = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  };

  if (
    isValidText(meal.creator) &&
    isValidText(meal.title) &&
    isValidText(meal.summary) &&
    isValidText(meal.instructions) &&
    isValidImage(meal.image)
  ) {
    return new Error('Invalid form data');
  }

  await saveMeal(meal);
  redirect('/meals');
}
