
export const active = {
    ADD : "ADD",
    // DELETE: "DELETE",
    LEFT: "LEfT",
    RIGHT: "RIGHT",
    DOWN: "DOWN",
    UP: "UP",
    INCREMENT_WIDTH: "INCREMENT_WIDTH",
    DECREMENT_WIDTH: "DECREMENT_WIDTH",
    INCREMENT_HEIGHT: "INCREMENT_HEIGHT",
    DECREMENT_HEIGHT: "DECREMENT_HEIGHT",
    STORE_RESULT : 'STORE_RESULT',
    DELETE_RESULT : 'DELETE_RESULT',

}


export const onAdd = (name, x , y , width, height) => {
    return {
        type: active.ADD,
        value: {
            title : name,
            x : x,
            y : y,
            width: width,
            height: height
        }
    };
}

export const onLeft = (value) => {
    return {
        type: active.LEFT,
        val: value
    };
}

export const onRight = (value) => {
    return {
        type: active.RIGHT,
        val: value
    };
}
export const onUp = (value) => {
    return {
        type: active.UP,
        val: value
    };
}
export const onDown = (value) => {
    return {
        type: active.DOWN,
        val: value
    };
}
export const onIncrementWidth = (value) => {
    return {
        type: active.INCREMENT_WIDTH,
        val: value
    };
}
export const onDecrementWidth = (value) => {
    return {
        type: active.DECREMENT_WIDTH,
        val: value
    };
}
export const onIncrementHeight = (value) => {
    return {
        type: active.INCREMENT_HEIGHT,
        val: value
    };
}
export const onDecrementHeight = (value) => {
    return {
        type: active.DECREMENT_HEIGHT,
        val: value
    };
}

export const storeResult = (res) => {
    return {
        type: active.STORE_RESULT,
        result: res
    };
};

export const deleteResult = (resElId) => {
    return {
        type: active.DELETE_RESULT,
        resultElId: resElId
    };
};

// export const shape = {
//     Triangle : 'polygon(50% 0%, 0% 100%, 100% 100%);',

// }

