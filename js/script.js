// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            message: "The Last of Us"
        }
    }
);