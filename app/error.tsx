'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
      <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
        <AlertCircle className="w-16 h-16 text-error mx-auto mb-6" />
        <h2 className="text-2xl font-serif text-primary mb-4">Something went wrong!</h2>
        <p className="text-on-surface-variant font-light mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
