var MILLISECONDS_IN_MINUTE=6e4;module.exports=function(e){var I=new Date(e.getTime()),t=I.getTimezoneOffset();I.setSeconds(0,0);var N=I.getTime()%MILLISECONDS_IN_MINUTE;return t*MILLISECONDS_IN_MINUTE+N};