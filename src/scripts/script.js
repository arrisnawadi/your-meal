function jsSetting() {
    // pilih elemen
    const listHeader = document.getElementById("list-header")
    const menu = document.querySelectorAll(".nav-link");
    const catMenu = document.getElementById("pills-category");
    const ctrMenu = document.getElementById("pills-country");

    // mengatur tampilan menu berdasarkan screen layar yang dipilih
    function myFunction(media) {
        if (media.matches) {
            menu.forEach(link => {
                link.setAttribute("data-toggle", "collapse");
                link.setAttribute("class", "nav-link text-info");
                link.setAttribute("role", "button");
                link.removeAttribute("id");
            });
            catMenu.setAttribute("class", "collapse");
            ctrMenu.setAttribute("class", "collapse");
            listHeader.classList.add("scroll-margin-top")
        } else {
            menu.forEach(link => {
                link.setAttribute("data-toggle", "pill");
            });
            catMenu.setAttribute("class", "tab-pane fade show active");
            ctrMenu.setAttribute("class", "tab-pane fade");
            listHeader.classList.remove("scroll-margin-top")
        }
    }

    // mengatur ukuran screen
    const media = window.matchMedia("(max-width: 767.98px)");
    myFunction(media);
    media.addListener(myFunction);


}

export default jsSetting;