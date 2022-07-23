export function greet(name?: string): string {
    const nameToGreet = name || 'World';
    return `Hello, ${nameToGreet}!`;
}
