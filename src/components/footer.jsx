// import { DeviceMobileCameraIcon, InfinityIcon, InstagramLogoIcon, LockIcon, ShieldCheckIcon } from '@phosphor-icons/react';
import { DeviceMobileCameraIcon, InfinityIcon, InstagramLogoIcon, LockIcon, ShieldCheckIcon } from '@phosphor-icons/react/dist/ssr';
import BussolaIcone from '../assets/metodoBussola-icon.png';
import Line from '../assets/Line-2.png';

function Footer() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 bg-black text-white py-12 px-8">
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:gap-16 gap-8 justify-center w-full h-auto">
                <div className="flex flex-col items-start justify-between gap-4 max-w-[17.5rem]">
                    <img src={BussolaIcone} alt="" className="w-20" />
                    <h2 className="text-2xl font-bold text-[rgba(var(--yellowText))]">Do Zero à Aprovação</h2>
                    <h3 className="text-[14px] text-white">O método completo para transformar seus estudos e conquistar sua vaga na universidade dos sonhos.</h3>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-[1.25rem] font-bold">Links Importantes</h2>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a href="#Investimento">Investimento</a>
                        </li>
                        <li>
                            <a href="#Depoimentos">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#FAQ">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                    <h3 className="text-[1.25rem] font-bold">Garantias</h3>
                    <ul className="flex flex-col gap-2.5">
                        <li>
                            <span className="flex items-center gap-2 text-xs">
                                <LockIcon size={14} color="white" weight="regular" /> Compra 100% segura
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center gap-2 text-xs">
                                <DeviceMobileCameraIcon size={14} color="white" weight="regular" /> Acesso imediato
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center gap-2 text-xs">
                                <ShieldCheckIcon size={14} color="white" weight="regular" /> Garantia de 7 Dias
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center gap-2 text-xs">
                                <InfinityIcon size={14} color="white" weight="regular" /> Compra 100% segura
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://www.instagram.com/metodobussolaoficial/" className="text-xs text-[rgba(var(--grayText))] flex items-center gap-2">
                    <InstagramLogoIcon size={14} color="#787878" weight="regular" /> @metodobussolaoficial
                </a>
                <img className="w-full" src={Line} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-[rgba(var(--grayText))]">
                <h2>© 2024 Do Zero à Aprovação. Todos os direitos reservados.</h2>
                <h3 className="text-xs">Produto vendido através da plataforma Hotmart. Empresa não estabelece vínculo empregatício.</h3>
            </div>
        </div>
    );
}
export default Footer;
