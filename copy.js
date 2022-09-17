window.addEventListener('load', loadCopyLinks);
//Final all anchors with copy class, catch click event, and copy href to clipboard.
function loadCopyLinks(){
    //Final all copy links
    let _copy_links = document.querySelectorAll("a.copy");
    _copy_links.forEach(function(i){
        i.onclick = onClick_copyLink;
    });
}
function onClick_copyLink(event){
    event.preventDefault();
    var _link = this;
    if (copyTextToClipboard){
        //Success! Apply copied class to element.
        this.classList.add("copied");
        this.removeCopiedClass = function(){
            _link.classList.remove("copied");
        };
        this.removeCopiedTimer = setTimeout(this.removeCopiedClass, 2000);
        copyTextToClipboard(this.href);
    }
}
function copyTextToClipboard(text){
    try{
        navigator.clipboard.writeText(text);
        return true;
    } catch(err){
        console.log(err);
    }
    return false;
}