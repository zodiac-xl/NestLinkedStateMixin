
var NestLinkedStateMixin = {

    nestObject(object, stateArr){
        var  length = stateArr.length;


        var getValue = function(){
            var value;
            var newObj = object;
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
                case 6:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]];
                    break;
                case 7:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]];
                    break;
                case 8:
                    value = newObj[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]][stateArr[7]];
                    break;
            }
            return value;
        };

        var setValue = function(newValue) {
            var newObject = object;
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
                case 6:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]] = newValue;
                    break;
                case 7:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[5]] = newValue;
                    break;
                case 8:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]][stateArr[7]] = newValue;
                    break;
            }
            return newObject;
        };
        var arrPush = function(item) {
            var newObject = object;
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
                case 6:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]].push(item);
                    break;
                case 7:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]].push(item);
                    break;
                case 8:
                    newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]][stateArr[7]].push(item);
                    break;
            }
            return newObject;
        };

        var arrSplice = function() {
            var newObject = object;
            var splice = (new Array()).splice;
            var ags = arguments;

            switch (length) {
                case 1:
                    splice.apply(newObject[stateArr[0]], ags);
                    break;
                case 2:
                    splice.apply(newObject[stateArr[0]][stateArr[1]], ags);
                    break;
                case 3:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]], ags);
                    break;
                case 4:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]], ags);
                    break;
                case 5:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]], ags);
                    break;
                case 6:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]], ags);
                    break;
                case 7:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]], ags);
                    break;
                case 8:
                    splice.apply(newObject[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]][stateArr[7]], ags);
                    break;
            }
            return newObject;
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

        var targetState;
        var length = stateArr.length;
        var newState = context.state;


        targetState = NestLinkedStateMixin.nestObject(newState, stateArr).getValue();

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
                    case 6:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]] = newValue;
                        break;
                    case 7:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[5]][stateArr[6]] = newValue;
                        break;
                    case 8:
                        newState[stateArr[0]][stateArr[1]][stateArr[2]][stateArr[3]][stateArr[4]][stateArr[6]][stateArr[7]][stateArr[8]] = newValue;
                        break;
                }
                context.setState(newState);
            }
        }
    }
};
module.exports = NestLinkedStateMixin;