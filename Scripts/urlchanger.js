(function () {
    const path = window.location.pathname;
    if (path.endsWith('index.html')) {
        history.replaceState(null, '', path.replace('index.html', 'home'));
    } else if (path.endsWith('.html')) {
        history.replaceState(null, '', path.slice(0, -5));
    }
})();