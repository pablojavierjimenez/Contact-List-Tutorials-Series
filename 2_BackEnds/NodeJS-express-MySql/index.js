const app = require('./api/server.js')
const CONFIG = require('./api/config.js');

const port = CONFIG.PORT;

app.listen(port, () => console.log(`App running on: http://localhost:7080/api`))
