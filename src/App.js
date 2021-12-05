import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//aqui, robots é importado com {} pois o arquivo 'robot.js' pode exportar mais de um componente
//import { robots } from './robots';
import './App.css'
import Scroll from './Scroll.js'

//Utilizamos class para poder manipular dados dos filhos atraves da tag .this
class App extends Component {
    constructor() {

        //faz a chamada do construtor
        super()

        //state está definindo os conteúdos que podem ser modificados em nosso app.
        //Normalmente, ele fica no componente pai, ou seja, o componente que possui os conteúdos que queremos modificar
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    //react life cycles google
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    //Este nome não é padrão, é um nome criado, pode ser qualquer coisa
    //Sempre que um método for feito criado pelo aplicativo, ou seja, não é nativo do react, ele deve ser criado com arrow functions (=>) 
    onSearchChange = (event) => {

        //sempre que um estado for modificado, ele deve ser chamado através de this.setState({}) ao invés de this.state.searchfield
        //event.targe.value sempre será usado quando precisamos chegar até o valor de algo, nesse caso precisamos saber o que está escrito em searchField
        this.setState({searchField: event.target.value})
    }

    render() {
        //o método .filter() cria um array com todos os elementos que passaram no teste implementado pela função fornecida, nesse caso a função é a robot
        const filteredRobots = this.state.robots.filter(robot => {

            //toLowerCase() é um método que todas as strings possuem e que transforma todas as palavras em lower case
            //includes() é um metodo que determina se uma array (string nesse caso) contém algum elemento, retorna true ou false
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>             
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );

        }
        
    } 
}

export default App;