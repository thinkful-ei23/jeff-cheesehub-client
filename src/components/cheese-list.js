import React from 'react';
import {fetchCheeses} from '../actions.cheese';
import {connect} from 'react-redux';

export class CheeseList extends React.Component {
    renderResults() {
        if(this.props.loading) {
            return <li>Loading</li>;
        }
        if(this.props.error) {
            return <li>Error</li>;
        }
        const listedCheeses = props.cheeses.map((cheese, i) => {
            return (<li key={i}>{cheese}</li>)
        });
        return (listedCheeses);
    }
    componentDidMount() {
        console.log(fetchCheeses());
        this.props.dispatch(fetchCheeses());
    }
    render() {
        console.log(this.renderResults());
        return (
            <ul>
                {this.renderResults()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
})

export default connect(mapStateToProps)(CheeseList);

