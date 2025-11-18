document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Elementos de la pantalla de inicio ---
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const gameContent = document.getElementById("game-content");

    // Mostrar el contenido principal al presionar START
    startBtn.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        gameContent.classList.remove("hidden");
    });

    // --- 2. Navegación entre secciones (MAPA, ÁLBUM, TEMPLO) ---
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll("main section");

    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetSectionId = btn.dataset.section;

            // Ocultar todas las secciones
            sections.forEach((sec) => sec.classList.remove("active"));
      
            // Mostrar la sección objetivo
            document.getElementById(targetSectionId).classList.add("active");
        });
    });


    // --- 3. Funcionalidad del botón "Convertirme" ---
    const convertirBtn = document.getElementById("convertirme");
    convertirBtn.addEventListener("click", () => {
        alert("¡Felicidades, Explorador! Has desbloqueado nuevas recompensas sagradas.");
    });

    // --- 4. Funcionalidad del npc en mapa
    document.querySelectorAll(".punto-mapa").forEach(punto => {
        punto.addEventListener("click", () => {

            // 1. Ocultar la sección del mapa
            document.getElementById("mapa").classList.remove("active");

            // 2. Mostrar la sección de información del NPC
            document.getElementById("casa-perros-info").classList.add("active");
        });
    });

    document.getElementById("volver-mapa").addEventListener("click", () => {
        document.getElementById("casa-perros-info").classList.remove("active");
        document.getElementById("mapa").classList.add("active");
    });


    //-- 5. Agregando personaje en álbum digital ---
    const agregarBtn = document.getElementById("agregarNpc");
    agregarBtn.addEventListener("click", () => {
        alert("Ahora Doña Ana forma parte de tu álbum digital");
    });
    
});

