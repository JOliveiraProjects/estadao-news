FROM node:16.14.0-alpine as build-stage
COPY . /app
WORKDIR /app
RUN npm install

# Copia o script de entrada e dá permissão de execução
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh
CMD ["/usr/src/app/entrypoint.sh"]

EXPOSE 3001

# Configuração para desenvolvimento
FROM build-stage as dev-build-stage
ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]

# Configuração para produção
FROM build-stage as prod-build-stage
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
