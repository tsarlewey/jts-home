const e = require('express')
const { readFile } = require('fs').promises

const app = e()

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8'))
});

app.listen(process.env.PORT || 1337, () => console.log('app is running'))