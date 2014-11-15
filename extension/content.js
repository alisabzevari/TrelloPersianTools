$(document).ready(function () {
    setInterval(function() {
        modifyCardsInList();
        modifyCardDetails();
    }, 100);
});

function modifyCardsInList() {
    makeRtl('.list-card-title');
};

function modifyCardDetails() {
    makeRtl('.window-header');
    makeRtl('.action-comment');
    makeRtl('.checklist-item-details-text');
}

function makeRtl(selector) {
    //$(selector).each(function() {
    //    $(this).css('direction', 'rtl');
    //});
    $(selector).css('direction', 'rtl');
}