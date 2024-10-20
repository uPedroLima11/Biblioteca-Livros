import { Autor } from './Autor';
import { Categoria } from './Categorias';

class Livro {
  private titulo: string;
  private anoPublicacao: number;
  private autor: Autor | null;
  private emprestado: boolean;
  private categoria: Categoria | null;

  constructor(titulo: string, anoPublicacao: number,categoria: Categoria) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
    this.autor = null;
    this.emprestado = false;
    this.categoria = categoria;
  }
getcategoria(): Categoria | null {
  return this.categoria;
}
setcategoria(categoria: Categoria): void {
  this.categoria = categoria;
}
  getTitulo(): string {
    return this.titulo;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  getAnoPublicacao(): number {
    return this.anoPublicacao;
  }

  getAutor(): Autor | null {
    return this.autor;
  }
  getCategoria(): Categoria | null {
    return this.categoria;
  }

  setCategoria(categoria: Categoria): void {
    this.categoria = categoria;
  }
  setAutor(autor: Autor): void {
    this.autor = autor;
  }

  isEmprestado(): boolean {
    return this.emprestado;
  }

  emprestarLivro(): void {
    this.emprestado = true;
  }

  devolverLivro(): void {
    this.emprestado = false;
  }
}
export { Livro };
