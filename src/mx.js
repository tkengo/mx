var Mx = {};
Mx.Math  = {};

var asMath = (function() {
  function abs()   { return this.map(function(v) { return Math.abs(v);   }); };
  function acos()  { return this.map(function(v) { return Math.acos(v);  }); };
  function asin()  { return this.map(function(v) { return Math.asin(v);  }); };
  function atan()  { return this.map(function(v) { return Math.atan(v);  }); };
  function atan2() { return this.map(function(v) { return Math.atan2(v); }); };
  function ceil()  { return this.map(function(v) { return Math.ceil(v);  }); };
  function cos()   { return this.map(function(v) { return Math.cos(v);   }); };
  function exp()   { return this.map(function(v) { return Math.exp(v);   }); };
  function floor() { return this.map(function(v) { return Math.floor(v); }); };
  function log()   { return this.map(function(v) { return Math.log(v);   }); };
  function round() { return this.map(function(v) { return Math.round(v); }); };
  function sin()   { return this.map(function(v) { return Math.sin(v);   }); };
  function sqrt()  { return this.map(function(v) { return Math.sqrt(v);  }); };
  function tan()   { return this.map(function(v) { return Math.tan(v);   }); };

  return function() {
    this.abs   = abs;
    this.acos  = acos;
    this.asin  = asin;
    this.atan  = atan;
    this.atan2 = atan2;
    this.ceil  = ceil;
    this.cos   = cos;
    this.exp   = exp;
    this.floor = floor;
    this.log   = log;
    this.round = round;
    this.sin   = sin;
    this.sqrt  = sqrt;
    this.tan   = tan;
  };
})();

Mx.Utils = {
  getPow: function(p) {
    if (p == 0) {
      return function(x) { return 1; };
    } else if (p == 2) {
      return function(x) { return x * x; };
    } else {
      return function(x) { return Math.pow(x, p); };
    }
  },

  sequence: function(from, to) {
    var size = to - from + 1;
    var sequence = new Array(size);
    for (var i = 0; i < size; ++i) {
      sequence[i] = i;
    }
    return sequence;
  },

  randn: function (rows, cols) {
    if (!rows) {
      var x1 = Math.random();
      var x2 = Math.random();
      return Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
    }

    cols = cols || 1;

    var rands = [];
    for (var r = 0; r < rows; ++r) {
      var row = [];
      for (var c = 0; c < cols; c += 2) {
        row[c] = Mx.Utils.randn();
      }
      rands[r] = row;
    }

    return Matrix.create(rands);
  }
};
