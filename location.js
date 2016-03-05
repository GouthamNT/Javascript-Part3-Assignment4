

function findPosition(element) {
    var id = document.querySelector(element);
    
    var x = id.offsetLeft + id.clientLeft - id.scrollLeft,
        y = id.offsetTop + id.clientTop - id.scrollTop;
    
    var result = document.querySelector('#result');
    result.setAttribute ('value','X : ' + x  + ' Y : ' + y + ' Time : ' + Date());
}
