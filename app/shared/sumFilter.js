app.filter('sum', function (array, field) {
    var total = 0;

    array.forEach(function (item) {
        total += item[field];
    });

    return total;
});