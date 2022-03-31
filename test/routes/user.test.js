const request = require('supertest')

const app = require('../../src/app')

test('Deve listar todos os usuarios', () =>{
    return request(app).get('/users').then(res =>{
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0); //tamanho da resposta em array
    });
});

//test.skip -> pula o teste
//test.only -> executa apenas o teste

test.skip('Deve inserir Usuario com sucesso', () =>{
    const aleatorio = `${Date.now()}@mail.com`
    return request(app).post('/users')
        .send({name: 'wendell bruno', email: aleatorio, password: "123"}).then(res =>{
            expect(res.status).toBe(201)
        })
        
})

//promisse
test('Não deve inserir usuario sem nome', () =>{
    return request(app).post('/users')
        .send({email: 'aleatorio', password: "123"})
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Nome invalido')
        })
});

//async / await
test('Não deve inserir usuario sem email', async () =>{
   const resultado = await request(app).post('/users')
    .send({name: 'wendell bruno', password: "123"})
    expect(resultado.status).toBe(400)
    expect(resultado.body.error).toBe('Email invalido')
})

//done
test('Não deve inserir usuario sem senha', (done) =>{
     request(app).post('/users')
        .send({email: 'aleatorio', name: "Wendell Bruno"})
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Senha invalida')
            done()
        }).catch(erro => done.fail(erro))
})

test('Não deve inserir uma usuario com email repetido', () =>{
    return request(app).post('/users')
    .send(({name: 'wendell bruno', email: 'admin@admin', password: "123"}))
    .then(res =>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe('Email já cadastrado')
    })
})