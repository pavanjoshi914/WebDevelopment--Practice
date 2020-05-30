import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count'
        };
        //this.handleSortByOption=this.handleSortByOption.bind(this);
       // this.getSortByClass = this.getSortByClass.bind(this);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }
    getSortByClass(sortByOptionValue) {
        if (sortByOptionValue === this.state.sortBy) {
            return 'active';
        }
        else {
            return '';
        }
    }
    handleSortByOption(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }
    handleTermChange(e) {
        this.setState({
            term: e.target.value
        });
    }
    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        });
    }
    handleSearch(e){
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        e.preventDefault();
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li key={sortByOptionValue} onClick={this.handleSortByOption.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} > {sortByOption} </li>);
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }

};
export default SearchBar;