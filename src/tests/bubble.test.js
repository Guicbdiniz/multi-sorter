const { default: BubbleSorter } = require('../sorting/algorithms/bubble')

describe('teste Bubble', () => {
    it('Deve ser do tipo bubble', () => {
        let b = new BubbleSorter();
        expect(b.getType()).toBe('bubble')
    })

    it('Ordenar Array Bubble', () => {
        let b = new BubbleSorter();
        let arr = [5, 3, 8, 4, 6];
        let response = [3, 4, 5, 6, 8]
        expect(b.sort(arr)).toStrictEqual(response)
    })

    it('Verifica Array Vazio Bubble', () => {
        let b = new BubbleSorter();
        let arr = [];
        let response = []
        expect(b.sort(arr)).toStrictEqual(response)
    })
})