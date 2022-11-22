({
    add: function (component, event, helper) {
        var input1 = parseInt(component.get("v.input1"));
        var input2 = parseInt(component.get("v.input2"));
        console.log('input 1: ' + input1);
        console.log('input 2: ' + input2);
        console.log('result: ' + input1 + input2);

        component.set("v.result", input1 + input2);
    },
    subtract: function (component, event, helper) {
        var input1 = parseInt(component.get("v.input1"));
        var input2 = parseInt(component.get("v.input2"));
        console.log('input 1: ' + input1);
        console.log('input 2: ' + input2);
        console.log('result: ' + input1 - input2);

        component.set("v.result", input1 - input2);
    },
    multiply: function (component, event, helper) {
        var input1 = parseInt(component.get("v.input1"));
        var input2 = parseInt(component.get("v.input2"));
        console.log('input 1: ' + input1);
        console.log('input 2: ' + input2);
        console.log('result: ' + input1 * input2);

        component.set("v.result", input1 * input2);
    },
    devide: function (component, event, helper) {
        var input1 = parseInt(component.get("v.input1"));
        var input2 = parseInt(component.get("v.input2"));
        console.log('input 1: ' + input1);
        console.log('input 2: ' + input2);
        console.log('result: ' + input1 / input2);

        component.set("v.result", input1 / input2);
    }
})