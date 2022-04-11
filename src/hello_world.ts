const greeting = 'world';

export function hello(world: string = greeting): string {
    if (world == "Bob") {
        return "Hiya Bob!";
    }
    return `Hello ${world}!`;
}