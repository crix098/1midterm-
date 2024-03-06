document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", function() {
            rows.forEach(r => r.classList.remove("bg-primary"));
            this.classList.add("bg-primary");
        });
    });
});
