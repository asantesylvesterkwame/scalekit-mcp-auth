import { registerGreetingTools } from './greeting.js';
const toolsList = {
    greet_user: {
        name: 'greet_user',
        description: 'Greets the user with a personalized message. This tool can be used to provide a friendly greeting based on the name of the user.',
        requiredScopes: ['usr:read'],
    },
};
export const TOOLS = Object.fromEntries(Object.entries(toolsList).map(([key, val]) => [
    key,
    { ...val, name: key, requiredScopes: [...val.requiredScopes] },
]));
export function registerTools(server) {
    registerGreetingTools(server);
}
//# sourceMappingURL=index.js.map