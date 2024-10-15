const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = Math.floor(Math.random * 8);
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

let text = [
  "Initializing Hacking...",
  "Reading your Files...",
  "Password files Detected...",
  "Sending all passwords and personal files to server...",
  "Cleaning up...",
];

for (const item of text) {
  addItem(item);
}
