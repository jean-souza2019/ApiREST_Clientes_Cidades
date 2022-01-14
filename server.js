const app = require('./app');
const port = 3000;

const routes = require('./src/router');
routes(app);

app.listen(port, () => console.log(`API Rodando na porta: ${port}`));