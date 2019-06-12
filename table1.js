define('table1', function () {
    return {
        addrow: function () {
            var row1 = $('<tr><td><input type="text" name="p_name"></td><td><input type="text" name="p_skew"></td><td><input type="number" name="quantity"></td><td><input type="text" name="price"></td><td><button id="remove">Remove</button></td></tr>');
            $("#tab1").append(row1);

        },

        remove: function (event) {

            var idd = $(event.currentTarget).closest('tr');
            $(idd).remove();
            $("#cart").trigger('click');


        },

    }

})
