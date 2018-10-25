function conversorAPI() {
  return fetch('https://wilfredopaiz98.lib.id/dolarlempira@dev/')
    .then(response => response.json());
};

var conversor = new Vue({
  el: "#app",
  data: {
    lxd: null,
    dxl: null,
    tasa: null,
    moneda1: "Dolares",
    moneda2: "Lempiras",
    label: "$",
    valor: "",
    resultado: "0.00",
    aux: ""
  },
  methods: {
    actualizarDatos: function () {
      conversorAPI().then(monedas => {
        this.lxd = monedas.dolar;
        this.dxl = monedas.lempira;
        this.tasa = this.lxd;
      });
    },
    calcular: function () {
      if (this.valor >= 0) {
        this.resultado = Math.round((this.valor * this.tasa) * 200) / 200;
      } else {
        this.resultado = 0;
      }
    },
    change: function () {
      if (this.label === "$") {
        this.label = "L";
        this.switchMonedas();
        this.tasa = this.dxl;
      } else {
        this.label = "$";
        this.switchMonedas();
        this.tasa = this.lxd;
      }

      this.valor = "";
      this.resultado = "0.00";
    },
    switchMonedas: function () {
      this.aux = this.moneda1;
      this.moneda1 = this.moneda2;
      this.moneda2 = this.aux;
    }
  },
  mounted(){
    this.actualizarDatos();
  }
});

