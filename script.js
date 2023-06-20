function run() {
    menuHambur.onclick = toggleMenuHambur;
}

function toggleMenuHambur() {
    navigatorHambur.classList.toggle("menu-hambur-active");
}
run();