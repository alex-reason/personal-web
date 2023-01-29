import Menu from './sections/Menu';
import Landing from './sections/Landing';
import Competencies from './sections/Competencies';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';

const App = () => {
    const menuItems = [
        { href: '#competencies', label: 'competencies' },
        { href: '#portfolio', label: 'portfolio' },
    ];

    const reveal = () => {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 30;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);

    return (
        <div className='app'>
            <Menu menuItems={menuItems} />
            <div className='content'>
                <Landing />
                <Competencies />
                <Portfolio />
                {/* <Experience /> */}
            </div>
            <Footer />
        </div>
    )
};

export default App;