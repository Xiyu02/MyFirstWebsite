function setCookie(name, value, exist_ms)
{
    var d = new Date();
    d.setTime(d.getTime() + exist_ms);
    var expires = "expires="+d.toGMTString();
    document.cookie = name+"="+value+"; "+expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}