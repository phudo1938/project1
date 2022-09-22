
var mobileHeader = document.getElementById('headerID');
var mobileID = document.getElementById('menuID');
var rightID = document.getElementById('rightID');

mobileID.onclick = function() {
    var isClosed = mobileHeader.clientHeight === 65;
    if (isClosed) {
        mobileHeader.style.height = 'auto';
    } else {
        mobileHeader.style.height = '65px';
    } 
}