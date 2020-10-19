import { Client } from "./Client.js"
import { firstOrNone } from "./utils.js"

let Clients = [new Client(1, "jim"), new Client(2, "jane")];

let Repository = ({
    getById: (id) => firstOrNone(Clients.filter(client => client.id == id))
});

export let ClientService = ({
    getClientNameById: id =>
        Repository.getById(id)
            .map(Client.name)
            .matchWith({
                Just: ({ value }) => `Found: ${value}`,
                Nothing: () => 'Nothing was found'
            })
});