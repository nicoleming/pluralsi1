/**
 * Created by nicolemi on 5/25/2017.
 */
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our test', () => {
	it('test on should pass', () => {
		expect(true).to.eql(true);
	});

});

describe('test index.js using DOM', () => {
	it('should say Development Package', (done) => { //done makes the test asynchronous test so it waits for callback otherwise test always pass even if it shouldnt

		const index = fs.readFileSync('./src/index.html', "utf-8"); // represents the content of index.html
		jsdom.env(index, function(err, window)  { //represents a browser window // save the content into memory
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.eql("Development Package");
			done();
			window.close(); // release memory
		});
	});
});
