const Rodape = () => {
  return (
    <section className="relative flex w-full h-64 overflow-hidden bg-primary items-center justify-center items-center">
        <img src="/imagens/fundo.png" className="h-full w-full object-cover" alt="bg footer"/>
      <div className="container absolute flex flex-wrap justify-evenly items-center place-content-center">
        <div className="flex h-6 justify-center">
          <img src="/imagens/fb.png" alt="Facebook logo" className="mr-6" />
          <img src="/imagens/tw.png" alt="Twitter logo" className="mr-6" />
          <img src="/imagens/ig.png" alt="Instagram logo" />
        </div>
        <div className="justify-center flex h-12">
          <img src="/imagens/logo.png" alt="Logo Alura"/>
        </div>
        <div className="justify-center flex">
          <h5 className="text-white font-medium text-xl">Desenvolvido por Alura.</h5>
        </div>
      </div>
    </section>
  );
};

export default Rodape;
