# Imagem base
FROM node:14

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependência
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do aplicativo
COPY . .

# Expor a porta 5000
EXPOSE 5000

# Iniciar o servidor Express
CMD ["npm", "start"]
