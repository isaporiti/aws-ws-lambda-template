import { greet } from "../../src/application/greet";

describe('greeter', function () {
    it('greets the World by default', () => {
        const greeting = greet()
        
        expect(greeting).toBe('Hello, World!')
    });

    it('greets a given name', () => {
        const name = 'TypeScript';

        const greeting = greet(name)

        expect(greeting).toBe(`Hello, ${name}!`)
    });
});
