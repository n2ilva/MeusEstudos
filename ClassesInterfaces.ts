//Interface para criar a base de um obejo que pode ser reutilizado em outros objetos
interface Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  ligar(): void;
  desligar(): void;
}

//Classe que implementa a interface Veiculo
class Carro implements Veiculo {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}
//Métodos que implementam a interface Veiculo, a classe carro é obrigada a ter esses métodos
  ligar(): void {
    console.log(`O ${this.modelo} está ligando...`);
  }

  desligar(): void {
    console.log(`O ${this.modelo} está desligando...`);
  }
}

//Instanciando a classe Carro
const meuCarro: Veiculo = new Carro("Toyota", "Corolla", 2022);
console.log(meuCarro);
meuCarro.ligar();
meuCarro.desligar();

export {};