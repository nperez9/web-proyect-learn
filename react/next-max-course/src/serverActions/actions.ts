'use server';

import { saveMeal } from '@/services/meals';
import { isValidText, isValidImage } from '@/utils/validations';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export interface ShareMealState {
  message: string;
}

// TODO: implmente S3 bucket for images
// executes only on server , prevstate is need bacause use form state
export async function shareMeal(prevState: ShareMealState, formData: FormData) {
  const meal = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  };

  if (
    !isValidText(meal.creator) &&
    !isValidText(meal.title) &&
    !isValidText(meal.summary) &&
    !isValidText(meal.instructions) &&
    !isValidImage(meal.image)
  ) {
    return { message: 'Invalid input. Please try again.' };
  }

  await saveMeal(meal);
  // Deletes the cache for that path, otherwise the new meal won't show up, investigate the second parameter
  // page for that only page, layout for all nested pages
  revalidatePath('/meals');
  return redirect('/meals');
}
