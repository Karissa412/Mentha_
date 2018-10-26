import { Component } from '@angular/core';
import { Taylor } from './taylor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serietaylor';
  result1:number;
  result2:number;
  divison:number;
  factorials:number;
  radioe:boolean;
  radiolnuno:boolean;
  radioln:boolean;
  radioax: boolean;
  radioCos:boolean;
  radioSen:boolean;
  radioTan:boolean;
  radioSec:boolean;
  radioCsc:boolean;
  radioArcsin:boolean;
  radioArctan:boolean;
  radioWox:boolean;
  radioSinh:boolean;
  radioCosh:boolean;
  radioTanh:boolean;
  radioSinhinv:boolean;
  radioTanhinv: boolean;
  euler: number[] = [
      1,
      -1,
      5,
      -61,
      1385,
      -50521,
      2702765,
      -199360981,
      19391512145,
      -2404879675441,
      370371188237525
  ]
  bernoulli: number[] = [
    1,
    -1/2,
    1/6,
    0,
    -1/30, 
    0,
    1/42, 
    0,
    -1/30, 
    0,
    5/66, 
    0,
    -691/2730, 
    0,
    7/6, 
    0, 
    -3617/510,
    0,
    43867/798, 
    0,
    -174611/330, 
    0,
    854513/138,
    0,
    -236364091/2730, 
    0,
    8553103/6, 
    0,
    -23749461029/870, 
    0,
    8615841276005/14322, 
    0,
    -7709321041217/510, 
    0, 
    2577687858367/6,
    0, 
    -26315271553053477373/1919190, 
    0,
    2929993913841559/6,
    0, 
    -261082718496449122051/13530,
  ];
  taylor:Taylor = {
    n: null,
    x: null,
    division: null
  };

  constructor(){
      if(this.taylor.division===null){
          this.taylor.division = 0
      }

  }

  factorial(num){
    if(num < 0){
        return -1;
     }else if(num == 0){
        return 1;
     }else{
        return (num * this.factorial(num - 1));
    }
}

//===============================================FUNCION EXPONENCIAL===================================
//===============================================Y LOGARITMO NATURAL===================================
//CALCULAR EX
calcularex(dato = this.taylor.n){
    this.acortar()
    this.radioe = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(this.taylor.x, this.taylor.n) 
        this.result2 = this.factorial(this.taylor.n)
        this.divison = (this.result1/this.result2)
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}


//CALCULAR LN1+X
calcularlnunox(dato = this.taylor.n){
    this.acortar()
    this.radiolnuno = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(-1, this.taylor.n + 1) 
        this.divison = (this.result1/this.taylor.n)
        this.divison = this.divison*(Math.pow(this.taylor.x,this.taylor.n))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR LNX
calcularlnx(dato = this.taylor.n){
    this.acortar()
    this.radioln = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        this.taylor.division = this.taylor.division * 2
        return (this.taylor.n);
     }else{
        this.result1 = 1/((2 * this.taylor.n) + 1)
        this.result2 = (this.taylor.x - 1) / (this.taylor.x + 1)
        this.result2 = Math.pow(this.result2, ((2 * this.taylor.n) + 1))
        this.divison = this.result1 * this.result2
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//===============================================SERIE GEOMETRICA======================================
//CALCULAR AX
calcularax(dato = this.taylor.n){
    this.acortar()
    this.radioax = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.division);
     }else{
        this.divison = Math.pow(this.taylor.x, this.taylor.n)
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//===============================================FUNCIONES TRIGONOMETRICAS=============================
//CALCULAR SENX
calcular(dato = this.taylor.n){
    this.acortar()
    this.radioSen = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(-1, this.taylor.n) 
        this.result2 = (2 * this.taylor.n) + 1
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR COSX
calcularcosx(dato = this.taylor.n){
    this.acortar()
    this.radioCos = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(-1, this.taylor.n) 
        this.result2 = (2 * this.taylor.n)
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR TANX
calculartanx(dato = this.taylor.n){
    this.acortar()
    this.radioTan = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
         
        this.result1 = this.bernoulli[this.taylor.n * 2]
        this.result1 = this.result1 * (Math.pow(-4, this.taylor.n))
        this.result1 = this.result1 * (1 - Math.pow(4, this.taylor.n))
        this.result2 = 2 * this.taylor.n
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n) - 1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR SECX
calcularsecx(dato = this.taylor.n){
    this.acortar()
    this.radioSec = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(-1, this.taylor.n) 
        this.result1 = this.result1 * this.euler[2 * this.taylor.n]
        this.result2 = (2 * this.taylor.n)
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR CSCX
calcularcscx(dato = this.taylor.n){
    this.acortar()
    this.radioCsc = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
         
        this.result1 = (this.bernoulli[this.taylor.n])*Math.pow(this.taylor.x, 2 * this.taylor.n - 1)
        this.result1 = this.result1 * (2*(Math.pow(2, 2*this.taylor.n - 1)-1))
        this.result2 = 2 * this.taylor.n
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR ARCSINX
calculararcsinx(dato = this.taylor.n){
    this.acortar()
    this.radioArcsin = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = (2 * this.taylor.n) 
        this.result1 = this.factorial(this.result1)
        this.result2 = Math.pow(4, this.taylor.n) 
        this.result2 = this.result2 * (Math.pow(this.factorial(this.taylor.n), 2))
        this.result2 = this.result2 * (2*this.taylor.n + 1)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR ARCTANX
calculararctanx(dato = this.taylor.n){
    this.acortar()
    this.radioArctan = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(-1, this.taylor.n) 
        this.result2 = (2 * this.taylor.n) + 1
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}
//===============================================FUNCIONES HIPERBOLICAS================================
//CALCULAR SINHX
calcularsinhx(dato = this.taylor.n){
    this.acortar()
    this.radioSinh = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = 1
        this.result2 = (2 * this.taylor.n) + 1
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR COSHX
calcularcoshx(dato = this.taylor.n){
    this.acortar()
    this.radioCosh = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = 1
        this.result2 = (2 * this.taylor.n)
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x, 2*this.taylor.n))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR TANHX
calculartanhx(dato = this.taylor.n){
    this.acortar()
    this.radioTanh = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
         
        this.result1 = this.bernoulli[this.taylor.n * 2]
        this.result1 = this.result1 * (Math.pow(4, this.taylor.n))
        this.result1 = this.result1 * (Math.pow(4, this.taylor.n) - 1)
        this.result2 = 2 * this.taylor.n
        this.result2 = this.factorial(this.result2)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n) - 1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR SINHINVX
calcularsinhinvx(dato = this.taylor.n){
    this.acortar()
    this.radioSinhinv = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = (2 * this.taylor.n) 
        this.result1 = this.factorial(this.result1)
        this.result1 = this.result1 * (Math.pow(-1, this.taylor.n))
        this.result2 = Math.pow(4, this.taylor.n) 
        this.result2 = this.result2 * (Math.pow(this.factorial(this.taylor.n), 2))
        this.result2 = this.result2 * (2*this.taylor.n + 1)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//CALCULAR TANH-1X
calculartanhinvx(dato = this.taylor.n){
    this.acortar()
    this.radioTanhinv = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = 1
        this.result2 = (2 * this.taylor.n) + 1
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

//===============================================FUNCION W DE LAMBERT==================================
//CALCULAR WO(X)
calcularwox(dato = this.taylor.n){
    this.acortar()
    this.radioWox = true
    if(dato < 0){
      return (this.taylor.n- 1);
     }else if(dato == 0){
        return (this.taylor.n);
     }else{
        this.result1 = Math.pow(this.taylor.n * -1, this.taylor.n - 1) 
        this.result2 = this.factorial(this.taylor.n)
        this.divison = (this.result1/this.result2)
        this.divison = this.divison*(Math.pow(this.taylor.x,this.taylor.n))
        this.taylor.division = this.divison
        console.log(this.divison)
    }
}

limpiar(){
    this.radioe = null
    this.radiolnuno = null
    this.radioln = null
    this.radioSen = null
    this.radioCos = null
    this.radioTan = null
    this.radioSec = null
    this.radioCsc = null
    this.radioArcsin = null
    this.radioArctan = null
    this.radioWox = null
    this.radioSinh = null
    this.radioCosh = null
    this.radioTanh = null
    this.radioSinhinv = null
    this.radioTanhinv = null
    this.result1 = null
    this.result2 =null
    this.divison = null
    this.taylor.n = null
    this.taylor.x = null
    this.taylor.division = 0
}

acortar(){
    this.radioax = null
    this.radioe = null
    this.radiolnuno = null
    this.radioln = null
    this.radioSen = null
    this.radioCos = null
    this.radioTan = null
    this.radioSec = null
    this.radioCsc = null
    this.radioArcsin = null
    this.radioArctan = null
    this.radioWox = null
    this.radioSinh = null
    this.radioCosh = null
    this.radioTanh = null
    this.radioSinhinv = null
    this.radioTanhinv = null
}
}