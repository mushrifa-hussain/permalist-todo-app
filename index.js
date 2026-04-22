import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "username",
  host: "localhost",
  database: "permalist",
  password: "password",
  port: 5432
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", async (req, res) => {
  try{
      const result = await db.query("SELECT * FROM items;")
      items = result.rows;
      res.render("index.ejs", {
        listTitle: "Task List",
        listItems: items,
      });
  }catch(e){
    console.log(e);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  console.log(item);
  try{
    await db.query("INSERT INTO items (title) VALUES ($1);", [item]);
  }catch(e){
    console.log(e);
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const id = parseInt(req.body.updatedItemId);
  const updatedItem = req.body.updatedItemTitle;
  try{
    await db.query("UPDATE items SET title = $1 WHERE id = $2;", [updatedItem, id]);
  }catch(e){
    console.log(e);
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1;", [deleteId]);
  }catch(e){
    console.log(e);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
