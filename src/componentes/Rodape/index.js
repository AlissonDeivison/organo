const Rodape = () => {
  return (
    <section className="relative flex w-full h-64 overflow-hidden bg-primary items-center">
        <img src="/imagens/fundo.png" className="h-full w-full object-cover" alt="bg footer"/>
      <div className="absolute flex justify-between w-full items-center">
        <div className="flex h-8 ml-36">
          <img src="/imagens/fb.png" alt="Facebook logo" className="mr-16" />
          <img src="/imagens/tw.png" alt="Twitter logo" className="mr-16" />
          <img src="/imagens/ig.png" alt="Instagram logo" />
        </div>
        <div>
          <img src="/imagens/logo.png" alt="Logo Alura"/>
        </div>
        <div>
          <h5 className="mr-40 text-white font-medium text-xl">Desenvolvido por Alura.</h5>
        </div>
      </div>
    </section>
  );
};

export default Rodape;
