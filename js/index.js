/**
 * Created by ifmvo on 17-5-18.
 */

var pList = document.getElementsByTagName("p");
alert(pList.length);

for (var i=0; i<pList.length; i++){
    var title = pList[i].getAttribute("title");
    if (title != null){
        alert(title);
    }
}