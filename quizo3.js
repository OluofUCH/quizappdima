history.pushState(null,null,window.location.href);

window.addEventListener('popstate', function(event){
    history.pushState(null,null, window.location.href);
});