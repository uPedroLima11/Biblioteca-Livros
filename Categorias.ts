class Categoria {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }
}
class Suspense extends Categoria {
  constructor() {
    super("Suspense");
  }
}

class Terror extends Categoria {
  constructor() {
    super("Terror");
  }
}
export { Categoria, Suspense, Terror };
