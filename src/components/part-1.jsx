// import { CheckCircleIcon, LockIcon, CreditCardIcon } from '@phosphor-icons/react';
import { CheckCircleIcon, LockIcon, CreditCardIcon } from '@phosphor-icons/react/dist/ssr';
import metodoBussolaIcon from '../assets/metodoBussola-icon.png';

function Part1() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-linear-to-br from-[#EAC926] to-[#FF8101] text-center text-[#FFFAEC] font-['Inter']">
            <div className="flex flex-col items-center justify-center gap-12 md:gap-16 p-8">
                <div>
                    <div className="w-fill flex justify-center md:h-[10rem] h-24 w-full">
                        <img src={metodoBussolaIcon} alt="" className="" />
                    </div>
                    <div>
                        <h1 className="md:text-[64px] text-2xl font-extrabold text-shadow-lg italic">
                            Do Zero à <strong className="text-[rgba(var(--yellowText))]">Aprovação</strong>
                        </h1>
                        <h3 className="md:text-base text-xs font-semibold">O método completo para transformar seus estudos e conquistar sua vaga na universidade dos sonhos</h3>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center justify-center bg-[rgba(var(--yellowText),0.2)]
                    rounded-2xl px-6 py-4 gap-2 w-fit font-semibold box-shadow-lg"
                >
                    <div className="flex items-center md:gap-2 gap-1">
                        <CheckCircleIcon color="white" weight="bold" className="md:h-[1rem] h-3" />
                        <h3 className="md:text-base text-xs">Garantido: 7 dias para teste</h3>
                    </div>
                    <h3 className="md:text-base text-xs">Caso não fique satisfeito, o valor será reembolsado</h3>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center md:gap-6 gap-2">
                        <a href="https://pay.hotmart.com/A101595551C?off=m1nwu38v&fbclid=PAZXh0bgNhZW0CMTEAAacq5K6acMXNLBzYvHmNjI2TJx2KPTZ1RM7b6pplBclm1TfhYkqzDES0RPovKQ_aem_nedPJhIAUldA_tuYz6_7jg&bid=1759363667639" className="md:text-xl font-extrabold bg-black rounded-2xl md:px-6 md:py-4 px-2 py-3 text-white text-[0.75rem]">
                            Garanta sua Aprovação por R$37,00
                        </a>
                        <div>
                            <div className="flex items-center md:gap-2 gap-1 md:text-base text-[0.625rem]">
                                <LockIcon color="black" weight="regular" className="md:h-4 h-3" />
                                <h3>Compra 100% segura</h3>
                            </div>
                            <div className="flex items-center md:gap-2 gap-1 md:text-base text-[0.625rem]">
                                <CreditCardIcon color="black" weight="regular" className="md:h-4 h-3" />
                                <h3>Parcelamento Disponível</h3>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-[rgba(var(--whiteText),0.8)] md:text-base text-xs">Mais de 1.000 estudantes já transfornaram seus estudos</h4>
                </div>
            </div>
        </div>
    );
}

export default Part1;
