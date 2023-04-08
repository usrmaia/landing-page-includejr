# Criação front/backend e instalação dos modulos
## Backend
1. npx express-generator --no-view --git backend
2. cd backend
3. npm install --save @sendgrid/mail
4. set SENDGRID_API_KEY=YOUR_API_KEY
5. npm start
## Frontend
1. npx create-react-app frontend
2. cd frontend
3. npm install eslint react-icons
4. npm install react-leaflet leaflet
5. npm start
## Executando front/backend ao mesmo tempo
1. cd backend
2. npm install --save-dev concurrently
em package-json, adicionar
```
"scripts": {
    "start": "nodemon ./bin/www",
    "dev": "concurrently \"npm run start-backend\" \"npm run start-frontend\"",
    "start-frontend": "cd ./../frontend && npm start",
    "start-backend": "nodemon app.js"
},
```
3. npm run dev