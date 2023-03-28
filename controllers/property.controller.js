const db = require("../database/database");
exports.PostProperty = async (req, res) => {
  const { type, address, state, city, zipcode, price, description, image } = req.body;
  db.query(
    "INSERT INTO property (type, address, state, city, zipcode,price,description, image) VALUES (?,?,?,?,?,?,?,?)",
    [type, address, state, city, zipcode, price, description, image],
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: "error" });
      } else {
        // res.status(200).json({status: 'ok'});
        console.log(response);
        res.json(response);
      }
    }
  );
};

exports.GetProperty = async (req,res)=>{
  db.query(
    "SELECT * FROM property",
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: "error" });
      } else {
        // res.status(200).json({status: 'ok'});
        console.log(response);
        res.json(response);
      }
    }
  )
}
