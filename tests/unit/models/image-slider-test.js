import { moduleForModel, test } from 'ember-qunit';

moduleForModel('image-slider', 'Unit | Model | image slider', {
  // Specify the other units that are required for this test.
  needs: ['model:image', 'model:slider']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
