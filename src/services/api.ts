export async function apiFetch<T>(url :string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    if (response.ok) {
        return response.json() as Promise<T>;
    } else {
        throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }
}