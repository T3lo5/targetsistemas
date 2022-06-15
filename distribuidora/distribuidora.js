//calculate lower valor on month

let url = '/dados.xml';
$.ajax(url)
    .done(function(xml){
        $(xml).find('row').each(function(){
            $("#cards").append(`<div class="card">
                <p>${this.find('dia').number()}</p>
                <p>${this.find('valor').number()}</p>
                </div>`);
        })})
    .fail(function(){
       alert("Error loading dados.xml");
    });




