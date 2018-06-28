// Import only what we need from express
import { Request, Response, Router } from 'express';

// import { config } from 'dotenv';

// import the book module
// import { favoriteBook, Book } from './book';
import { Book, favoriteBook } from '../testbbb/book';



const router: Router = Router();


router.get('/', (req: Request, res: Response) => {
    console.log('routes/index.ts router.get("/")');
    res.status(200).json({
        message: 'routes/index.ts router.get("/")',
    });
});



router.get('/test', (req: Request, res: Response) => {
    console.log('routes/index.ts router.get("/test")');
    const bk = new Book('someTitle', 'someAuthor'),
        say = bk.describeBook();
    console.log(say);

    let a = {
        prop1: 1 as number,
        prop2: 2 as number,
    };
    a.prop1 = 3;
    a.prop2 = 4;

    console.log(a);

    let testenv = process.env.TESTENV;
    console.log(testenv);


    res.status(200).json({
        message: 'routes/index.ts router.get("/test")',
    });
});


// Export the express.Router() instance to be used by app.ts
export const indexRouter: Router = router;
