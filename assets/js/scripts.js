// Scripts //
$("#form form").on("submit", function(){
    var a = document.forms["form"]["name"].value;
    var b = document.forms["form"]["email"].value;
    var c = document.forms["form"]["phone"].value;
    var d = document.forms["form"]["mensagem"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d==""){
        alert("Favor preencher todos os campos");
    }else{
        alert("Formulário enviado com sucesso");
        $('#form form').trigger("reset");
    }

    return false;
});