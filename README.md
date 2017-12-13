1. make sure you have NodeJS
2. run `npm install & npm start` to start dev-server
3. run `npm run build` for production build



Example code ES6 code 

`app/components/approot.component.js`
```js
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
```
