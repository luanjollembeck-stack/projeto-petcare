import { MdOutlinePets } from "react-icons/md";

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="flex items-center gap-2">
        <MdOutlinePets size={15} color="#000"/>
        <span className="text-[20px] font-black text-black">pet</span>
        <span className="text-[20px] font-black text-[#FF6B4A]">care</span>
        </div>
        <div className="flex flex-col">
        <p className="flex flex-col items-center justify-center font-black text-2xl">Entrar na sua conta</p>
        <p className="flex flex-col items-center justify-center font-black text-1x1 text-black/40">Acompanhe a rotina do seu pet</p>
        </div>
        <div>
          <p>E-mail</p>
          <input type="email" />
          <p>Senha</p>
          <input type="text" />
        </div>
        <div>
          <button>Esqueci minha Senha</button>
        </div>
        <div>
          <button>
            Entrar
          </button>
        </div>
        <div>
          Ainda não tem conta?<button>cadastre-se</button>
        </div>
      </div>
    </>
  )
}

export default App