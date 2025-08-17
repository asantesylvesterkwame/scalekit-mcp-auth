import { config } from '../config/config.js';
export const oauthProtectedResourceHandler = (req, res) => {
    const metadata = JSON.parse(config.protectedResourceMetadata);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(metadata);
};
//# sourceMappingURL=auth.js.map