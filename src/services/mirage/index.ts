import { createServer, Factory, Model } from "miragejs";
import faker  from "@faker-js/faker";
type User = {
    name: string;
    email: string;
    created_at: string;
}
export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}),
        },
        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i}`
                },
                email() {
                    return faker.internet.email().toLocaleLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10);
                },
            })
        },

        seeds(server) {
          server.createList('user', 10)
        },
        routes() {
            this.namespace = 'api';
            this.timing = 750;
            this.get('/users');
            this.delete('/users');
            this.post('/users');
            this.put('/users');
            this.namespace = '';
            this.passthrough(); // Faz com q as chamadas se n for identificada pelo mirage, seguir em frente.
        }
    });

    return server;
}