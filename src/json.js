import React from "react";
import './css/style.css';
class Json extends React.Component{
    state = {
        user: []
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({user: data})
        });
        
    }

    render(){
        return (
            <>
                <div className="container">
                    {
                    this.state.user.map(user => (
                        <div className="users">
                            <h2>{user.name}</h2>
                            <h4>{user.email}</h4>
                            <p>{user.phone}</p>
                        </div>
                    ))
                    }
                </div>
                </>
        )
    }
}
export default Json;