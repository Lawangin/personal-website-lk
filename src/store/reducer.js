const initialState = {
    reducerState: 'state inside middleware',
    techStyle: ['react', 'node', 'firebase', 'mongodb', 'redux', 'aws', 'heroku', 'graphql']
};

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;