import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

function AccordionItem({ question, answer }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex flex-col border-2 border-[rgba(var(--orangeText),0.15)] py-4 px-6 rounded-[0.25rem]">
            <li className="flex justify-between hover:text-[rgba(var(--orangeText))] hover:underline" onClick={() => setOpen(!isOpen)}>
                <h3>{question}</h3>
                <button>
                    <CaretDownIcon size={16} color="black" weight="bold" className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </li>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`} style={{ maxHeight: isOpen ? '500px' : '0px' }}>
                <p className="mt-4 text-[rgba(var(--grayText))]">{answer}</p>
            </div>
            {/* {isOpen && <p className="mt-2 text-[rgba(var(--grayText))]">{answer}</p>} */}
        </div>
    );
}

function Part5({ id }) {
    return (
        <div id={id} className="flex flex-col items-center justify-center py-12">
            <div className="flex flex-col items-center gap-16 w-[75vw] md:w-[60vw] xl:w-[45vw] justify-center">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="md:text-4xl text-2xl font-bold text-center">
                        Dúvidas <strong className="text-[rgba(var(--orangeText))]">Frequentes</strong>
                    </h1>
                    <h2 className="text-center md:text-base text-xs">Esclarecemos as principais dúvidas sobre o curso</h2>
                </div>
                <div className="flex flex-col gap-4 mx-auto">
                    <AccordionItem question={'Para quem é este curso?'} answer="Este curso é ideal para estudantes que estão se preparando para o ENEM, vestibulares e concursos. Também é útil para quem quer melhorar seus métodos de estudo em geral, seja no ensino médio, cursinho ou até mesmo na faculdade." />
                    <AccordionItem question={'Como vou receber o conteúdo?'} answer="Após a compra, você receberá um email com as instruções de acesso. O material estará disponível em formato digital (PDF) para download imediato, podendo ser acessado em qualquer dispositivo." />
                    <AccordionItem question={'Quanto tempo tenho para aplicar o método?'} answer="O acesso ao material é vitalício! Você pode consultar e revisar o conteúdo quantas vezes quiser. O método pode ser aplicado imediatamente e os resultados começam a aparecer nas primeiras semanas." />
                    <AccordionItem question={'E se eu não ficar satisfeito?'} answer="Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta solicitar o reembolso e devolvemos 100% do valor pago, sem questionamentos." />
                    <AccordionItem question={'O método funciona para qualquer área?'} answer="Sim! As técnicas de estudo, memorização e organização apresentadas no curso são universais e podem ser aplicadas em qualquer área do conhecimento, seja exatas, humanas ou biológicas." />
                    <AccordionItem question={'Preciso de algum conhecimento prévio?'} answer="Não! O curso é feito para quem está começando do zero. Explicamos desde os conceitos mais básicos até as técnicas mais avançadas, de forma didática e fácil de entender." />
                    <AccordionItem question={'Como sei que o método funciona?'} answer="O método é baseado em técnicas cientificamente comprovadas e já foi testado por mais de 1.000 estudantes, com taxa de satisfação de 95%. Além disso, você tem 7 dias para testar sem risco." />
                </div>
                <div className="flex flex-col items-center gap-4 text-center py-6 bg-[rgba(var(--orangeText),0.15)] rounded-[0.5rem] md:w-3/4 w-full">
                    <h2 className="font-semibold">Ainda tem dúvidas?</h2>
                    <h2 className="text-xs font-normal text-[rgba(var(--grayText))]">
                        Entre em contato conosco através do email: <strong className="text-[rgba(var(--orangeText))]">contato@exemplo.com</strong>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Part5;
