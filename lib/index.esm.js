function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function externalComponent(_x) {
  return _externalComponent.apply(this, arguments);
}

function _externalComponent() {
  _externalComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var name;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = url.split('/').reverse()[0].match(/^(.*?)\.umd/)[1];

            if (!window[name]) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", window[name]);

          case 3:
            window[name] = new Promise(function (resolve, reject) {
              var script = document.createElement('script');
              script.async = true;
              script.addEventListener('load', function () {
                resolve(window[name]);
              });
              script.addEventListener('error', function () {
                reject(new Error("Error loading ".concat(url)));
              });
              script.src = url;
              document.head.appendChild(script);
            });
            return _context.abrupt("return", window[name]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _externalComponent.apply(this, arguments);
}

export { externalComponent };
