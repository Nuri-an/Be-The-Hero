const generateUniqueId = require('../../utilis/generateUniqueId');

describe('Generate Unique ID', () => {
	it('should generate an unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
	});
});