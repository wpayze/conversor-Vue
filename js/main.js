new Vue({
  el: "#app",
  data: {
    lxd : "24.0789",
    dxl: "0.0412",
    tasa: "24.0789",
    moneda1 : "Dolares",
    moneda2: "Lempiras",
    label: "$",
    valor: "",
    resultado: "0.00",
    aux: ""
  },
  methods: {
      calcular: function(){
        if (this.valor >= 0){
          this.resultado = Math.round((this.valor * this.tasa) * 200) / 200;
        }else{
            this.resultado = 0;
        }
    },

    change: function(){
    
      if (this.label === "$"){
        this.label = "L";
        this.switchMonedas();
        this.tasa = this.dxl;
      }else{
        this.label = "$";
        this.switchMonedas();
        this.tasa = this.lxd;
      }
      
      this.valor = "";
      this.resultado = "0.00";
    },
    switchMonedas(){
      this.aux = this.moneda1;
      this.moneda1 = this.moneda2;
      this.moneda2 = this.aux;
    }
  }
})