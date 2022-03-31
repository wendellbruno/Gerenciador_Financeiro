test('Devo conhecer as principais acertivas do jest', () =>{
    let number = null;
    expect(number).toBeNull()
    number = 10
    expect(number).not.toBeNull()
    expect(number).toBe(10)
})

test('Devo saber trabalhar com Objetos', () =>{
    const obj = {name: 'wendell', email: 'wendell@wendell.com'};
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('name', 'wendell')
    expect(obj.email).toBe('wendell@wendell.com') //para objeto existe diferença entre toBe e toEquelas
});