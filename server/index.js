import express from 'express';
import cors from 'cors';
import features from './data/features.js'

const app = express();
app.use(cors());
app.use(express.json());


//Endpoint to search for anatomical features
app.get('/', (req, res) => {

    const q = req.query.q?.toLowerCase() || ''; //takes search query and changes it to lowercase or it is an empty string
  
    const results = features
    .filter(feature => feature.keywords.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort the results in alphabetical order

    res.send(results); //sends results which is a new array that has only the results that fit the typed in characters
});

const port = process.env.PORT || 2999;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));