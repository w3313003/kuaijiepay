// 简单封装本地存储
export function vueX2stoage(key: string, value: object | string | boolean): void {
    sessionStorage.setItem(key, JSON.stringify(value));
}
export function parseStoage(key: string) {
    const data = sessionStorage.getItem(key);
    return JSON.parse((data as string));
}
