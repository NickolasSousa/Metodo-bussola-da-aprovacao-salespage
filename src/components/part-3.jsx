import { ChartBarIcon, StarIcon } from '@phosphor-icons/react/dist/ssr';
import Line from '../assets/Line-1.png';

function Part3({ id }) {
    return (
        <div id={id} className="flex flex-col items-center justify-center min-w-full min-h-auto gap-16 py-16 px-8">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h1 className="text-[2rem] font-extrabold">
                    Histórias de <strong className="text-[rgba(var(--orangeText))]">Sucesso</strong>
                </h1>
                <h3 className="text-[rgba(var(--grayText))] text-[1rem] font-normal">Veja como outros estudantes transformaram seus resultados com nosso método</h3>
            </div>
            <div>
                <ul className="flex flex-wrap gap-8 justify-center">
                    <li className="flex flex-col gap-2 w-[16rem] h-auto px-4 py-3 rounded-[0.5rem] border-2 border-[rgba(var(--orangeText),0.2)] content-start hover:border-[rgba(var(--orangeText))] duration-300">
                        <div className="flex gap-1">
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                        </div>
                        <h3 className="text-[0.875rem] font-light italic">"O método me ajudou a organizar meus estudos de forma que eu nunca tinha conseguido antes. Passei no vestibular mais difícil do país!"</h3>
                        <img src={Line} alt="" className="h-0.5" />
                        <div>
                            <h3 className="text-[0.875rem] font-semibold">Maria Silva</h3>
                            <h3 className="text-xs text-[rgba(var(--orangeText))] font-medium">Aprovada em Medicina - USP</h3>
                        </div>
                    </li>
                    <li className="flex flex-col gap-2 w-[16rem] h-auto px-4 py-3 rounded-[0.5rem] border-2 border-[rgba(var(--orangeText),0.2)] content-start hover:border-[rgba(var(--orangeText))] duration-300">
                        <div className="flex gap-1">
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                        </div>
                        <h3 className="text-[0.875rem] font-light italic">"As técnicas de memorização foram um divisor de águas. Consegui absorver muito mais conteúdo em menos tempo."</h3>
                        <img src={Line} alt="" className="h-0.5" />
                        <div>
                            <h3 className="text-[0.875rem] font-semibold">João Pedro</h3>
                            <h3 className="text-xs text-[rgba(var(--orangeText))] font-medium">Aprovado em Engenharia - UNICAMP</h3>
                        </div>
                    </li>
                    <li className="flex flex-col gap-2 w-[16rem] h-auto px-4 py-3 rounded-[0.5rem] border-2 border-[rgba(var(--orangeText),0.2)] content-start hover:border-[rgba(var(--orangeText))] duration-300">
                        <div className="flex gap-1">
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                            <StarIcon size={16} color="#EAC926" weight="fill" />
                        </div>
                        <h3 className="text-[0.875rem] font-light italic">"Estava perdida com tanto conteúdo. Este guia me deu a direção que eu precisava para focar no que realmente importa."</h3>
                        <img src={Line} alt="" className="h-0.5" />
                        <div>
                            <h3 className="text-[0.875rem] font-semibold">Ana Carolina</h3>
                            <h3 className="text-xs text-[rgba(var(--orangeText))] font-medium">Aprovada em Direito - UFMG</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-6 p-4 bg-[rgba(var(--yellowText),0.2)] rounded-2xl md:px-8">
                <div className="flex items-center gap-1 justify-center">
                    <ChartBarIcon size={20} color="#FF8101" weight="fill" />
                    <h2 className="sm:text-[1.25rem] text-[14px] font-bold">Resultados Comprovados</h2>
                </div>
                <ul className="flex flex-wrap sm:gap-12 gap-6 text-center justify-center">
                    <li>
                        <h3 className="text-[1rem] font-bold text-[rgba(var(--orangeText))]">95%</h3>
                        <h3 className="text-xs font-normal">Taxa de satisfação</h3>
                    </li>
                    <li>
                        <h3 className="text-[1rem] font-bold text-[rgba(var(--orangeText))]">+1000</h3>
                        <h3 className="text-xs font-normal">Estudantes transformados</h3>
                    </li>
                    <li>
                        <h3 className="text-[1rem] font-bold text-[rgba(var(--orangeText))]">30%</h3>
                        <h3 className="text-xs font-normal">Aumento médio nas notas</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Part3;
