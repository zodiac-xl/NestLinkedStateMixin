var NestLinkedStateMixin = {

    nestObject(object, stateArr){
        let length = stateArr.length;


        let getValue = ()=> {
            let value;
            let newObj = object;
            switch (length) {
                case 1:
                    value = newObj[stateArr[0]];
                    break;
                case 2:
                    value = newObj[stateArr[0]][stateArr[1]];
                    break;
                case 3:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]];
                    break;
                case 4:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]];
                    break;
                case 5:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]];
                    break;
            }
            return value;
        };

        let setValue = (newValue)=> {
            let newObject = object;
            switch (length) {
                case 1:
                    newObject[stateArr[0]] = newValue;
                    break;
                case 2:
                    newObject[stateArr[0]][stateArr[1]] = newValue;
                    break;
                case 3:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]] = newValue;
                    break;
                case 4:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]] = newValue;
                    break;
                case 5:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]] = newValue;
                    break;
            }
            return newObject;
        };
        let arrPush = (item)=> {
            let newObject = object;
            switch (length) {
                case 1:
                    newObject[stateArr[0]].push(item);
                    break;
                case 2:
                    newObject[stateArr[0]][stateArr[1]].push(item);
                    break;
                case 3:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]].push(item);
                    break;
                case 4:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]].push(item);
                    break;
                case 5:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]].push(item);
                    break;
            }
            return newObject;
        };

        let arrSplice = ()=> {
            let newObject = object;
            let splice = (new Array()).splice;
            let ags = arguments;
            let newArr;

            switch (length) {
                case 1:
                    newArr = splice.apply(newObject[stateArr[0]], ags);
                    break;
                case 2:
                    newArr = splice.apply(newObject[stateArr[0]][stateArr[1]], ags);
                    break;
                case 3:
                    newArr = splice.apply(newObject[stateArr[0]][stateArr[2]][stateArr[2]], ags);
                    break;
                case 4:
                    newArr = splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]], ags);
                    break;
                case 5:
                    newArr = splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]], ags);
                    break;
            }
            return this.setValue(newArr);
        };
        return {
            getValue: getValue,
            setValue: setValue,
            arrPush: arrPush,
            arrSplice: arrSplice
        }
    },
    nestLinkedState: function (stateArr, context) {
        if (!context) {
            context = this;
        }

        let targetState;
        let length = stateArr.length;
        let newState = context.state;


        targetState = this.nestObject(newState, stateArr).getValue();

        return {
            value: targetState,
            requestChange: function (newValue) {
                switch (length) {
                    case 1:
                        newState[stateArr[0]] = newValue;
                        break;
                    case 2:
                        newState[stateArr[0]][stateArr[1]] = newValue;
                        break;
                    case 3:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]] = newValue;
                        break;
                    case 4:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]] = newValue;
                        break;
                    case 5:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]] = newValue;
                        break;
                }
                context.setState(newState);
            }
        }
    }
};

export default NestLinkedStateMixin;