define('table2', ['table1'], function (tab1) {
    var p_index = 0;
    var total = 1;
   var count=0;
    
    return {


        removeall: function () {
            var row1 = $('<tr><td><input type="text" name="p_name"></td><td><input type="text" name="p_skew"></td><td><input type="number" name="quantity"></td><td><input type="text" name="price"></td><td><button id="remove">Remove</button></td></tr>');
            $("#tab1 tr:first").siblings().remove();
            $("#tab1").append(row1);
            $("#tab2 tr:first").siblings().remove();
        },

        addcart: function () {
            
            $("#tab2 tr:first").siblings().remove();
            var tab1_rows = $("#tab1 tr:first").siblings();
            var pid=[];
            $(tab1_rows).each(function (id, elem) {
                $(pid).each(function(i,ele){
                    if(ele==$(elem).find('td').children()[0].value)
                    {
                        alert("product id already exist");
                        count++;
                    }
                })
                 if(count==0)
                 {
                var row_elem = $(elem).find('input');
                $("#tab2").append('<tr><td id="click"><input type="text" name="p_name" readonly></td><td><input type="text" name="p_skew" readonly></td><td><input type="number" id="l_quantity" name="quantity" ></td><td><input type="text" name="price" readonly></td><td><input type="text" name="total" readonly></td></tr>');

                $(row_elem).each(function (id1, elem1) {
                    //console.log(id1);
                    if(id1==0){
                        pid.push(elem1.value);
                    }
                    if (id1 == 2 || id1 == 3) {
                        total *= elem1.value;
                    }
                    $("#tab2 tr:last").find("td").children('input')[id1].value = elem1.value;
                  
                }); 
                $("#tab2 tr:last").find('td').children()[4].value = total;
                total = 1;
            }
            });


        },

        description: function (event) {

            var val1 = $(event.currentTarget).closest('tr').find('input');
            var p = [];
            $(val1).each(function (id, elem) {

                p.push(elem.value);
            })
            localStorage.setItem(p_index, JSON.stringify(p));
            window.open("link1.html?" + p_index);
            p_index++;




        },
        onchange: function (event) {
            
            var val1 = $(event.currentTarget).closest('tr');
           
            total = Number($(val1).find('td').children()[2].value) * Number($(val1).find('td').children()[3].value);
            
            $(val1).find('td').children()[4].value = total;

        },
    }
})