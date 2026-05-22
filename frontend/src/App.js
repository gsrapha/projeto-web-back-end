import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [projetos, setProjetos] = useState([]);

  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    status: 'Ativo'
  });

  const [editandoId, setEditandoId] = useState(null);


  // LISTAR
  async function carregarProjetos() {
    const response = await axios.get(
      'http://localhost:5000/projetos'
    );

    setProjetos(response.data);
  }

  useEffect(() => {
    carregarProjetos();
  }, []);


  // INPUTS
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }


  // CADASTRAR / EDITAR
  async function handleSubmit(e) {
    e.preventDefault();

    if (editandoId) {

      await axios.put(
        `http://localhost:5000/projetos/${editandoId}`,
        form
      );

      setEditandoId(null);

    } else {

      await axios.post(
        'http://localhost:5000/projetos',
        form
      );
    }

    setForm({
      nome: '',
      descricao: '',
      status: 'Ativo'
    });

    carregarProjetos();
  }


  // DELETAR
  async function deletarProjeto(id) {

    await axios.delete(
      `http://localhost:5000/projetos/${id}`
    );

    carregarProjetos();
  }


  // EDITAR
  function editarProjeto(projeto) {

    setEditandoId(projeto._id);

    setForm({
      nome: projeto.nome,
      descricao: projeto.descricao,
      status: projeto.status
    });
  }


  return (
    <div className="container">

      <h1>ONG Conecta Futuro</h1>
      <h3>Sistema de Gerenciamento de Projetos Sociais</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nome"
          placeholder="Nome do projeto"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Ativo">Ativo</option>
          <option value="Em andamento">
            Em andamento
          </option>
          <option value="Finalizado">
            Finalizado
          </option>
        </select>

        <button type="submit">
          {editandoId
            ? 'Atualizar Projeto'
            : 'Cadastrar Projeto'}
        </button>

      </form>


      {projetos.map((projeto) => (

        <div
          className="card"
          key={projeto._id}
        >

          <h2>{projeto.nome}</h2>

          <p>{projeto.descricao}</p>

          <strong>Status:</strong> {projeto.status}

          <div className="actions">

            <button
              onClick={() => editarProjeto(projeto)}
            >
              Editar
            </button>

            <button
              onClick={() =>
                deletarProjeto(projeto._id)
              }
            >
              Excluir
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default App;