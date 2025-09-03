import React from 'react';
import './Curriculo.css';

type ExperienciaTecnologica = {
  titulo: string;
  periodo: string;
  detalhes: string[];
};

type Projeto = {
  titulo: string;
  link: string;
  descricao: string;
};

type ExperienciaProfissional = {
  empresa: string;
  cargo: string;
  periodo: string;
  atividades: string[];
};

type Educacao = {
  curso: string;
  instituicao: string;
  periodo: string;
};

type CurriculoProps = {
  nome: string;
  titulo: string;
  telefone: string;
  email: string;
  linkedin: string;
  portifolio: string;
  sobre: string;
  experienciaTecnologica: ExperienciaTecnologica;
  projetos: Projeto[];
  experienciaProfissional: ExperienciaProfissional[];
  hardSkills: string[];
  softSkills: string[];
  educacao: Educacao[];
  idiomas: string;
};

const curriculoData: CurriculoProps = {
  nome: 'Julia Vieira Nunes',
  titulo: 'Desenvolvedora Full Stack',
  telefone: '(47) 99193-7019',
  email: 'juuliacristiny@gmail.com',
  linkedin: 'https://www.linkedin.com/in/julia-vieira-nuness',
  portifolio: 'https://portifoliojuliavnunes.netlify.app/',
  sobre:
    'Sou desenvolvedora Fullstack, formada pelo bootcamp React & Node da SoulCode Academy. Onde aprendi React, Node, JavaScript, HTML, CSS, Tailwind e Git, e desenvolvi projetos que unem lógica e design, criando interfaces intuitivas e responsivas.',
  experienciaTecnologica: {
    titulo: 'SoulCode Academy - Bootcamp intensivo - Fullstack React/Node',
    periodo: '06/2025 – 08/2025',
    detalhes: [
      'Criei aplicações web completas utilizando HTML, CSS, JavaScript, React e Node.js',
      'Desenvolvi APIs RESTful com Express e integração com frontend.',
      'Manipulei dados com JavaScript e JSON, simulando banco de dados.',
      'Utilizei Git e GitHub para versionamento de código e colaboração em projetos.',
      'Utilizei componentização em React, consumo de APIs com fetch.',
      'Participei de projetos semanais com desafios propostos para simular demandas reais de criação e colaboração com colegas.',
    ],
  },
  projetos: [
    {
      titulo: 'Landing page – Imersão Mulheres',
      link: 'https://imersao-mulheres-saudaveis.netlify.app/',
      descricao:
        'Um site informativo e de divulgação do evento realizado por profissionais da área da saúde, com o objetivo de integrar corpo e mente, abordando saúde física, nutricional, emocional e ginecológica.',
    },
    {
      titulo: 'Landing page – Psicóloga',
      link: 'https://github.com/juulianuness/AtividadeBootstrap',
      descricao:
        'Site institucional desenvolvido para a psicóloga Jaqueline Vieira, com o objetivo de testar meus aprendizados em Bootstrap. Não contém nenhuma interação além das usadas diretamente pelo framework.',
    },
    {
      titulo: 'Lista de Tarefas',
      link: 'https://juulianuness.github.io/Lista-de-Tarefas/',
      descricao:
        'Projeto simples desenvolvido como parte do Bootcamp da SoulCode. Permite adicionar tarefas e definir prioridades, exibindo-as em tabela com destaque de acordo com sua importância.',
    },
  ],
  experienciaProfissional: [
    {
      empresa: 'Valoriza Brindes',
      cargo: 'Auxiliar Administrativo',
      periodo: '06/2024 – 04/2025',
      atividades: [
        'Realizei compras de material para revenda, desde a solicitação até o acompanhamento de pedidos, preparação para personalização e entrega.',
        'Mantive contato diário com fornecedores para cotações, negociações e prazos de entrega (ligações, mensagens, e-mails e portais).',
        'Atualizei documentações internas, controlei vencimentos e gerenciei planilhas no Excel.',
        'Alimentei e lancei informações nos sistemas internos, como Atlassian Trello, Olist e Tiny.',
      ],
    },
    {
      empresa: 'Giq Produtos',
      cargo: 'Assistente de Criação',
      periodo: '03/2022 – 05/2024',
      atividades: [
        'Criei artes vetoriais para gravação a laser.',
        'Manipulei arquivos (.CDR, .CAD, .SVG, .X_T).',
        'Organizei o banco de arquivos e controlei versões.',
      ],
    },
  ],
  hardSkills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Git',
    'GitHub',
    'Netlify',
    'Figma',
    'React',
    'Node.js',
    'Postman',
    'Render',
    'Express.js',
    'Firebase',
    'CRUD',
    'TypeScript',
    'Tailwind.css',
    'Scrum',
    'Kanban',
    'Jira',
    'Miro',
  ],
  softSkills: [
    'Comunicação',
    'Trabalho em equipe',
    'Organização',
    'Resolução de problemas',
    'Adaptabilidade',
  ],
  educacao: [
    { curso: 'Programador Web', instituicao: 'IFRS', periodo: 'jan/2025' },
    { curso: 'MBA Comunicação e Marketing Digital', instituicao: 'Estratego', periodo: 'fev/2024' },
    { curso: 'Tecnólogo em Marketing', instituicao: 'Estácio', periodo: 'jul/2017' },
  ],
  idiomas: 'Inglês – Intermediário',
};

export const Curriculo: React.FC = () => {
  const {
    nome,
    titulo,
    telefone,
    email,
    linkedin,
    portifolio,
    sobre,
    experienciaTecnologica,
    projetos,
    experienciaProfissional,
    hardSkills,
    softSkills,
    educacao,
    idiomas,
  } = curriculoData;

  return (
    <div className="curriculo-container">
      <header>
        <h1>{nome}</h1>
        <p>{titulo} <br />
          {telefone} • <a href={`mailto:${email}`}>{email}</a>
        <br />
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' • '}
          <a href={portifolio} target="_blank" rel="noopener noreferrer">
            Portfólio
          </a>
        </p>

      </header>

      <section>
        <h2>Sobre Mim</h2>
        <p>{sobre}</p>
      </section>

      <section>
        <h2>Experiência Tecnológica</h2>
        <h3>
          {experienciaTecnologica.titulo} ({experienciaTecnologica.periodo})
        </h3>
        <ul>
          {experienciaTecnologica.detalhes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projetos que Desenvolvi</h2>
        {projetos.map((projeto, i) => (
          <div key={i}>
            <h3>
              {projeto.titulo} –{' '}
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <b>Ver Projeto</b>
              </a>
            </h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Experiência Profissional</h2>
        {experienciaProfissional.map((exp, i) => (
          <div key={i}>
            <h3>
              {exp.empresa} – {exp.cargo} ({exp.periodo})
            </h3>
            <ul>
              {exp.atividades.map((atividade, j) => (
                <li key={j}>{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <h3>Hard Skills</h3>
        <p>{hardSkills.join(' • ')}</p>
        <h3>Soft Skills</h3>
        <p>{softSkills.join(' • ')}</p>
      </section>

      <section>
        <h2>Educação</h2>
        <ul>
          {educacao.map((ed, i) => (
            <li key={i}>
              <strong>{ed.curso}</strong> – {ed.instituicao} ({ed.periodo})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <p>{idiomas}</p>
      </section>
    </div>
  );
};
