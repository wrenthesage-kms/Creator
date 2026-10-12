/* =========================================
   CREATOR — SITE INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");


    /* -------------------------------------
       MOBILE NAVIGATION
    ------------------------------------- */

    if (menuToggle && navigation) {

        function closeMenu() {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("is-open");
        }


        function openMenu() {
            menuToggle.setAttribute("aria-expanded", "true");
            navigation.classList.add("is-open");
        }


        menuToggle.addEventListener("click", () => {

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        // Close the menu after a navigation link is selected.

        navigation.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", closeMenu);

        });


        // Escape closes the mobile menu.

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                closeMenu();

                menuToggle.focus();

            }

        });


        // Close the menu if the viewport returns to desktop size.

        window.addEventListener("resize", () => {

            if (window.innerWidth > 600) {
                closeMenu();
            }

        });

    }


    /* -------------------------------------
       INTERNAL SECTION NAVIGATION
    ------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",

                block: "start"
            });

            // Keep the browser URL in sync with the selected section.

            history.replaceState(null, "", targetId);

        });

    });


    /* -------------------------------------
       FUTURE EXPANSION
    -------------------------------------

       The following features will be added as the
       Creator archive grows:

       - Character directory and search
       - Individual character pages
       - Location directory
       - Individual location pages
       - Canonical character and location records
       - Interactive Relationship Web
       - Relationship type filters
       - Connections between characters and locations

       These features should use established canon
       stored in the repository rather than invented
       or hardcoded relationships.

    ------------------------------------- */

});
