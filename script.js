const app1 = {
    data(){
        return{
            mensaje: '',
            frutas:[{nombre: 'Manzana', cantidad: 0, precioUnitario: 5, total:0}],
            nuevaFruta:"",
            nuevaCant:0,
            nuevaP:0.0,
            
            
        }
    },
    methods:{
        montoFruta(i){

            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },
        agregar(){
            if(this.nuevaFruta == '')
                this.nuevaCant = 0;
            if(this.nuevaFruta)
            this.frutas.push({nombre:this.nuevaFruta, cantidad:this.nuevaCant, precioUnitario: this.nuevaP});
            this.nuevaFruta = "";
            this.nuevaCant =0;
            this.nuevaP=0;
        }

    },
    computed:{
        cSubTotal(){
            let subtotal = 0;
            for(let i =0; i < this.frutas.length; i++){
                subtotal += this.frutas[i].total;

            }
            return subtotal;         
        },

        cIva(){
            return this.cSubTotal * 0.16;
        },

        cTotal(){
            return this.cSubTotal + this.cIva;
        }


    }
};
const apli2 = Vue.createApp(app1).mount('#seccion');