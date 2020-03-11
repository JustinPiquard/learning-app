
export function autHeader(token?: string) {
    if(token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}