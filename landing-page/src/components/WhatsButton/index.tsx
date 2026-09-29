import { FiMessageSquare } from "react-icons/fi";

export default function Whatsbutton() {
    return(
        <div className="bg-[#FF6B4A] w-max p-4 rounded-full fixed right-[20px] bottom-[90px]">
            <a href="">
                <FiMessageSquare size={24} color="#fff" />
            </a>
        </div>
    );
}