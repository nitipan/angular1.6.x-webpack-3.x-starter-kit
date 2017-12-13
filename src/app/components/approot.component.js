export default {
    template: require('./approot.component.html'),
    controller: class {
        constructor() {

        }
        $onInit() {
            let name = "world";
            this.text = `Hello - ${name}`;
        }
    }
};