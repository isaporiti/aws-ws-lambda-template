import axios from 'axios';

describe('Greeter API', () => {

    it('Should return 200 and greet to world when no name provided', async () => {

        const { status, data: greeting } = await axios.get('http://localhost:3000/dev/greet');

        expect(status).toBe(200);
        expect(greeting).toBe("Hello, World!");
    });

    it('Should return 200 and greet a given name.', async () => {
        const name = 'Lambda';

        const { status, data: greeting } = await axios.get(`http://localhost:3000/dev/greet?name=${name}`);

        expect(status).toBe(200);
        expect(greeting).toBe(`Hello, ${name}!`);
    });
}); 