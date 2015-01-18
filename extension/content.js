$(document).ready(function () {
    setInterval(function() {
        modifyCardsInList();
        modifyCardDetails();
        countListItems();
    }, 100);
});

function countListItems() {
    $('.list').each(function(index) {
        var outer = $(this);
        $(this).find('h2.current').each(function (index) {
            $(this).attr("title", $(this).text() + " (" + outer.find('.list-card').length + ")");
            //console.log($(this).text() + ': ' + outer.find('.list-card').length);
        });
    });
}

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