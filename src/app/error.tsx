"use client";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => (
  <html lang="en">
    <body>
      <div style={{ padding: 24 }}>
        <h2>Something went wrong</h2>
        <p>{error?.message}</p>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </body>
  </html>
);

export default GlobalError;
