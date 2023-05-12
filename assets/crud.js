document.querySelector("#salvar").addEventListener("click",cadastrar)

function cadastrar(){
    const titulo = document.querySelector("#titulo").value
    const descricao = document.querySelector("#descricao").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))



    const tarefa = { /* Quando o titulo for igual a variavel, não precisa por (titulo:titulo) pode ser direto */
        titulo,
        descricao,
        categoria,
    }

    if(!validar(tarefa.titulo, document.querySelector("#titulo"))) return
    if(!validar(tarefa.descricao, document.querySelector("#descricao"))) return

    document.querySelector("#tarefas").innerHTML += createCard (tarefa) /*O card será colocado dentro do HTML*/ 
    
    modal.hide()


}

function validar(valor, campo){
    if(valor == ""){
        campo.classList.add ("is-invalid") /*Mostrando que está invalido */
        campo.classList.remove ("is-valid") 
        return false
    }

    campo.classList.remove ("is-invalid") /* Removendo o invalido*/
    campo.classList.add ("is-valid")/* Colocando que está valido*/
    return true
    
}

function apagar(botao){
    botao.parentNode.parentNode.parentNode. remove()
}

function createCard(tarefa){
    return `
            <div class="col-lg-3 col-md-6 col-12">
                <div class="card">
                    <div class="card-header">
                        ${tarefa.titulo}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.descricao}</p>
                        <p>
                            <span class="badge text-bg-warning">${tarefa.categoria}</span>
                        </p>
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a onClick = "apagar(this)" href="#" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->
    ` //template literals
}