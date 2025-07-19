// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Inicializa o app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB com sucesso!'))
.catch((err) => console.error('❌ Erro na conexão com MongoDB:', err));

// Rota de teste inicial
app.get('/', (req, res) => {
  res.send('🚀 ZillowFlip.AI está rodando!');
});

// Importar rotas (exemplo)
const propertiesRoutes = require('./routes/properties');
const insightsRoutes = require('./routes/insights');

// Usar rotas
app.use('/api/properties', propertiesRoutes);
app.use('/api/insights', insightsRoutes);

// Tratamento de erros genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

// Define a porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});
