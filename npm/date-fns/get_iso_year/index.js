var parse=require("../parse/index.js"),startOfISOWeek=require("../start_of_iso_week/index.js");function getISOYear(e){var r=parse(e),t=r.getFullYear(),a=new Date(0);a.setFullYear(t+1,0,4),a.setHours(0,0,0,0);var s=startOfISOWeek(a),i=new Date(0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);var u=startOfISOWeek(i);return r.getTime()>=s.getTime()?t+1:r.getTime()>=u.getTime()?t:t-1}module.exports=getISOYear;