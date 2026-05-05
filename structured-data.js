(function () {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "VideoGame",
                "name": "Fuel Frenzy",
                "description": "A track racing game where the objective is to collect fuel and reach the highest score possible. How long can you keep the tank topped up?",
                "genre": ["Arcade", "Racing"],
                "gamePlatform": "Browser",
                "url": "https://www.crazygames.com/game/fuel-frenzy-ahk",
                "publisher": {
                    "@type": "Organization",
                    "name": "Collision Course Studios",
                    "url": "https://mm-13.github.io/CollisionCourseStudios"
                },
                "image": "https://mm-13.github.io/CollisionCourseStudios/Images/FuelFrenzy_Thumbnail.png"
            },
            {
                "@type": "VideoGame",
                "name": "Space Cadet Minesweeper",
                "description": "A space mining game where you and 2 friends scan asteroids and coordinate a ship to mine valuable resources whilst avoiding the mines within.",
                "genre": ["Arcade", "Co-op"],
                "numberOfPlayers": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 3
                },
                "gamePlatform": "Browser",
                "url": "https://mm-13.itch.io/spacecadetminesweeper",
                "publisher": {
                    "@type": "Organization",
                    "name": "Collision Course Studios",
                    "url": "https://mm-13.github.io/CollisionCourseStudios"
                },
                "image": "https://mm-13.github.io/CollisionCourseStudios/Images/SpaceCadetMinesweeper_Thumbnail.png"
            },
            {
                "@type": "VideoGame",
                "name": "Huntsman Isle",
                "description": "Scavenge for parts, avoid traps and sneak through the unknown land of Huntsman Isle to rebuild your escape... or fall prey to the island's relentless hunter.",
                "genre": ["Horror", "Exploration", "Survival"],
                "gamePlatform": "Browser",
                "url": "https://mm-13.itch.io/huntsman-isle",
                "image": "https://mm-13.github.io/CollisionCourseStudios/Images/HuntsmanIsle_Thumbnail.png"
            },
            {
                "@type": "VideoGame",
                "name": "Souper Bloody",
                "description": "A roguelite hack-and-slash where you play as a demon from the lowest layer of the Underlasagne. You can only move in the blood of your enemies.",
                "genre": ["Action", "Roguelike"],
                "gamePlatform": "PC",
                "url": "https://store.steampowered.com/app/4368980/Souper_Bloody/",
                "image": "https://mm-13.github.io/CollisionCourseStudios/Images/SouperBloody_Thumbnail.png"
            },
            {
                "@type": "VideoGame",
                "name": "Man's Best Friend",
                "description": "A first person 3D observation duty game where you play as a dog trying to protect his owner from malicious entities and ghosts roaming the house at night.",
                "genre": ["Horror", "Psychological"],
                "gamePlatform": "Browser",
                "url": "https://mathiesvdb.itch.io/mans-best-friend",
                "image": "https://mm-13.github.io/CollisionCourseStudios/Images/MBF_Thumbnail.png"
            }
        ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
})();
