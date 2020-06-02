
const db = require('../db/MySqlClient.js');

module.exports = {
  getPersons: require('./getPersons.js')(db),
  getPerson: require('./getPerson.js')(db),
  createPerson: require('./createPerson.js')(db),
  updatePerson: require('./updatePerson.js')(db),
  deletePerson: require('./deletePerson.js')(db)
}
