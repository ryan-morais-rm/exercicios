import { json, Router } from 'express';

const router = Router(); 

router.get('/text/lowercase', (req, res) => {
    return res.send('Lowercase');
}); 

router.get('/text/uppercase', (req, res) => {
    return res.send("Uppercase");
}); 

router.post('/text/lowercase', (req, res) => {
    const texto =  req.body.input; 
    const formatado = texto.toLowerCase(); 
    return json(res.send({
        "action": "lowercase", 
        "input": texto, 
        "output": formatado 
    }))
}); 

router.post('/text/uppercase', (req, res) => {
    const texto = req.body.input; 
    const formatado = texto.toUpperCase();  
    return json(res.send({
        "action": "uppercase", 
        "input": texto, 
        "output": formatado
    }))
}); 

router.get('/number/minimum', (req, res) => {
    const input = req.query.input;
    const vetor = input.split(','); 
    vetor.sort((a, b) => a - b); 
    let min_number = vetor[0]; 
    return json(res.send({
        "action": "minimum",
        "input": vetor, 
        "output": min_number 
    }))
}); 

router.get('/number/maximum', (req, res) => {
    const input = req.query.input;
    const vetor = input.split(',');
    vetor.sort((a, b) => a - b);  
    let max_number = vetor[2]; 
    return json(res.send({
        "action": "Maximum", 
        "input": vetor, 
        "output": max_number 
    }))
}); 


export default router; 