# Imagem base
FROM node:14-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependência
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do aplicativo
COPY . .

# Construir a aplicação React
RUN npm run build

# Expor a porta 3000
EXPOSE 3000

# Iniciar a aplicação
CMD ["npm", "start"]
