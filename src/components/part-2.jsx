import iconEssay from '../assets/icon-essay.png';
import iconMemory from '../assets/icon-memory.png';
import iconFocus from '../assets/icon-focus.png';
import iconPlanning from '../assets/icon-planning.png';
import { TargetIcon } from '@phosphor-icons/react/dist/ssr';

function Part2({ id }) {
    return (
        <div id={id} className="flex flex-col items-center justify-center gap-16 min-w-screen min-h-auto text-center bg-[rgba(var(--whiteText))] font-['Inter'] px-8 py-12">
            <div className="flex flex-col items-center gap-3 w-full">
                <h2 className="sm:text-[2rem] text-xl font-bold">O que você vai aprender</h2>
                <h3 className="sm:text-[1rem] text-xs font-light text-[rgba(var(--grayText))]">Um método completo e testado para transformar seus estudos em um caminho claro rumo à aprovação</h3>
            </div>
            <div>
                <ul className="flex flex-wrap xl:gap-8 md:gap-6 gap-4 justify-center">
                    <li className="flex flex-col items-center justify-center gap-4 h-64 w-[90vw] sm:w-56  text-center bg-white rounded-2xl p-4 hover:shadow-[0_10px_15px_-3px_rgba(var(--orangeText),0.25),_0_4px_6px_-4px_rgba(var(--orangeText),0.2)] duration-300 hover:scale-110">
                        <img src={iconPlanning} alt="" className="w-20 h-20 " />
                        <h2 className="text-[16px] font-semibold">Plano de Estudos Realista</h2>
                        <h3 className="text-xs font-light">Aprenda a montar um cronograma de estudos personalizado e organizado que realmente funciona para sua rotina</h3>
                    </li>
                    <li className="flex flex-col items-center justify-center gap-4 h-64 w-[90vw] sm:w-56 text-center bg-white rounded-2xl p-4 hover:shadow-[0_10px_15px_-3px_rgba(var(--orangeText),0.25),_0_4px_6px_-4px_rgba(var(--orangeText),0.2)] duration-300 hover:scale-110">
                        <img src={iconMemory} alt="" className="w-20 h-20 " />
                        <h2 className="text-[16px] font-semibold">Técnicas de memorização</h2>
                        <h3 className="text-xs font-light">Descubra métodos cientificamente comprovados para memorizar e revisar conteúdos de forma eficiente.</h3>
                    </li>
                    <li className="flex flex-col items-center justify-center gap-4 h-64 w-[90vw] sm:w-56 text-center bg-white rounded-2xl p-4 hover:shadow-[0_10px_15px_-3px_rgba(var(--orangeText),0.25),_0_4px_6px_-4px_rgba(var(--orangeText),0.2)] duration-300 hover:scale-110">
                        <img src={iconFocus} alt="" className="w-20 h-20 " />
                        <h2 className="text-[16px] font-semibold">Foco e Produtividade</h2>
                        <h3 className="text-xs font-light">Estratégias para vencer a procrastinação, manter a disciplina e aumentar sua produtividade nos estudos.</h3>
                    </li>
                    <li className="flex flex-col items-center justify-center gap-4 h-64 w-[90vw] sm:w-56 text-center bg-white rounded-2xl p-4 hover:shadow-[0_10px_15px_-3px_rgba(var(--orangeText),0.25),_0_4px_6px_-4px_rgba(var(--orangeText),0.2)] duration-300 hover:scale-110 transition-all">
                        <img src={iconEssay} alt="" className="w-20 h-20 " />
                        <h2 className="text-[16px] font-semibold">Preparação Completa</h2>
                        <h3 className="text-xs font-light">Dicas práticas para redação e as principais matérias do vestibular, incluindo ENEM.</h3>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-3 max-w-[32rem] bg-[rgba(var(--yellowText),0.15)] rounded-2xl py-6 px-4">
                <div className="flex items-center gap-1 justify-center">
                    <TargetIcon size={16} color="black" weight="regular" />
                    <h2 className="text-[1rem] font-semibold">Resultado Garantido</h2>
                </div>
                <h3 className="text-xs font-normal">Mais do que estudar, você vai aprender a estudar do jeito certo — aproveitando melhor o seu tempo, entendendo seus pontos fortes e fracos e criando um método que funciona melhor para você.</h3>
            </div>
        </div>
    );
}
export default Part2;
