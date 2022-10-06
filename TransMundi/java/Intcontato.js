const formulario = document.querySelector("#formCont")
formulario.onsubmit = event => {

    var nome = document.querySelector("#nome").value
    console.log(nome)
    //Validar o Input nome
    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: preencha o formulário.</p>"
    return
    }

    var nome = document.querySelector("#sobrenome").value
    console.log(nome)
    
    //Validar o Input sobrenome
    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite o seu sobrenome.</p>"
    return
    }

    var nome = document.querySelector("#cpf").value
    console.log(nome)
    
    //Validar o Input cpf
    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite o seu cpf.</p>"
    return
    }

    var nome = document.querySelector("#cep").value
    console.log(nome)
    
    //Validar o Input cep
    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite o seu cep.</p>"
    return
    }

    var nome = document.querySelector("#email").value
    console.log(nome)
    
    //Validar o Input email
    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite o seu email.</p>"
    return
    }
    //Validar o Input tel
    var nome = document.querySelector("#tel").value
    console.log(nome)
    

    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite o seu telefone.</p>"
    return
    }
    //Validar o Input msg
    var nome = document.querySelector("#mensagem").value
    console.log(nome)
    

    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: digite uma mensagem</p>"
    return
    }
    //Validar o Input assunto
    var nome = document.querySelector("#assunto").value
    console.log(nome)


    if (nome === ""){
    event.preventDefault()
    document.getElementById("msgErro").innerHTML = "<p>Erro: escolha um assunto.</p>"
    return
    }
    
}