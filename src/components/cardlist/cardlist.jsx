import React from 'react';

import Card from '../card/card';
import SearchBar from '../searchbar/searchbar';

import cardList from './cardlist.module.css';

class CardList extends React.Component {

    state = {
        users: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(users => this.setState({ users: users }));
    }

    handleSearch = (e) => {
        this.setState({searchTerm: e.target.value.toLowerCase()});
    }

    render() {
        const filterList = this.state.users.filter( user => (user.name + user.emailId).toLowerCase().includes(this.state.searchTerm));
        return (
            <>
                <div><SearchBar handleSearch={(e) => this.handleSearch(e)} /></div>
                <div className={cardList.cardList}>
                    {filterList.map(user => <Card key={user.id} name={user.name} email={user.email} id={user.id} />)}
                </div>
            </>
        );
    }
}

export default CardList;