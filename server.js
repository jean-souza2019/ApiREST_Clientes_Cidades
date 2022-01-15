const app = require('./app');
const port = process.env.port || 3000;

app.listen(port, () => console.log(`API Rodando na porta: ${port}`));

module.exports = app;