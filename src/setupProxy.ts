import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

const setupProxy = (app: Application) => {
  app.use(
    '/pessoal',
    createProxyMiddleware({
      target: 'http://transparencia.al.gov.br',
      changeOrigin: true,
    })
  );
};

export default setupProxy;
