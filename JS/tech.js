const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "./JS/datos.json",
      error: false,
      datos: [],
      seccionSeleccionada: "", 
    };
  },
  computed: {
    elementosFiltrados() {
      // Filtrar elementos según la sección seleccionada
      if (!this.seccionSeleccionada) {
        return this.datos;
      } else {
        return this.datos.filter(elemento => elemento.seccion === this.seccionSeleccionada);
      }
    },
    secciones() {
      // Obtener una lista de secciones 
      return [...new Set(this.datos.map(elemento => elemento.seccion))];
    },
  },
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data.resultados;
          console.log(this.datos)
        })
        .catch((error) => {
          this.error = true;
          console.error(error);
        });
    },
  },
  created() {
    this.fetchdata(this.url);
  },
}).mount("#app");