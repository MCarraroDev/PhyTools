const toolsList = [
    {
        id: 'resistor-calculator',
        title: 'Calcolatore Resistenze',
        icon: 'Ω',
        description: 'Calcola il valore di una resistenza in base ai colori delle bande',
        path: 'https://mcarrarodev.github.io/PhyTools/tools/resistor-calculator.html'
    },
    {
        id: '',
        title: 'In Arrivo!',
        icon: '...',
        description: '👀👀👀',
        path: ''
    }
];

function App() {
    return (
        <div>
            <header className="main-header">
                <img src="assets/logo-main.png" alt="Fisica PhyTools Logo" />
                <h1>PhyTools</h1>
            </header>
            <div className="tools-grid">
                {toolsList.map(tool => (
                    <a key={tool.id} href={tool.path} className="tool-card">
                        <div className="tool-header">
                            <div className="tool-icon">{tool.icon}</div>
                            <h3>{tool.title}</h3>
                        </div>
                        <p>{tool.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
