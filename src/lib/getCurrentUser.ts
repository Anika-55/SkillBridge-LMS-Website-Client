export const getCurrentUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        credentials: "include",
        cache: "no-store"
    });
    if (!res.ok) return null;

    const data = await res.json();
    return data.user;
}