import { MdOutlinePets } from "react-icons/md"
import { GrSchedule } from "react-icons/gr";

export default function Navbar() {
    return (
        <header className="px-5 md:px-20 py-6 flex items-center justify-between border-b border-b-[#ccc]">
            <div className="flex gap-2">
                <MdOutlinePets size={24} color="#3f9271" />
                <p className="font-black text-[#153229]">pet</p>
                <p className="font-black text-[#ff6b4a]">care</p>
            </div>

            <nav>
                <ul className="flex items-center gap-5 md:gap-10">
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1f4136]">Início</a>
                    </li>
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1f4136]">Funcionalidades</a>
                    </li>
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1f4136]">Contato</a>
                    </li>
                </ul>
            </nav>

            <a href="" className="hidden md:block bg-[#153229] text-white font-medium text-sn px-4 py-3 rounded-full">
                Agendar consulta
            </a>

            <div className="block md:hidden bg-[#153229] p-2 rounded-full]">
                <a className="block md:hidden" >
                    <GrSchedule color="fff" size={14} />
                </a>
            </div>

        </header>
    );
}