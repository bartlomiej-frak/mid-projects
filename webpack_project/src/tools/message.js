export const message = (info) => console.log(info);
export const messageDOM = (info) => {
    const container = document.querySelector("div");
    container.textContent = info;
};
