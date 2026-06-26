import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/projects';

function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: 'Educação'
  });

  const [editingId, setEditingId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filter, setFilter] = useState('Todas');

  const loadProjects = async () => {
    const response = await axios.get(API_URL);
    setProjects(response.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      name: '',
      description: '',
      category: 'Educação'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, form);
      setEditingId(null);
      setEditModalOpen(false);
    } else {
      await axios.post(API_URL, form);
    }

    resetForm();
    loadProjects();
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      name: project.name,
      description: project.description,
      category: project.category
    });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingId(null);
    resetForm();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    loadProjects();
  };

  const handleDetails = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    setSelectedProject(response.data);
  };

  const filteredProjects =
    filter === 'Todas'
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <div className="container">
      <header>
        <h1>ONG Conecta Futuro</h1>
        <p>Sistema de gerenciamento de projetos sociais</p>
        <p>Total de Projetos: {projects.length}</p>
      </header>

      <main>
        <section className="card">
          <h2>Cadastrar Novo Projeto</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome do projeto"
              value={!editingId ? form.name : ''}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Descrição do projeto"
              value={!editingId ? form.description : ''}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={!editingId ? form.category : 'Educação'}
              onChange={handleChange}
            >
              <option value="Educação">Educação</option>
              <option value="Capacitação">Capacitação</option>
              <option value="Empreendedorismo">Empreendedorismo</option>
              <option value="Comunidade">Comunidade</option>
            </select>

            <button type="submit">Adicionar Projeto</button>
          </form>
        </section>

        <section className="card">
          <h2>Funcionalidade Exclusiva: Filtro por Categoria</h2>

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Educação">Educação</option>
            <option value="Capacitação">Capacitação</option>
            <option value="Empreendedorismo">Empreendedorismo</option>
            <option value="Comunidade">Comunidade</option>
          </select>
        </section>

        <section className="card">
          <h2>Lista de Projetos Sociais</h2>

          {filteredProjects.length === 0 ? (
            <p>Nenhum projeto encontrado.</p>
          ) : (
            filteredProjects.map(project => (
              <div className="project" key={project._id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.category}</span>

                <div className="actions">
                  <button onClick={() => handleDetails(project._id)}>Detalhes</button>
                  <button onClick={() => handleEdit(project)}>Editar</button>
                  <button
                    className="danger"
                    onClick={() => handleDelete(project._id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        {selectedProject && (
          <div className="modal-overlay">
            <div className="modal">
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <h2>Detalhes do Projeto</h2>

              <p><strong>Nome:</strong> {selectedProject.name}</p>
              <p><strong>Descrição:</strong> {selectedProject.description}</p>
              <p><strong>Categoria:</strong> {selectedProject.category}</p>
            </div>
          </div>
        )}

        {editModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-btn" onClick={closeEditModal}>
                ✕
              </button>

              <h2>Editar Projeto</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome do projeto"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="description"
                  placeholder="Descrição do projeto"
                  value={form.description}
                  onChange={handleChange}
                  required
                />

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="Educação">Educação</option>
                  <option value="Capacitação">Capacitação</option>
                  <option value="Empreendedorismo">Empreendedorismo</option>
                  <option value="Comunidade">Comunidade</option>
                </select>

                <button type="submit">Salvar Alterações</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;