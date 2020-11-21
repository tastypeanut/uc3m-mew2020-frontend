if (getCookie('sessionID') == null) {
    window.location.href = "auth.html";
}

$(document).ready(
    function(){
        var GETrequestJSON = JSON.parse(httpGet("http://localhost:8000/getIncidents"));
        GETrequestJSON.forEach(incident => {
            consolo.log("XDDD")
        })
    }
);


function httpGet(Url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}