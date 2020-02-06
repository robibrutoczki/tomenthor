$("#darkSwitch").click(function (b) {
    b.preventDefault();
    $("bg-dark,.marquee,.card-deck,.jumbotron,.container-fluid,.table-m,.btn,.nav-link,.sidebar-heading,.btn-light,.modal-header,.modal-footer,.modal-body,.d-flex,#body,.sidebar-wrapper,.jumbotron,.navbar,a,.card,body").toggleClass("black");
    $(".card-ch").toggleClass("dark");
});

