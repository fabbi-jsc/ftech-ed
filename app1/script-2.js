function update() {

    $.getJSON("http://localhost:3000/categories").done(function(data) {

        console.log(data);



        $.each(data, function(index, e) {
            console.log(e);
            
            
            // create new DIV


            // Append DIV to ????
        });

    })

}