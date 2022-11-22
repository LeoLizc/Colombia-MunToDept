// create an express app
const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 5000);

// uses
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// read the Departamentos_y_Municipios_de_Colombia.csv file
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const map = new Map();

// library to concatenate paths
const path = require('path');

// concatenating the path
fs.createReadStream(path.join(__dirname, 'Departamentos_y_Municipios_de_Colombia.csv'))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results);
        // convert the csv file to map with the format {municipio: departamento}
        results.forEach((item) => {
            // make sure the municipio is lower case and without accents
            // and department is also without accents
            const municipio = item.MUNICIPIO.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const departamento = item.DEPARTAMENTO.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            map.set(municipio, departamento);
            // console.log(results);
            // map.set(item.Municipio, item.Departamento);
        });
    });
    
console.log(map);

// release the memory
// results.length = 0;
delete results;

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/:municipio', (req, res) => {
    const municipio = req.params.municipio;
    console.log(municipio);
    let departamento = '';
    switch (municipio) {
        case 'Bogota':
            departamento = 'Cundinamarca';
            break;
        case 'Cartagena':
            departamento = 'Bolivar';
            break;
        case 'Barranquilla':
            departamento = 'Atlantico';
            break;
        case 'Santa Marta':
            departamento = 'Magdalena';
            break;
        case 'San Andres':
            departamento = 'San Andres';
        default:
            departamento = map.get(municipio.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || municipio;
        }
    res.send(departamento);
    // res.send(departamento);
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});