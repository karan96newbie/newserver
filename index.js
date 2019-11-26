const express = require('express')
const path = require("path")




const app = express()
const port = 3000



app.get('/', (req, res) => {
    console.log("i hear you")

    res.sendFile(path.join(__dirname, "frame/home.html"))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))