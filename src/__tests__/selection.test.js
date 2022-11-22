import SelectionSorter from "../sorting/algorithms/selection"

describe('teste selection', () => {
    it('Deve ser do tipo selection', () => {
        let selection = new SelectionSorter();
        expect(selection.getType()).toBe('selection')
    })

    it('Ordenar Array selection', () => {
        let selection = new SelectionSorter();
        let arr = [5, 3, 8, 4, 6];
        let response = [3, 4, 5, 6, 8]
        expect(selection.sort(arr)).toStrictEqual(response)
    })

    it('Verifica Array Vazio selection', () => {
        let selection = new SelectionSorter();
        let arr = [];
        let response = []
        expect(selection.sort(arr)).toStrictEqual(response)
    })
})