const WorkInProgress = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-linear-to-r from-electric-blue to-vibrant-purple min-w-40 max-w-5xl rounded-4xl shadow-lg shadow-primary-dark-effect p-5 sm:p-10 animate-wiggle">
      <h2 className="text-3xl text-amber-200 font-bold py-5 animate-pulse">
        Site Em Construção...
      </h2>
      <p className="text-soft-white py-5 sm:py-10 text-justify">
        O Gerenciador de Currículo Vitae Profissional ainda está em fase de
        desenvolvimento. Em breve, você poderá criar, editar e gerar currículos
        modernos e personalizados de forma simples e intuitiva. Nossa equipe
        está trabalhando para oferecer uma experiência completa — com
        visualização em tempo real, múltiplos estilos e exportação em formatos
        como PDF, imagem ou pronto para impressão. Fique atento às próximas
        atualizações!
      </p>
    </div>
  );
};

export default WorkInProgress;
