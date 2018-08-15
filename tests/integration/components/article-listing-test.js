import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | rental listing', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.article = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      summerize: 'coucou',
      link: 'https://ok.fr'
    });
  });

  test('should display rental details', async function(assert) {
    await render(hbs`{{article-listing article=article}}`);
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
    assert.equal(this.element.querySelector('.listing .summerize').textContent.trim(), 'coucou', 'coucou');
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{article-listing article=article}}`);
    assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
    await click('.image');
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });
});
