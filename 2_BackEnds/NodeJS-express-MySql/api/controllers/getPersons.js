// @ts-nocheck

module.exports = function (db) {
  return async (req, res) => {
    db.query("SELECT * FROM `persons` Limit 10", function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    });
  }
}
