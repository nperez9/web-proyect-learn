'use client';
import React, { useRef, useState } from 'react';

export interface ImagePickerProps {
  label: string;
  name: string;
}

export const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const [pickedImage, setImagePicked] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const hadlePickClick = () => {
    imageInputRef.current?.click();
  };

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target?.files?.length) {
      return;
    }

    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicked(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <label className="hidden" htmlFor={name}>
        {label}
      </label>
      <input
        className="hidden"
        type="file"
        id={name}
        name={name}
        accept="image/*"
        ref={imageInputRef}
        onChange={handleImageChange}
        required
      />
      {pickedImage ? <img src={pickedImage} alt="picked image" /> : <p>No image picked</p>}
      <button type="button" className="block" onClick={hadlePickClick}>
        Pick an image
      </button>
    </div>
  );
};
