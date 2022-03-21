import express,{Request, Response} from 'express';
const router = express.Router();
import { TypeDB, SessionType, TransactionType } from "typedb-client";

router.post('/api/test', (req: Request, res: Response)=>{

    const data = req.body;
    console.log(data);

    try {

        const age:string= data.age; //for example the age of an user

        async function createTrans (test:any) {
            const client = TypeDB.coreClient("0.0.0.0:1729");
            const session = await client.session(test, SessionType.DATA);
        
            //Write something into database
            const writeTransaction = await session.transaction(TransactionType.WRITE); 
            
            const insertStream = await writeTransaction.query.insert(`insert $x isa person, has age "${age}";`);
            const conceptMaps = await insertStream.collect();
            console.log("Inserted a person" + conceptMaps[0].get("x"));
        
            await writeTransaction.commit();  //with commit the task will be closed
            //end write

            await session.close();
            // a client must always be closed
            client.close();
        
        };
        createTrans('test');
    
        res.status(200).send('OK');
        
    } catch (error) {
        if(error){console.log(error)};
    };
    

});

export default router;