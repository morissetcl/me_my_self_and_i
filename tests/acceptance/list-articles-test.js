import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | list articles', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show articles as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/articles', 'should redirect automatically');
 });

 test('should link to information about the company.', async function (assert) {
   await visit('/');
   await click(".menu-about");
   assert.equal(currentURL(), '/about', 'should navigate to about');
 });

 test('should link to contact information.', async function (assert) {
   await visit('/');
   await click(".menu-contact");
   assert.equal(currentURL(), '/contact', 'should navigate to contact');
 });
 test('should list available article.', async function(assert) {
   await visit('/');
   assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 1 listings');
 });
});
