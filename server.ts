import express,{Application, Request, Response} from 'express';
const app: Application = express();
const port = process.env.PORT || 8000;
import bodyParser from 'body-parser';
import cors from 'cors';

///////////////////////////
//necessary
//////////////////////////
app.set('view engine', 'ejs');
app.use(express.json({ limit: "5kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: "5kb"}));
app.use(cors());


//////////////////////////////////
//API
/////////////////////////////////
import insertAge from './api/test';
app.use('/', insertAge);


/////////////////////////////////
//Render Frontend
////////////////////////////////

const testGraph= 1729;
app.get('/', (req: Request, res: Response)=>{
	res.render('test', {
		testGraph: testGraph,
	});
});


app.listen(port, ()=>console.log(`graph-project listen on localhost: ${port}`));