import './styles/Dados.css'

function Dados(){
    return(
        <div id="dados">
            <h2>Dados Pessoais</h2>
                <input required className="input" placeholder="Nome" type="text" />
                <input required className="input" placeholder="Email" type="email" />
                <input required className="input" placeholder="Telefone" type="tel"  />
                <input required className="input" placeholder="CPF" type="number" min="0"/>
          </div>)
}

export default Dados;