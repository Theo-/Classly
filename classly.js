(function() {
	window.Classly = {};

	window.Classly = {
		classesData: {},
		staticsClasses: {},

		_define: function(name, opts, isStatic) {
			if (isStatic) {
				this.staticsClasses[name] = opts;
			} else {	
				this.classesData[name] = opts;
			}
		},
		create: function(name) {
			var classToReturn = this.classesData[name];
			return this.clone(classToReturn);
		},
		get: function(name) {
			return this.staticsClasses[name];
		},
		statics: function(name, opts) {
			this._define(name, opts, true);
		},
		define: function(name, opts) {
			this._define(name, opts, false);
		},
		extends: function(obj, extra) {
			var toReturn = this.create(obj);
		    for(var key in extra) {
		        if(extra.hasOwnProperty(key)) {
		        	toReturn[key] = null;
		            toReturn[key] = this.clone(extra[key]);
		        }
		    }
		    return toReturn;
		},
		clone: function(obj) {
		    if(obj == null || typeof(obj) != 'object')
		        return obj;

		    var temp = obj.constructor(); // changed

		    for(var key in obj) {
		        if(obj.hasOwnProperty(key)) {
		            temp[key] = this.clone(obj[key]);
		        }
		    }
		    return temp;
		}
	}

	window.Class = function(name) {
		return Classly.create(name);
	}
})(window);