function createCookie(cname, value, expiredays) {
    var expiredate = new Date()
    expiredate.setDate(expiredate.getDate() + expiredays);
    var cvalue = escape(value) + ((expiredays == null) ? "" : "; expires=" + expiredate.toUTCString() );
    document.cookie = cname + "=" + cvalue + "; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setMode(mode) {
  createCookie('mode', mode, 9999999)
  window.location.reload(true)
}