
const loadPasskeyConnector = () => import('passkey-connector').then(module => module.default);
export const passkey_connector = loadPasskeyConnector