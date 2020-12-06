/**
 * @description test demo
 * @author Allen H.
 */


function sum(a, b) {
    return a + b
}

test('10 + 20 應該等於 30', ()=> {
    const res = sum(10, 20)
    expect(res).toBe(30)
})

