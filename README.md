cordova-plugin-magnetometer
====================

A magnetic field detector plugin. It displays the raw x, y, and z magnetometer values and a computed magnitude of the magnetic field.

Installation
------------

<code> cordova plugin add https://github.com/mrameezraja/cordova-plugin-magnetometer </code>


Methods
-------
- cordova.plugins.magnetoMeter.watchMagnitude
- cordova.plugins.magnetoMeter.stop


cordova.plugins.magnetoMeter.watchMagnitude
-------------------------------------------

<pre>
<code>
  cordova.plugins.magnetoMeter.watchMagnitude(function(readings){
    console.log(JSON.stringify(readings));
  }, function(error){
    console.log(error);
  })
</code>
</pre>

Readings:
- magnitude
- x
- y
- z

cordova.plugins.magnetoMeter.stop
--------------------------------

<pre>
<code>
  cordova.plugins.magnetoMeter.stop(function(result){
      console.log(result);
  }, function(error){
    console.log(error);
  })
</code>
</pre>


Supported Platforms
-------------------

- IOS
- Android (In Progress)

