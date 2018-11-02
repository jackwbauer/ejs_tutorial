const express = require('express');
const routes = require('./routes/index.js');
const port = 3000;

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

routes(app);

app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});