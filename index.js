import axios from 'axios'
import express from 'express'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', async (req, res) => {
    try {
        const { url } = req.query

        if (!url) throw new Error()
        
        const { data } = await axios.get(url)
        
        res.send(data)
    } catch (error) {
        res.send({ message: "Erro de request: url query inválido ou API informada não respondeu" })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on ${PORT}`))