// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            message: "The Last of Us",
            image: "https://www.pcgamesn.com/wp-content/uploads/2019/10/the-last-of-us-900x506.jpg"
        }
    }
);