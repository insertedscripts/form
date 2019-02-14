document.addEventListener('load', function() {

    document.querySelectorAll('[name=c_00000009]').forEach(function(r) {

        r.addEventListener('change', function(e) {

            document.querySelectorAll('[name=c_00000009]').forEach(function(r2) {
                r2.parentNode.parentNode.removeAttribute('data-selected');
            });

            e.target.parentNode.parentNode.setAttribute('data-selected', '1');
        });

    });

});