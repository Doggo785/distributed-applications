const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur le service privé',
    service: 'private-service',
    status: 'running'
  });
});

app.listen(PORT, () => {
  console.log(`Private service en écoute sur le port ${PORT}`);
});
