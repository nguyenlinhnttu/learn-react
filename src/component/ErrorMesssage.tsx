type ErrorProps = {
    message: string;
    onRetry?: () => void;
};

function ErrorMessage({ message, onRetry }: ErrorProps) {
    if (!message) return null;
    return (
        <div>
            <p style={{ color: "red" }}>{message}</p>
            {onRetry && <button onClick={onRetry}>Retry</button>}
        </div>
    );
}


export default ErrorMessage;