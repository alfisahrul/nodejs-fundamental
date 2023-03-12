const { EventEmitter } = require("events");
const { emit } = require("process");

const birtdayEventListener = (name) => {
  console.log(`Happy birthday ${name}`);
};

const myEmitter = new EventEmitter();

const onbirthday = ({ name }) => {
  birtdayEventListener(name);
};

myEmitter.on("birthday", onbirthday);

myEmitter.emit("birthday", { name: "Alfi" });
