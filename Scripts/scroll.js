let iframeAtBoundary = { top: true, bottom: false };

window.addEventListener("message", (e) => {
    if (e.data?.type === "iframeScrollState") {
        iframeAtBoundary = e.data;
    }
});

const homepage = document.querySelector(".homepage");
const gamesSection = document.querySelector("#games");

gamesSection.addEventListener("wheel", (e) => {
    const scrollingDown = e.deltaY > 0;
    const scrollingUp = e.deltaY < 0;

    if ((scrollingDown && iframeAtBoundary.bottom) ||
        (scrollingUp && iframeAtBoundary.top)) {
        return;
    }

    e.stopPropagation();
}, { passive: false });