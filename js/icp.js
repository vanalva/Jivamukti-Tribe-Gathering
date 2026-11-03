/* ICP cards (icp.html): portrait <-> assisting photo.
 *
 * The crossfade itself is CSS (hover on devices with hover). This script adds the two things CSS cannot do:
 *   - keyboard focus on a card (Book Now focused with the keyboard) shows the assisting photo, like hover;
 *   - on touch devices a tap on the photo toggles between the two. Book Now is a separate link and is
 *     never touched by the toggle.
 * Both photos are in the page from the start (the assisting one is loading="eager"); decode() is asked for
 * up front so the first swap has no flash. A card without data-icp-swap (no assisting photo yet) is left alone.
 */
(function () {
  'use strict';
  var photos = document.querySelectorAll('[data-icp-swap]');
  if (!photos.length) return;
  var touch = window.matchMedia('(hover: none)');

  photos.forEach(function (photo) {
    var card = photo.closest('.icp_card');
    if (!card) return;
    var assist = photo.querySelector('.icp_img--assist');
    if (assist && assist.decode) assist.decode().catch(function () {});

    photo.addEventListener('click', function () {
      if (!touch.matches) return;                     // pointer devices use hover
      card.classList.toggle('is-assist');
    });
    card.addEventListener('focusin', function (e) {
      if (e.target.matches && e.target.matches(':focus-visible')) card.classList.add('is-focus');
    });
    card.addEventListener('focusout', function () {
      card.classList.remove('is-focus');
    });
  });
})();
