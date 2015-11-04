describe('Basic XMLHttpRequest integration tests', function() {
  var xhr;

  var runTest = function(done, selector, testName) {
    freedom('scripts/test/demo.json').then(function(Demo) {
      var demo = new Demo(selector);
      demo[testName]().then(function(ret) {
        expect(ret).toEqual(jasmine.any(String));
        done();
      }).catch(function(errMsg) {
        console.log(errMsg);
        expect(errMsg).toBeUndefined();
        expect(true).toBe(false);
        done();
      });
    });
  };

  it('corexhr: constructs XHRs', function(done) {
    runTest(done, 'corexhr', 'testHasXhr');
  });

  it('coretcpsocket: constructs XHRs', function(done) {
    runTest(done, 'coretcpsocket', 'testHasXhr');
  });

  it('corexhr: load event', function(done) {
    runTest(done, 'corexhr', 'testLoadEvent');
  });

  it('corexhr: error event', function(done) {
    runTest(done, 'corexhr', 'testErrorEvent');
  });

  it('corexhr: timeout event', function(done) {
    runTest(done, 'corexhr', 'testTimeoutEvent');
  });

  it('corexhr: beforeredirect event', function(done) {
    runTest(done, 'corexhr', 'testBeforeRedirectEvent');
  });

  it('corexhr: gets response on load', function(done) {
    runTest(done, 'corexhr', 'testLoadGetResponse');
  });

  it('corexhr: gets response on done', function(done) {
    runTest(done, 'corexhr', 'testDoneGetResponse');
  });

});
