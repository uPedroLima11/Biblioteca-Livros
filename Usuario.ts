class Usuario {
    private nome: string;
    private numeroIdentificacao: number;
  
    constructor(nome: string, numeroIdentificacao: number) {
      this.nome = nome;
      this.numeroIdentificacao = numeroIdentificacao;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getNumeroIdentificacao(): number {
      return this.numeroIdentificacao;
    }
  }
  
  export { Usuario };
  