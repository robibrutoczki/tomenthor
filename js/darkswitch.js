$("#darkSwitch").click(function (b) {
    b.preventDefault();
    $(".marquee,.card-deck,.jumbotron,.container-fluid,tbody,.btn,.nav-link,.sidebar-heading,.btn-light,.modal-header,.modal-footer,.modal-body,.d-flex,#body,.sidebar-wrapper,.jumbotron,.navbar,a,.card,body").toggleClass("black");
    $(".card-ch").toggleClass("dark");



});

