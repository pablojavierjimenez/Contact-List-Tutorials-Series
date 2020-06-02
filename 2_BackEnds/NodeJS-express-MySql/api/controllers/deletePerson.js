// @ts-nocheck

module.exports = function (db) {
  return async (req, res) => {
    const query = `DELETE FROM persons WHERE id="${req.params.id}"`
    db.query(query, function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    });
  }
}
