import chai from 'chai';

import * as ModuleMain from '../src/main.js';

describe("Check singleton:", function() {
  describe("Check script main.js:", function() {
    it("Check value has been modified:", function() {
      chai.expect(ModuleMain.singleton.value).to.equal(3);
    });
    it("Check access from secondary.js to the Singleton value modified at main.js:", function() {
      chai.expect(ModuleMain.singletonSecondary.value).to.equal(3);
    });
    it("Check singletos from main.js and secondary.js are the same:", function() {
      chai.expect(ModuleMain.singleton === ModuleMain.singletonSecondary).to.equal(true);
    });
  });
});
