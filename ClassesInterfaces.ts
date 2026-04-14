/**
 * A interface `Veiculo` define um contrato rígido para as classes que a implementarem.
 * Isso garante que a camada de domínio tenha consistência no formato dos objetos (Design by Contract).
 */
interface Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  ligar(): void;
  desligar(): void;
}

/**
 * A classe `Carro` implementa o contrato `Veiculo`.
 * A adoção do modificador "public" direto no construtor (Sintaxe de Parameter Properties)
 * reduz boilerplate de atribuição de variáveis de classe.
 */
class Carro implements Veiculo {
  constructor(
    public marca: string,
    public modelo: string,
    public readonly ano: number // `readonly` evita que o ano de fabricação seja modificado indevidamente no futuro.
  ) {}

  /**
   * Inicializa o motor do veículo.
   */
  ligar(): void {
    console.log(`[Sistema]: O ${this.marca} ${this.modelo} está iniciando o motor...`);
  }

  /**
   * Encerra as operações do veículo.
   */
  desligar(): void {
    console.log(`[Sistema]: O ${this.marca} ${this.modelo} foi desligado em segurança.`);
  }
}

// ------------------------------------------------------------------
// Exemplo de Injeção / Utilização da Instância
// ------------------------------------------------------------------

// Tipando a variável estritamente como a interface, garantindo o "Liskov Substitution Principle"
const meuCarro: Veiculo = new Carro("Toyota", "Corolla", 2022);

console.dir(meuCarro);
meuCarro.ligar();
meuCarro.desligar();

export {};