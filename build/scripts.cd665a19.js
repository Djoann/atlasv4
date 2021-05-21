// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/scripts.js":[function(require,module,exports) {
$(document).ready(function () {
  "use strict";

  PageScroll(); // Loading Box (Preloader)

  function handlePreloader() {
    if ($('.preloader').length > 0) {
      $('.preloader').delay(200).fadeOut(500);
    }
  }

  function PageLoad() {
    $(window).on("load", function () {
      setInterval(function () {
        $('.preloader-wrap').fadeOut(300);
      }, 400);
      setInterval(function () {
        $('body').addClass('loaded');
      }, 600);
    });
  }

  handlePreloader();
  PageLoad();
  $('.carousel-card').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: false,
    autoWidth: true
  });
  $('.category-card').owlCarousel({
    loop: false,
    margin: 7,
    nav: true,
    autoplay: false,
    dots: false,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    autoWidth: true
  });
  $('.banner-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: true,
    navText: ["<i class='ti-angle-left icon-nav'></i>", "<i class='ti-angle-right icon-nav'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  $('.brand-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: false,
    dots: false,
    items: 5,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });
  $('.product-slider').owlCarousel({
    loop: true,
    margin: 3,
    // nav:true,
    // navText: ["<i class='ti-angle-left icon-nav'></i>","<i class='ti-angle-right icon-nav'></i>"],
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });
  $('.feedback-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    items: 5,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.feedback-slider2').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    items: 5,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
  $('.story-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    touchDrag: true,
    navText: ["<i class='ti-angle-left icon-nav'></i>", "<i class='ti-angle-right icon-nav'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  $('.product-slider-6').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: false,
    dots: false,
    items: 5,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1200: {
        items: 6
      }
    }
  });
  $('#lightbox').append('<div class="right-comment chat-left scroll-bar theme-dark-bg"><div class="card-body ps-2 pe-4 pb-0 d-flex"> <figure class="avatar me-3"><img src="images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1 text-left">Hurin Seary <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hour ago</span></h4> <a href="#" class="ms-auto"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a></div><div class="card-body d-flex ps-2 pe-4 pt-0 mt-0"> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark"><i class="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark"></i>22 Comment</a></div><div class="card w-100 border-0 shadow-none right-scroll-bar"><div class="card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-6.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Victor Exrixon <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Surfiya Zakir <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Goria Coast <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Hurin Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">David Goria <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Seary Victor <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Ana Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Studio Express <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div> </div></div></div>');
  $(window).on('load', function () {
    $('#Modalstories').modal('show');
  });
  $('.emoji-bttn').on('click', function () {
    $(this).parent().find('.emoji-wrap').toggleClass('active');
    return false;
  });
  $('.add-wishlist').on('click', function () {
    $(this).toggleClass('bg-greylight bg-danger');
    $(this).find('i').toggleClass('text-grey-900 text-white');
    return false;
  });
  $('.question-div .question-ans').on('click', function () {
    $('.question-ans').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $('.question-div .question-ans').on('click', function () {
    $('.question-ans').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $('.next-bttn').on('click', function () {
    var next_bttn_id = $(this).attr('data-question');
    $('.question-div .card-body').fadeOut(0);
    $('.question-div #' + next_bttn_id).fadeIn(500); // alert(next_bttn_id);
    // $(this).addClass('active');

    return false;
  });
  $('.dropdown-menu-icon').on('click', function () {
    $('.dropdown-menu-settings').toggleClass('active');
  });
  $('.menu-search-icon').on('click', function () {
    $('.app-header-search').addClass('show');
  });
  $('.searchbox-close').on('click', function () {
    $('.app-header-search').removeClass('show');
  });
  $('.switchcolor').on('click', function () {
    $(this).addClass('active');
    $('.backdrop').addClass('active');
    $('.switchcolor-wrap').addClass('active');
  });
  $('.sheet-close,.backdrop').on('click', function () {
    $('.switchcolor').removeClass('active');
    $('.backdrop').removeClass('active');
    $('.switchcolor-wrap').removeClass('active');
  });
  $('#darkmodeswitch').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-dark');
    } else {
      $('body').removeClass('theme-dark');
    }
  });
  $('.chat-active-btn').on('click', function () {
    $('.right-chat').toggleClass('active-sidebar');
    $('.main-content').toggleClass('right-chat-active');
    return false;
  });
  $(window).resize(function () {
    if ($(this).width() < 1600) {
      $('.right-chat').removeClass('active-sidebar');
    } else {
      $('.right-chat').addClass('active-sidebar');
    }
  });

  if ($(window).width() < 1600) {
    $('.right-chat').removeClass('active-sidebar');
  } else {
    $('.right-chat').addClass('active-sidebar');
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.scroll-header').addClass('bg-white shadow-xss');
    } else {
      $('.scroll-header').removeClass('bg-white shadow-xss');
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.middle-sidebar-header').addClass('scroll');
    } else {
      $('.middle-sidebar-header').removeClass('scroll');
    }
  });
  $('.nav-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.navigation').toggleClass('nav-active');
  });
  $('.model-popup-chat').on('click', function () {
    $('.modal-popup-chat').toggleClass('d-block');
    return false;
  });
  $('.modal-popup-chat a').on('click', function () {
    $('.modal-popup-chat').removeClass('d-block');
    return false;
  });
  $('.close-nav').on('click', function () {
    $('.navigation').removeClass('nav-active');
    return false;
  });
  $('.toggle-menu-color input').on('change', function () {
    if (this.checked) {
      $('.navigation').addClass('menu-current-color');
    } else {
      $('.navigation').removeClass('menu-current-color');
    }
  });
  $('.toggle-menu input').on('change', function () {
    if (this.checked) {
      $('.navigation,.main-content').addClass('menu-active');
    } else {
      $('.navigation,.main-content').removeClass('menu-active');
    }
  });
  $('.toggle-screen input').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-full');
    } else {
      $('body').removeClass('theme-full');
    }
  });
  $('.toggle-dark input').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-dark');
    } else {
      $('body').removeClass('theme-dark');
    }
  });
  $('input[name="color-radio"]').on('change', function () {
    if (this.checked) {
      $('body').removeClass('color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
      $('body').addClass('color-theme-' + $(this).val());
    }
  });
});

function PageScroll() {
  $(".scroll-tiger").on("click", function (e) {
    var $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top - 0
    }, 1500, 'easeInOutExpo');
    $('.overlay-section').removeClass('active');
    e.preventDefault();
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54095" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scripts.js"], null)
//# sourceMappingURL=/scripts.cd665a19.js.map