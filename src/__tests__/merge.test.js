const { default: MergeSorter } = require('../sorting/algorithms/merge')

describe('teste merge', () => {
    it('Deve ser do tipo merge', () => {
        let merge = new MergeSorter()
        expect(merge.getType()).toBe('merge')
    })

    // it('Ordenar Array merge', () => {
    //     let merge = new MergeSorter()
    //     let arr = [5, 3, 8, 4, 6];
    //     let response = [3, 4, 5, 6, 8]
    //     expect(merge.sort(arr)).toEqual(response)
    // })

    it('Verifica Array Vazio merge', () => {
        let merge = new MergeSorter()
        let arr = [];
        let response = []
        expect(merge.sort(arr)).toStrictEqual(response)
    })
})