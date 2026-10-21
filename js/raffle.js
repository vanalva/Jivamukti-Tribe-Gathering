/* Raffle form (win.html).
 *
 * The form posts natively to the client's form_handler/send.php, which redirects to the hidden
 * `redirect` URL (win-thanks.html) after sending, so the thank-you page is the success state.
 * This script only keeps two things: the browser's own validation (required, email) runs as usual
 * because we never intercept a valid submit, and the honeypot `website` field, which hidden CSS keeps
 * empty for people: if a bot fills it we skip the handler and go straight to the thank-you page.
 */
(function () {
  'use strict';
  var form = document.querySelector('[data-raffle-form]');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    var honeypot = form.elements.website;
    if (!honeypot || !honeypot.value) return;   // a person: let the form submit normally
    event.preventDefault();                      // a bot: send nothing
    var redirect = form.elements.redirect;
    window.location.href = redirect && redirect.value ? redirect.value : 'win-thanks.html';
  });
})();
