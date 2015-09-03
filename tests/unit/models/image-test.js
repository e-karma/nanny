import { moduleForModel, test } from 'ember-qunit';

moduleForModel('image', 'Unit | Model | image', {
  // Specify the other units that are required for this test.
  needs: ['model:slider']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
