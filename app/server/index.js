const e = require('express')
const path = require('path')
const { readFile } = require('fs').promises

const app = e()

app.get('/', async (request, response) => {
    response.send( await readFile('./views/home.html', 'utf8'))
});

app.get('/app.js', async (request, response) => {
    response.sendFile(path.join(__dirname, '../public/app.js'))
});

app.use(e.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT || 1337, () => console.log('app is running'))