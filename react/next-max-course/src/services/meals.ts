import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id: number) {
  return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
}
