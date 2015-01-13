define(['jquery', './chart', './viewportSelectors'], function ($) {
  window.App.book.on('render', function () {
    var elements = $('.progress .progress-bar');

    function onScroll(event) {
      var inViewport = elements.filter(':in-viewport');
      if (!inViewport.length) {
        return;
      }
      elements = elements.not(inViewport);
      inViewport.progressbar();
      if (!elements.length) {
        $('#scrollview').off('scroll', onScroll);
      }
    }

    if (elements.length) {
      $('#scrollview').bind("scroll", onScroll);
      onScroll();
    }

    $('.textTooltip').each(function (idx, el) {
      var $el = $(el);
      var bibliography = window.bibliography[$el.attr("id")];
      var content = '<div>'+ bibliography.author + ', <em>' + bibliography.title + '</em>(' + bibliography.location + ': ' + bibliography.publisher + (bibliography.year ? (', ' + bibliography.year) : '') + ') ' + (bibliography.pages ? (bibliography.pages + ', ') : '') + (bibliography.extra ? bibliography.extra : '') + '</div>';
      $el.attr('data-content', content).html(bibliography.ref);
    }).popover({html: true});
  });
});
  WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro::latin,latin-ext', 'Exo:400,700:latin,latin-ext' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  window.bibliography = {
    livingstone2009: {
      author: "Livingstone, S.",
      ref: "Livingstone: 2009",
      title: "Children and the Internet: Great expectations, challenging realities.",
      year: "2009",
      location: "Cambridge",
      publisher: "Polity",
    },
    ito2009: {
      author: "Ito, M et al.",
      ref: "Ito: 2009",
      title: "Hanging out, messing around, and geeking out: Kids living and learning with new media.",
      location: "Cambridge, MA",
      publisher: "MIT Press"
    },
  };
