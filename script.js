/* =====================================================
   MWR RESEARCH WEBSITE
   JavaScript
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* ==============================================
           MOBILE MENU
        ============================================== */

        const menuToggle =
            document.getElementById(
                "menuToggle"
            );

        const navigation =
            document.getElementById(
                "navigation"
            );


        if (
            menuToggle &&
            navigation
        ) {

            menuToggle.addEventListener(
                "click",
                function () {

                    navigation.classList.toggle(
                        "open"
                    );

                }
            );


            /* Close menu after clicking a link */

            const navLinks =
                navigation.querySelectorAll(
                    "a"
                );


            navLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navigation.classList.remove(
                                "open"
                            );

                        }
                    );

                }
            );

        }


        /* ==============================================
           HEADER SHADOW ON SCROLL
        ============================================== */

        const header =
            document.querySelector(
                ".site-header"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 30
                ) {

                    header.style.boxShadow =
                        "0 8px 30px rgba(15,23,42,.08)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            }
        );


        /* ==============================================
           ACTIVE NAVIGATION FOR SAME-PAGE SECTIONS
        ============================================== */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const links =
            document.querySelectorAll(
                ".navigation a"
            );


        if (
            sections.length &&
            links.length
        ) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    links.forEach(
                                        function (link) {

                                            link.classList.remove(
                                                "active"
                                            );

                                        }
                                    );


                                    const activeLink =
                                        document.querySelector(
                                            '.navigation a[href="#' +
                                            entry.target.id +
                                            '"]'
                                        );


                                    if (
                                        activeLink
                                    ) {

                                        activeLink.classList.add(
                                            "active"
                                        );

                                    }

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.25
                    }
                );


            sections.forEach(
                function (section) {

                    observer.observe(
                        section
                    );

                }
            );

        }

    }
);
