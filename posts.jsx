import 'bootstrap/dist/css/bootstrap.min.css';


export default class extends React.Component {
  static async getInitialProps({ req, user, url }) {
    var todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(resp => resp.json());
    return { todos: todos };
  }
  render() {
    return (
        <div className="container">
        {this.props.todos.length} todos
            {this.props.todos.map(todo =>
                <p key={todo.id} className="card p-3">{todo.id}. {todo.title}</p>)}
        </div>
    );
  }
}