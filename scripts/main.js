var getXML = new XMLHttpRequest();
getXML.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("textoutput").innerHTML = getXML.responseText;
    }
};
getXML.open("GET", "Data.xml", true);
getXML.send();