import { findMaxHeight } from 'waterWallLogic';


describe('findMaxHeight', () => {
  describe('when given an array of numbers', () => {
    it('returns [9, 7] from [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]', () => {
      expect(findMaxHeight([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])[0]).toBe(9);
      expect(findMaxHeight([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])[1]).toBe(7);
    });
  })
});