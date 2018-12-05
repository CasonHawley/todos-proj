



const INITIAL_STATE = {
    items: [
        'learnnn',
        'redux',
        'state management',
        'sah dude',
        'oh asah dude'
      ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO': return state
        default: return state
    }
}
