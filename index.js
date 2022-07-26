const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('CWiCS Assessment')
})

app.get('/cc', (req, res) => {
    res.send('POST to this endpoint with JSON to convert to YAML')
})

app.post('/cc', (req, res) => {
    
    var counter = {
        host: service-counter,
        path: '/count',
        port: '8080',
        method: 'POST',
        body: {}
    };

    var converter = {
        host: service-converter,
        path: '/convert',
        port: '8081',
        method: 'POST',
        body: req.body
    };

    try {
        var countRequest = http.request(counter, (response) => {
            res.send('')
        })

        var convertRequest = http.request(converter, (response) => {
            res.send(response.body)
        })
    } catch(e) {
        res.send(e)
    }

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})