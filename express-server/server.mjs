import express from "express"
import bp from "body-parser"
import morgan from "morgan"


let app = express()
app.use(bp.urlencoded({"extended": true}))
app.use(bp.json())
app.use(morgan('dev'))

let db = [

]


app.post("/todo", (req, res) => {
    let data = req.body.data
    let newTodo = {
        "id": Date.now(),
        text: data
    }
    db.push(newTodo)
    res.json(newTodo)
})


app.get("/todo", (req, res) => {
    res.json(db)
})


app.listen(5000, () => console.log("server started"))