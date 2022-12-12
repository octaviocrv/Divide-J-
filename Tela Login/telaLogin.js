function Login(){
    
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }else if(login == "Thiago" && senha == "Thiago"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }
    else if(login == "Sidney" && senha == "Sidney"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }
    else if(login == "Octavio" && senha == "Octavio"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }
    else if(login == "Deborah" && senha == "Deborah"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }
    else if(login == "Andre" && senha == "Andre"){
        alert('Sucesso');
        location.href = "../Tela Home/home.html"
    }else{
        alert("Usuario ou senha incorretos");
    }
}


