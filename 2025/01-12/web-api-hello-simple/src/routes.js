import { Router } from 'express'; 

const router = Router(); 

class HttpError extends Error {
    constructor(message, status=400) {
        super(message);
        this.status=status 
    }
}

router.get('/', (req, res) => {
    return res.send('Hello, World!'); 
});

export default router;