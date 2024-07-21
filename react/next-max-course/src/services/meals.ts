import fs, { createWriteStream } from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id: number) {
  return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
}

export async function saveMeal(meal: any) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const filename = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Error saving image');
    }
  });
  const savedImage = `/images/${filename}`;

  const formattedMeal = { ...meal, slug, instructions, image: savedImage };

  db.prepare(
    `
    INSERT INTO meals 
      (title, summary, instructions, image, creator, creator_email, slug)    
    VALUES 
      (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `,
  ).run(formattedMeal);
}
