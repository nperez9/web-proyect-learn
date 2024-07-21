'use client';
import React from 'react';
import { Messages } from '@/components/lib/messages';

export const ErrorHandler: React.FC<{ error: any }> = ({ error }) => {
  console.error(error);

  return <Messages title="Upppps looks like whe had an error" subtitle="Please, try again later" />;
};

export default ErrorHandler;
