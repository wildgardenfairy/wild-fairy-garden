(function(){
  // ── ZOOM TRANSITION ─────────────────────────────────────────────
  window.addEventListener('pageshow', function(){
    var ov = document.getElementById('zoom-overlay');
    if (!ov) return;
    ov.style.transition = 'none';
    ov.style.transform  = '';
    ov.style.opacity    = '0';
    ov.classList.remove('active');
  });

  function zoomTo(href, el) {
    var ov = document.getElementById('zoom-overlay');
    if (!ov) { window.location.href = href; return; }
    if (el) {
      var r  = el.getBoundingClientRect();
      var cx = Math.min(Math.max(r.left + r.width  / 2, 0), window.innerWidth);
      var cy = Math.min(Math.max(r.top  + r.height / 2, 0), window.innerHeight);
      ov.style.transition    = 'none';
      ov.style.transformOrigin = cx + 'px ' + cy + 'px';
      ov.style.transform     = 'scale(0.02)';
      ov.style.opacity       = '1';
      ov.offsetHeight;
      ov.style.transition = 'transform 0.52s cubic-bezier(0.4,0,0.2,1)';
      ov.style.transform  = 'scale(50)';
    } else {
      ov.style.transition = 'opacity 0.4s ease';
      ov.style.opacity    = '1';
    }
    ov.classList.add('active');
    setTimeout(function(){ window.location.href = href; }, 500);
  }

  document.querySelectorAll('a[href]').forEach(function(link){
    var href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;
    link.addEventListener('click', function(e){
      e.preventDefault();
      zoomTo(href, link);
    });
  });

  // ── MOBILE BOTTOM NAV ───────────────────────────────────────────
  var pages = [
    { href: 'index.html',     icon: '🗺',  label: 'map'    },
    { href: 'about.html',     icon: '🏔',  label: 'peak'   },
    { href: 'videos.html',    icon: '🌲',  label: 'hollow' },
    { href: 'blog.html',      icon: '🌳',  label: 'tree'   },
    { href: 'contact.html',   icon: '🪣',  label: 'well'   },
    { href: 'community.html', icon: '🐸',  label: 'pond'   },
    { href: 'reviews.html',   icon: '🌼',  label: 'field'  },
  ];

  var cur = window.location.pathname.split('/').pop() || 'index.html';
  var nav = document.createElement('nav');
  nav.className = 'mob-bottom-nav';
  nav.innerHTML = pages.map(function(p){
    var active = (p.href === cur) ? ' active' : '';
    return '<a href="' + p.href + '" class="mob-nav-item' + active + '">'
      + '<span class="mn-icon">' + p.icon  + '</span>'
      + '<span class="mn-lbl">'  + p.label + '</span>'
      + '</a>';
  }).join('');
  document.body.appendChild(nav);
})();
