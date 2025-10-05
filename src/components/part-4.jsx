import { CheckCircleIcon, CreditCardIcon, DeviceMobileCameraIcon, LockIcon, ShieldCheckIcon } from '@phosphor-icons/react/dist/ssr';
// import { CheckCircleIcon, CreditCardIcon, DeviceMobileCameraIcon, LockIcon, ShieldCheckIcon } from '@phosphor-icons/react';

function Part4({ id }) {
    return (
        <div id={id} className="flex flex-col items-center justify-center gap-12 py-16 bg-[rgba(var(--whiteText))] md:px-8">
            <div className="flex flex-col items-center justify-center gap-3 p-2">
                <h2 className="md:text-[2rem] font-bold text-xl text-center">
                    Investimento na Sua <strong className="text-[rgba(var(--orangeText))]">Aprovação</strong>
                </h2>
                <h3 className="text-[rgba(var(--grayText))] text-center text-[0.75rem] md:text-[1rem]">Um investimento pequeno para um resultado que mudará sua vida</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 px-6 py-8 border-4 border-[rgba(var(--orangeText),0.2)] rounded-[0.5rem] bg-white w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[55vw] xl:w-[40vw] 2xl:w-[30vw]">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="md:text-2xl font-semibold text-xl">Do Zero à Aprovação</h2>
                        <h3 className="text-[rgba(var(--grayText))] text-center md:text-[1rem] text-xs">Estratégias de Estudo para o Vestibular</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="md:text-[2rem] font-semibold text-[rgba(var(--orangeText))] text-xl">R$ 37,00</h3>
                        <h3 className="text-[rgba(var(--grayText))] md:text-xs text-xs">ou 5x de R$ 8,19 no cartão</h3>
                    </div>
                </div>
                <ul className="self-start gap-2.5 flex flex-col md:text-[1rem] text-[0.875rem]">
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Plano de estudos presonalizado</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Técnicas de memorização avançadas</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Estratégias para vencer a procrastinação</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Métodos de organização e foco</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Dicas específicas para redação ENEM</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Preparação para principais matérias</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Acesso vitalício ao conteúdo</h2>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircleIcon size={16} color="#FF8101" weight="bold" />
                        <h2>Garantia de 7 dias</h2>
                    </li>
                </ul>
                <div className="flex flex-col items-center gap-2 sm:gap-3 text-center bg-[rgba(var(--yellowText),0.2)] rounded-[12px] border-[1px] border-[rgba(var(--yellowText))] lg:px-16 lg:py-8 md:px-8 md:py-4 p-4">
                    <span className="md:text-[1.25rem] font-semibold flex items-center gap-2 ">
                        <ShieldCheckIcon size={20} color="#FF8101" weight="bold" />
                        Garantia de 7 Dias
                    </span>
                    <h2>Caso não fique satisfeito devolvemos 100% do seu dinheiro, sem perguntas</h2>
                </div>
                <a href="https://pay.hotmart.com/A101595551C?off=m1nwu38v&fbclid=PAZXh0bgNhZW0CMTEAAacq5K6acMXNLBzYvHmNjI2TJx2KPTZ1RM7b6pplBclm1TfhYkqzDES0RPovKQ_aem_nedPJhIAUldA_tuYz6_7jg&bid=1759363667639" className="bg-gradient-to-r from-[#ff8101] to-[#eac926] text-white font-bold w-full py-4 rounded-2xl lg:text-xl text-center ">
                    QUERO GARANTIR MINHA APROVAÇÃO AGORA
                </a>
                <ul className="flex sm:flex-row flex-col md:gap-6 sm:gap-4 gap-2.5 justify-center w-full items-center sm:items-start">
                    <li>
                        <span className="flex items-center gap-2 lg:text-xs md:text-[10px] font-medium text-[rgba(var(--grayText))]">
                            <LockIcon size={14} color="#787878" weight="regular" />
                            Compra 100% segura
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center gap-2 lg:text-xs md:text-[10px] font-medium text-[rgba(var(--grayText))]">
                            <CreditCardIcon size={14} color="#787878" weight="regular" />
                            Parcelamento
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center gap-2 lg:text-xs md:text-[10px] font-medium text-[rgba(var(--grayText))]">
                            <DeviceMobileCameraIcon size={14} color="#787878" weight="regular" />
                            Acesso imediato
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Part4;
