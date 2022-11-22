import ShellSorter from "../sorting/algorithms/shell";

describe('teste shell', () => {
    it('Deve ser do tipo shell', () => {
        let shell = new ShellSorter()
        expect(shell.getType()).toBe('shell')
    })

    it('Ordenar Array shell', () => {
        let shell = new ShellSorter()
        let arr = [5, 3, 8, 4, 6];
        let response = [3, 4, 5, 6, 8]
        expect(shell.sort(arr)).toEqual(response)
    })

    it('Verifica Array Vazio shell', () => {
        let shell = new ShellSorter()
        let arr = [];
        let response = []
        expect(shell.sort(arr)).toStrictEqual(response)
    })
})