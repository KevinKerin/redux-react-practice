const defaultColour = {
    backgroundColor: 'black'
}

const colourReducer = (state = defaultColour, action) => {
    switch(action.type){
        case ("BLUE") : {
            return {
                backgroundColor: 'blue'
            };
        }
        case ("GREEN") : {
            return {
                backgroundColor: 'green'
            };
        }
        case ("YELLOW") : {
            return {
                backgroundColor: 'yellow'
            };
        }
        case ("BROWN") : {
            return {
                backgroundColor: 'brown'
            };
        }
        case ("BLACK") : {
            return {
                backgroundColor: 'black'
            }
        }
        default : {
            return defaultColour
        }
    }
}

export default colourReducer;