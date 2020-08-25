const defaultShape = {
    borderRadius: '0',
    width: '150px',
    height: '150px'
  }

const shapeReducer = (state = defaultShape, action) => {
    switch(action.type){
        case("CIRCLE"): {
            return ({
                width: '150px',
                height: '150px',
                borderRadius: '50%'
              })
        }
        case("OVAL"): {
            return ({
                width: '300px',
                height: '150px',
                borderRadius: '50%'
              })
        }
        case("SQUARE"): {
            return ({
                borderRadius: '0',
                width: '150px',
                height: '150px'
              })
        }
        case("RECTANGLE"): {
            return ({
                borderRadius: '0',
                width: '300px',
                height: '150px'
              })
        }
        default: {
            return defaultShape
        }
    }
}

export default shapeReducer;