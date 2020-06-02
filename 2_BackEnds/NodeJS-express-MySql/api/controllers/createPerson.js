// @ts-nocheck

module.exports = function (db) {
  return async (req, res) => {

    const { name, address, housePhone, mobilePhone, email, avatar } = req.body;

    const query = `INSERT INTO persons (name, address, housePhone, mobilePhone, email, avatar) VALUES ("${name}", "${address}", "${housePhone}", "${mobilePhone}", "${email}", "${avatar}")`

    console.log(query)

    db.query(query, function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    });

  }
}
