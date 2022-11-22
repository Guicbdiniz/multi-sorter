import QuickSorter from "../sorting/algorithms/quick";

describe('teste quick', () => {
    it('Deve ser do tipo quick', () => {
        let quick = new QuickSorter();
        expect(quick.getType()).toBe('quick')
    })
})