import axios from 'axios'
import express from 'express'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', async (req, res) => {
    const { url } = req.query
    const { data } = await axios.get(url)
    return res.send(data)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on ${PORT}`))