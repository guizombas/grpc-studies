import express from 'express';

const app = express();

app.get('/', (_req, res) => {
    res.send('App running');
});

app.post('/operation', (req, res) => {
    const { operation } = req.body;
    res.send('Operation received: ' + operation);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});