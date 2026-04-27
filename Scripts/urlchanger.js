(function () {
    const path = window.location.pathname;
    if (path.endsWith('.html')) {
      const clean = path.slice(0, -5);
      history.replaceState(null, '', clean);
    }
  }
)();