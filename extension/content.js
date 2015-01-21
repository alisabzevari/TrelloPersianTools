(function ($, document) {
    var doms = 'h1, h2, h3, p ,a',
        inputs = 'textarea, input[type=text]';

    $(document).ajaxComplete(function () {
        $(doms).each(function () {
            updateStyle($(this));
        });
		countListItems();
    });

    $(document).ready(function () {
        $(doms).each(function () {
            updateStyle($(this));
        });
		countListItems();
    });

    $('body').on('input blur focus', inputs, function (e) {
        updateStyle($(this));
    });

    function updateStyle(target) {
        var regex = [],
            matched,
            value,
            tagName = target[0].tagName,
            rtl,
            ltr;

        rtl = {
            'direction': 'rtl',
            'text-align': 'right'
        };
        ltr = {
            'direction': 'ltr',
            'text-align': 'left'
        };

        value = target.text();

        if (target.is('textarea') || target.is('input[type=text]')) {
            value = target.val();
        }

        if (target.is('a') || tagName === 'H1' || tagName === 'H2' || tagName === 'H3') {
            rtl['unicode-bidi'] = 'embed';
            ltr['unicode-bidi'] = '';
        }

        // Persian, Arabic
        regex.push(/[\u0600-\u06FF]/);
        // Hebrew
        regex.push(/[\u0590-\u05FF]/);

        for (var i = 0; i < regex.length; i++) {
            matched = value.match(regex[i]);

            if (matched) {
                break;
            }
        }

        if (matched) {
            target.css(rtl);
        } else {
            target.css(ltr);
        }
    }
})($, document);

function countListItems() {
    $('.list').each(function(index) {
        var outer = $(this);
        $(this).find('h2.current').each(function (index) {
            $(this).attr("title", $(this).text() + " (" + outer.find('.list-card').length + ")");
            //console.log($(this).text() + ': ' + outer.find('.list-card').length);
        });
    });
}