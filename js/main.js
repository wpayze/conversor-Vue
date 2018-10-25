function conversorAPI() {
  /* My Own API
  https://wilfredopaiz98.lib.id/dolarlempira@dev/ 

  in:
  https://code.stdlib.com/
  */

  return fetch('http://free.currencyconverterapi.com/api/v5/convert?q=USD_HNL&compact=y')
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
      conversorAPI().then(dolar_a_lempira => {
        this.lxd = dolar_a_lempira.USD_HNL.val;
        this.dxl = 1 / this.lxd;
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

