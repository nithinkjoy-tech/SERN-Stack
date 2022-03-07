const express = require("express");
const app = express();
let connection=require("./startup/db")
// let connection;
// require("./startup/db")(connObject => (global.__connection = connObject));

app.use(express.json());

app.get("/", async (req, res) => {
  const [rows, fields] = await connection.query(`SELECT * FROM EMPLOYEE `);
  res.status(200).send(rows);
});

app.get("/:id", async(req, res) => {
  let [rows,fields] = await connection.query(`SELECT * FROM employee where eno=${req.params.id}`)
  res.status(200).send(rows)
});

app.post("/",async(req,res) => {
    console.log(req.body);
    let {eno,name,salary}=req.body
    console.log(name,salary)
    const [rows,fields]=await connection.query("INSERT INTO employee VALUES(?,?,?)",[eno,name,salary])
    res.status(200).send(rows)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
