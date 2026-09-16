// EZ Marketing: booking modal and trade-aware calendar, on top of pl.js.
(function () {
  'use strict';

  var LABELS = { roofing: 'Roof coating strategy call', paving: 'Paving strategy call' };

  // A widget is either one iframe (site-wide booking link) or a trade chooser + two calendars.
  function setupWidget(root) {
    var chooser = root.querySelector('.ez-book__chooser');
    var calendar = root.querySelector('.ez-book__calendar');

    function load(frame) {
      if (frame && !frame.getAttribute('src')) frame.setAttribute('src', frame.getAttribute('data-src'));
    }

    function pick(trade) {
      if (!chooser) return;
      root.querySelectorAll('iframe[data-cal]').forEach(function (f) {
        var on = f.getAttribute('data-cal') === trade;
        f.hidden = !on;
        if (on) load(f);
      });
      root.querySelector('[data-trade-label]').textContent = LABELS[trade] || '';
      chooser.hidden = true;
      calendar.hidden = false;
      root.setAttribute('data-trade', trade);
    }

    function reset() {
      if (!chooser) return;
      chooser.hidden = false;
      calendar.hidden = true;
      root.removeAttribute('data-trade');
    }

    root.addEventListener('click', function (e) {
      var choice = e.target.closest('[data-trade]');
      if (choice && choice !== root) return pick(choice.getAttribute('data-trade'));
      if (e.target.closest('[data-trade-change]')) reset();
    });

    return {
      open: function (trade) {
        if (!chooser) return load(root.querySelector('iframe[data-src]'));
        if (trade) pick(trade);
        else if (!root.getAttribute('data-trade')) reset();
      },
    };
  }

  // Inline widgets (Contact page) start once the page has loaded, so the calendar
  // iframe doesn't hold up the template's preloader.
  var inline = [];
  document.querySelectorAll('[data-book-widget]').forEach(function (el) {
    if (!el.closest('#ez-booking')) inline.push({ el: el, api: setupWidget(el) });
  });
  function startInline() {
    inline.forEach(function (w) { w.api.open(w.el.getAttribute('data-trade-default') || ''); });
  }
  if (document.readyState === 'complete') startInline();
  else window.addEventListener('load', startInline);

  // ---------- Booking modal ----------
  var modal = document.getElementById('ez-booking');
  if (!modal) return;
  var widget = setupWidget(modal.querySelector('[data-book-widget]'));
  var lastFocus = null;

  function openBooking(trade) {
    lastFocus = document.activeElement;
    widget.open(trade);
    modal.hidden = false;
    document.documentElement.classList.add('pl-modal-open');
    void modal.offsetWidth;
    modal.classList.add('is-open');
    modal.querySelector('.pl-modal__close').focus();
    document.body.classList.remove('mobile-menu-visible');
  }

  function closeBooking() {
    modal.classList.remove('is-open');
    document.documentElement.classList.remove('pl-modal-open');
    setTimeout(function () { modal.hidden = true; }, 250);
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-booking]');
    if (trigger) {
      e.preventDefault();
      return openBooking(trigger.getAttribute('data-booking') || '');
    }
    if (e.target.closest('#ez-booking [data-close]')) closeBooking();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeBooking();
  });
})();
