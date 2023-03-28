const db = require("../database/database");
exports.PostQuote = async (req,res)=>{
    const {name, email, number, property}= req.body;
    db.query(
        "INSERT INTO quote(name, email, number, property) VALUES(?,?,?,?)",
        [name, email, number, property],
        (error, response) =>{
             if (error) {
        console.log(error);
        res.status(500).json({ status: "error" });
      } else {
        console.log(response);
        res.json(response);
        }
    }
  );
};

// exports.GetProperty = async (req,res)=>{
//     db.query(
//         "SELECT * FROM quote",
//         (error, response)=>{
//             if(error){
//                 console.log(error);
//                 res.ststus(500).json({ statud : "error"});          
//             }
//             else{
//                 console.log(response);
//                 res.json(response);
//             }
//         }
//     )
// }