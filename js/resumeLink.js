$(document).ready(function () {

    $("#link").click(function (e) {
        e.preventDefault();
        // window.location.href = "assets/bf_resume.pdf";
        window.open("assets/bf_resume.pdf", "_blank");
    });

    $("#githubLink").click(function (e) {
        e.preventDefault();
        // window.location.href = "assets/bf_resume.pdf";
        window.open("https://github.com/bcefarmer", "_blank");
    });

    $("#linkedInLink").click(function (e) {
        e.preventDefault();
        // window.location.href = "assets/bf_resume.pdf";
        window.open("https://www.linkedin.com/in/bruce-farmer-0242021bb/", "_blank");
    });

});