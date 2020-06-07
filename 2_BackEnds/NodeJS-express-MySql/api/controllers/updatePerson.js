// @ts-nocheck

module.exports = function (db) {
  return async (req, res) => {
    const personId = req.params.id;
    const { name, address, housePhone, mobilePhone, email, avatar } = req.body;
    const query = `UPDATE persons SET name="${name}", address="${address}", housePhone="${housePhone}", mobilePhone="${mobilePhone}", email="${email}", avatar="${avatar}" WHERE id="${personId}"`;
    db.query(query, function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    });
  }
}
