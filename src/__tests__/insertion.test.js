const { default: InsertionSorter } = require('../sorting/algorithms/insertion')

describe('teste insertion', () => {
    it('Deve ser do tipo insertion', () => {
        let insertion = new InsertionSorter()
        expect(insertion.getType()).toBe('insertion')
    })

    it('Ordenar Array insertion', () => {
        let insertion = new InsertionSorter()
        let arr = [5, 3, 8, 4, 6];
        let response = [3, 4, 5, 6, 8]
        expect(insertion.sort(arr)).toStrictEqual(response)
    })

    it('Verifica Array Vazio insertion', () => {
        let insertion = new InsertionSorter()
        let arr = [];
        let response = []
        expect(insertion.sort(arr)).toStrictEqual(response)
    })
})