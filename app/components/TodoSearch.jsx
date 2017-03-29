var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
    render: function () {
        let {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container-header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search Todos" value={searchText} 
                        onChange={() => dispatch(actions.searchTodo(this.refs.searchText.value))}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => dispatch(actions.toggleShowCompleted(this.refs.showCompleted.checked))}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
});

export default connect(
    state => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }
)(TodoSearch);