import { useCallback, useEffect, useRef, useState } from "react";
import { fetchUsers, fetchUserById } from "../services/user.service";
import type { User } from "../types/user.type";

export function useUsers(autoLoad = true) {
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const loadUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
        try {
            const data = await fetchUsers(abortControllerRef.current.signal);
            setUsers(data);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                return; // ignore abort
            }
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(Error("Failed to load users"));
            }

        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        if (autoLoad) {
            loadUsers();
        }
        return () => abortControllerRef.current?.abort();
    }, [autoLoad, loadUsers])

    return { users, loading, error, reload: loadUsers };
}

export function useUserById(id?: string, autoLoad = true) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const getUserById = useCallback(async () => {
        if (!id) return;
        setLoading(true);
        setError(null);
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
        try {
            const data = await fetchUserById(id, abortControllerRef.current.signal);
            setUser(data);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                return; // ignore abort
            }
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(Error("Failed to load user"));
            }

        } finally {
            setLoading(false);
        }
    }, [id]);
    useEffect(() => {
        // chạy sau render
        if (autoLoad) {
            getUserById();
        }
        return () =>
            // cleanup khi unmount
            abortControllerRef.current?.abort();
    }, [autoLoad, id, getUserById]);

    return { user, loading, error, reload: getUserById };
}