Classly
=======

A very light librairie for managing classes in javascript


Defining class
========

```
Classly.define("MyClassName", {
	attribute1: 0,
	attribute2: 0,

	myfunction: function(arg1, arg2) {

	}
});
```

Instanciate a class
========

```
var myclass = Classly.create("MyClassName");
```
or
```
var myclass = Class("MyClassName");
```

You can also extends from a class
```
var myclassextended = Classly.extends("MyClassName", {
	extentedAttribute: 0
});
```

Static classes
======

To define them:
```
Classly.statics("Main", {
	thisclassisstatic: true,

	init: function() {

	}
});
```

and to get it:
```
var main = Classly.get("Main");
```