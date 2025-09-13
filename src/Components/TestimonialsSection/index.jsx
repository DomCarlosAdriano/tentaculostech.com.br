import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import img2 from "../../assets/dep2.png";
import img1 from "../../assets/dep.png";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    id: 1,
    image: img1, // substitua pelo caminho real
    subtitle: "Alto faturamento com as vendas do próprio Programa de Skincare",
  },
  {
    id: 2,
    image: img2,
    subtitle:
      "20 consultorias no Brasil e exterior20 consultorias no Brasil e exterior20 consultorias no Brasil e exterior",
  },
  {
    id: 3,
    image: img1,
    subtitle: "Reforma do escritório e reajuste no valor da consultoria",
  },
  {
    id: 4,
    image: img1,
    subtitle: "2 mil de venda em consultoria em um dia",
  },
];

export default function TestimonialsSection({ menuOpen }) {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3; // quantos cards aparecem por vez
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section
      className={`w-full py-16 px-4 text-center text-white ${
        menuOpen ? "hidden" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <p className="text-purple-500 font-semibold tracking-widest text-sm mb-2">
            TESTEMUNHOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            RESULTADOS DOS NOSSOS <span className="text-purple-500">CLIENTES</span>
          </h2>
        </Fade>

        {/* Grid */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto items-end px-1">
            {currentItems.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border-2 border-purple-500 overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-[#111319] h-fit"
              >
                <img
                  src={t.image}
                  alt={t.subtitle}
                  className="w-full object-contain"
                />
                <div className="p-4">
                  <p className="text-purple-400 font-medium text-base">
                    {t.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Paginação */}
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
      </div>
    </section>
  );
}
