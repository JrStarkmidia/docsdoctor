(function () {
  const homePath = "/";
  const homeTitle = "StarkMidia Doctor - Guia do Usuário";

  function updateHomeTitle() {
    if (window.location.pathname === homePath && document.title !== homeTitle) {
      document.title = homeTitle;
    }
  }

  updateHomeTitle();

  new MutationObserver(updateHomeTitle).observe(document.head, {
    childList: true,
    subtree: true,
  });
})();
