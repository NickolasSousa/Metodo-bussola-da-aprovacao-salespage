import './App.css';
import Part1 from './components/part-1';
import Part2 from './components/part-2';
import Part3 from './components/part-3';
import Part4 from './components/part-4';
import Part5 from './components/part-5';
import Footer from './components/footer';

function App() {
    return (
        <div className="overflow-x-hidden font-['Inter']">
            <Part1 />
            <Part2 />
            <Part3 id="Depoimentos" />
            <Part4 id="Investimento" />
            <Part5 id="FAQ" />
            <Footer />
        </div>
    );
}

export default App;
