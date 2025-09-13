import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { Fade } from "react-awesome-reveal";

const allProjects = [
  {
    id: 1,
    title: "Site Institucional",
    category:
      "Desenvolvemos sites institucionais completos para empresas que desejam se destacar no ambiente digital. Um site institucional fortalece a presença online, transmite credibilidade, facilita o contato com clientes e ajuda a gerar novas oportunidades de negócio.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/institucional.webp?raw=true",
  },
  {
    id: 2,
    title: "Site Corporativo",
    category:
      "Criamos sites corporativos completos, pensados para transmitir profissionalismo e fortalecer a imagem da sua empresa na web. Com design moderno e funcionalidades estratégicas, seu negócio se conecta melhor com clientes e parceiros.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/corporativo.webp?raw=true",
  },
  {
    id: 3,
    title: "Página de Captura de Leads",
    category:
      "Criamos páginas de captura de leads focadas em gerar novos contatos qualificados para o seu negócio, transformando visitantes em potenciais clientes.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/captura.webp?raw=true",
  },
  {
    id: 4,
    title: "Landing Page",
    category:
      "Landing pages otimizadas para resultados: design atraente, conteúdo persuasivo e integração com ferramentas de marketing para maximizar suas oportunidades de negócio.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/landingpage.webp?raw=true",
  },
  {
    id: 5,
    title: "Página de Vendas",
    category:
      "Desenvolvemos páginas de vendas que convertem visitantes em clientes, com design atrativo, textos persuasivos e estratégias que destacam seu produto ou serviço.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/paginadevendas.webp?raw=true",
  },
  {
    id: 6,
    title: "Hotsite de Eventos",
    category:
      "Hotsites de eventos com design atrativo e funcionalidade completa, facilitando inscrições, divulgação e interação com seu público-alvo.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/evento.webp?raw=true",
  },
  {
    id: 7,
    title: "Gestão de tráfego para geração de leads",
    category:
      "Oferecemos gestão de tráfego estratégica para atrair visitantes qualificados, transformando cliques em leads e potencializando seus resultados de marketing.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/mtk2.webp?raw=true",
  },
  {
    id: 8,
    title: "Gestão de tráfego por funil completo",
    category:
      "Oferecemos gestão de tráfego estratégica por funil completo, guiando seus leads desde o primeiro contato até a conversão, maximizando resultados em todas as etapas.",
    image:
      "https://github.com/DomCarlosAdriano/TentaculosTech.com/blob/main/public/mkt1.webp?raw=true",
  },
];

export default function ProjectsSection({ menuOpen }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(allProjects.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return allProjects.slice(start, start + itemsPerPage);
  }, [currentPage]);

  if (menuOpen) return null;

  return (
    <section
      id="portfolio"
      className="w-full px-6 py-20 text-white"
      aria-label="Projetos recentes"
    >
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-rajdhani">
          Conheça um Pouco do <span className="text-purple-500">Nosso Trabalho</span>
        </h2>
      </Fade>

      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((project) => (
            <article
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </Fade>

      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <ReactPaginate
        breakLabel="…"
        nextLabel="→"
        previousLabel="←"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={(e) => setCurrentPage(e.selected)}
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center gap-3 list-none mt-10 flex-wrap"
        pageLinkClassName="px-4 py-2 border border-gray-400 rounded-full text-white text-sm hover:border-purple-500 transition"
        activeLinkClassName="bg-purple-500 border-purple-500"
        previousLinkClassName="px-4 py-2 border border-gray-400 rounded-full text-white text-sm"
        nextLinkClassName="px-4 py-2 border border-gray-400 rounded-full text-white text-sm"
        disabledLinkClassName="opacity-40 cursor-not-allowed"
      />
      </Fade>
    </section>
  );
}
