// @ts-nocheck

module.exports = function (db) {
  return async (req, res) => {

    const { name, address, housePhone, mobilePhone, email, avatar } = req.body;

    const query = `INSERT INTO persons (name, address, housePhone, mobilePhone, email, avatar) VALUES ("${name}", "${address}", "${housePhone}", "${mobilePhone}", "${email}", "${avatar}")`


    db.query(query, function (err, result, fields) {
      if (err) throw err;
      res.status(201).send(result)
    });

  }
}
