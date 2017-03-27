export let searchTodo = searchText => {
    return {
        type: 'SEARCH_TODO',
        searchText
    }
}

export let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

export let addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export let toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}