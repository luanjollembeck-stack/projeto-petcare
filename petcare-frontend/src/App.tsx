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

        <div className="flex flex-col gap-y-1">
        <p className="flex flex-col items-center justify-center font-black text-2xl">Entrar na sua conta</p>
        <p className="flex flex-col items-center justify-center font-sans text-sm text-black/50">Acompanhe a rotina do seu pet</p>
        </div>

        <div className="flex flex-col w-90">
          <p className="text-[13px] font-black">E-mail</p>
          <input className="border-b-1 border-black/25 placeholder:text-[13px]" 
          type="email" 
          placeholder="voce@gmail.com"/>
          <p className="text-[13px] font-black">Senha</p>
          <input className="border-b-1 border-black/25 placeholder:text-[13px]" 
          type="text" 
          placeholder="Sua senha"
          />
          <button className="self-end w-fit font-black text-[13px] text-black/65 text-right py-0.5 cursor-pointer" >Esqueci minha Senha</button>
        </div>

        <div>
          <button className="bg-black font-black text-white rounded-full px-39 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
            Entrar
          </button>
        </div>

        <div className="flex items-center gap-1">
          <span className="flex flex-col items-center justify-center font-sans">Ainda não tem conta?</span>
          <button className="font-black cursor-pointer">cadastre-se</button>
        </div>

      </div>
    </>
  )
}

export default App