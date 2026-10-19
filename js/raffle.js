/* Raffle form (win.html).
 *
 * The form posts to the client's form_handler/send.php, which sends no CORS headers, so a normal
 * fetch could not read the reply. Without JavaScript the form simply POSTs (the browser then
 * shows whatever send.php prints). With JavaScript we post the same urlencoded payload with
 * mode "no-cors": the request goes out, the reply is opaque, and we show a success note when the
 * request completed and an error note when the network failed. Server-side failures (a 500 from
 * send.php) cannot be seen from here.
 *
 * The honeypot field `website` is hidden by CSS; if a bot fills it we pretend to succeed and send nothing.
 */
(function () {
  'use strict';
  var form = document.querySelector('[data-raffle-form]');
  if (!form || !window.fetch || !window.FormData || !window.URLSearchParams) return;

  var status = form.querySelector('[data-raffle-status]');
  var button = form.querySelector('button[type="submit"]');

  function say(kind, text) {
    if (!status) return;
    status.textContent = text;
    status.classList.remove('is-error', 'is-success');
    if (kind) status.classList.add('is-' + kind);
    status.hidden = false;
  }

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) return;          // the browser shows its own required/email messages
    event.preventDefault();

    var honeypot = form.elements.website;
    if (honeypot && honeypot.value) {           // bot: report success, send nothing
      say('success', form.getAttribute('data-success'));
      return;
    }

    var body = new URLSearchParams();
    new FormData(form).forEach(function (value, key) {
      if (typeof value === 'string') body.append(key, value);
    });

    if (button) button.disabled = true;
    say('', form.getAttribute('data-sending'));

    fetch(form.getAttribute('action'), { method: 'POST', body: body, mode: 'no-cors', credentials: 'omit' })
      .then(function () {
        say('success', form.getAttribute('data-success'));
        form.reset();
      })
      .catch(function () {
        say('error', form.getAttribute('data-error'));
      })
      .then(function () {
        if (button) button.disabled = false;
      });
  });
})();
