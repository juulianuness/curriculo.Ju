import React from 'react';
import './Curriculo.css';

type ExperienciaTecnologica = {
  titulo: string;
  periodo: string;
  detalhes: string[];
  tecnologias: string[];
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
  telefone: string;
  email: string;
  linkedin: string;
  sobre: string;
  experienciaTecnologica: ExperienciaTecnologica;
  experienciaProfissional: ExperienciaProfissional[];
  educacao: Educacao[];
  idiomas: string;
};

const curriculoData: CurriculoProps = {
  nome: 'Julia Vieira Nunes',
  telefone: '(47) 99193-7019',
  email: 'juuliacristiny@gmail.com',
  linkedin: 'https://linkedin.com/in/julia-vieira-nuness/',
  sobre:
    'Estudante de desenvolvimento web. Tenho experiência com HTML, CSS, JavaScript, React e integração com APIs. Participei de projetos práticos no bootcamp da SoulCode Academy, onde pude aplicar conceitos práticos da vivência de frontend e backend. Tenho facilidade em aprender novas ferramentas, boa comunicação e foco em entregar soluções funcionais.',
  experienciaTecnologica: {
    titulo: 'SoulCode Academy - Bootcamp intensivo - Fullstack React/Node',
    periodo: '06/2025 – 08/2025',
    detalhes: [
      'Criação de aplicações web completas utilizando HTML, CSS, JavaScript, React e Node.js.',
      'Desenvolvimento de APIs RESTful com Express e integração com frontend.',
      'Manipulação de dados com JavaScript e JSON, simulando e criando banco de dados.',
      'Uso de Git e GitHub para versionamento de código e colaboração em projetos.',
      'Prática de componentização em React, consumo de APIs com fetch.',
      'Participação em projetos semanais com desafios propostos para simular demandas reais.',
      'Organização do código e foco na experiência do usuário (UX/UI).',
    ],
    tecnologias: ['Express', 'Postman', 'Render', 'Firebase', 'SQL/MYSQL', 'Netlify', 'Figma'],
  },
  experienciaProfissional: [
    {
      empresa: 'Valoriza Brindes',
      cargo: 'Auxiliar Administrativo',
      periodo: '06/2024 – 04/2025',
      atividades: [
        'Responsável pelo processo de compras, desde a solicitação até o acompanhamento de pedidos.',
        'Contato com fornecedores para cotações, negociações e prazos de entrega (ligações, mensagens e emails).',
        'Atualização de documentações internas, controle de vencimentos, controle de planilhas (Excel).',
        'Alimentação e lançamentos nos sistemas internos (Atlassian Trello, Olist, Tiny).',
      ],
    },
    {
      empresa: 'Giq Produtos',
      cargo: 'Assistente de Criação',
      periodo: '03/2022 – 05/2024',
      atividades: [
        'Criação de artes vetoriais para gravação a laser.',
        'Manipulação de arquivos (.CDR, .CAD, .SVG, .X_T).',
        'Organização de banco de arquivos e controle de versões.',
      ],
    },
  ],
  educacao: [
    { curso: 'Programador Web', instituicao: 'IFRS', periodo: 'jan/2025' },
    { curso: 'MBA Comunicação e Marketing Digital', instituicao: 'Estratego', periodo: 'fev/2024' },
    { curso: 'Tecnólogo em Marketing', instituicao: 'Estácio', periodo: 'jul/2017' },
  ],
  idiomas: 'Inglês – Básico',
};

export const Curriculo: React.FC = () => {
  const {
    nome,
    telefone,
    email,
    linkedin,
    sobre,
    experienciaTecnologica,
    experienciaProfissional,
    educacao,
    idiomas,
  } = curriculoData;

  return (
    <div className="curriculo-container">
      <header>
        <h1>{nome}</h1>
        <p>{telefone} • <a href={`mailto:${email}`}>{email}</a></p>
        <p><a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
      </header>

      <section>
        <h2>Sobre Mim</h2>
        <p>{sobre}</p>
      </section>

      <section>
        <h2>Experiência Tecnológica</h2>
        <h3>{experienciaTecnologica.titulo} ({experienciaTecnologica.periodo})</h3>
        <ul>
          {experienciaTecnologica.detalhes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h3>Tecnologias e Ferramentas</h3>
        <p>{experienciaTecnologica.tecnologias.join(' • ')}</p>
      </section>

      <section>
        <h2>Experiência Profissional</h2>
        {experienciaProfissional.map((exp, i) => (
          <div key={i}>
            <h3>{exp.empresa} – {exp.cargo} ({exp.periodo})</h3>
            <ul>
              {exp.atividades.map((atividade, j) => (
                <li key={j}>{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Educação</h2>
        <ul>
          {educacao.map((ed, i) => (
            <li key={i}>{ed.curso} – {ed.instituicao} ({ed.periodo})</li>
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
