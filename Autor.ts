class Autor {
    private nome: string;
    private nacionalidade: string;
  
    constructor(nome: string, nacionalidade: string) {
      this.nome = nome;
      this.nacionalidade = nacionalidade;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getNacionalidade(): string {
      return this.nacionalidade;
    }
  
    setNacionalidade(nacionalidade: string): void {
      this.nacionalidade = nacionalidade;
    }
  }
  
  export { Autor };
  