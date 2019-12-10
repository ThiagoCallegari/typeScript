import { Carro } from "./Carro";

var c1: Carro; // Apenas foi declarada uma referência, o objeto não foi criado.
c1 = new Carro(); // Agora o objeto foi criado/instanciado. Memória alocada.

//Prenchendo os dados
c1.setAno(2008);
c1.setModelo("Honda Fit");
c1.setPlaca("CBN-2106");
c1.setLigado(false);

//Chamando as funcionalidades
c1.andar();
c1.parar();
c1.desligar();
c1.ligar();
c1.andar();
c1.parar();
c1.ligar();
c1.desligar();

