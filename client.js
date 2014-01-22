var _ = require('lodash');

describe(buildType, function() {
  var _buildType = buildType;
  it('load worker', function(done) {
    var worker = new Worker('./build/' + _buildType + '/worker.js');
    worker.addEventListener('message', function(e) {
      try {
        chai.assert.equal(e.data, 'hi');
        done();
      } catch(fail) {
        done(fail);
      }
    });
  });
});
