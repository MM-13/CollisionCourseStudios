const homepage = document.querySelector(".homepage");
    const iframe = document.querySelector(".game-list");

    homepage.addEventListener("scroll", () => {
        const games = document.querySelector("#games");
        const rect = games.getBoundingClientRect();
        if (rect.top === 0) {
            iframe.focus();
        }
    });