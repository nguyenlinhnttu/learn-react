type ErrorMessageProps = {
  error: Error | null;
  onRetry?: () => void;
};

function ErrorMessage({ error, onRetry }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <div style={{ padding: "12px", border: "1px solid red" }}>
      <p style={{ color: "red", marginBottom: "8px" }}>
        {error?.message}
      </p>

      {onRetry && (
        <button onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;