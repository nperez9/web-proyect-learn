export function isValidText(text: string): boolean {
  return !!text && text.trim().length > 0;
}

export function isValidImage(imageFile: File | null): boolean {
  const allowedMimeTypes = ['image/jpeg', 'image/png'];
  const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

  if (!imageFile) return false;
  if (!(imageFile instanceof File)) return false;
  if (!allowedMimeTypes.includes(imageFile.type)) return false;
  if (imageFile.size > maxSizeInBytes) return false;

  return true;
}
