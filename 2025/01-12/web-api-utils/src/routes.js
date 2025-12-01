import { Router } from 'express';

const router = Router();

router.get('/uppercase', (req, res) => {
    return res.send("Uppercase"); 
}); 

router.get('/lowercase', (req, res) => {
    return res.send("Lowercase"); 
}); 

router.post('/text/:action', (req, res) => {
    const texto = req.body.input;
    const action = req.params.action;
    if (action == 'lowercase') {
        return res.json({
            action: "lowercase",
            input: texto, 
            output: texto.toLowerCase()
        }); 
    }
    return res.json({
        action: "uppercase",
        input: texto,
        output: texto.toUpperCase()
    })
});

router.get('/number/:action', (req, res) => {
    const input = req.query.input;
    const action = req.params.action;
    const vetor = input.split(',').map(Number);
    
    vetor.sort((a, b) => a - b);

    let resultado;

    if (action === 'minimum') {
        resultado = vetor[0]; 
    } else if (action === 'maximum') {
        resultado = vetor[vetor.length - 1]; 
    }

    return res.json({
        action: action,
        input: vetor,
        output: resultado
    });
});

export default router;