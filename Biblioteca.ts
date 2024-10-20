import { Livro } from "./Livro";
import { Autor } from "./Autor";
import { Usuario } from "./Usuario";
import * as readlineSync from "readline-sync";

class Biblioteca {
  filtrarLivrosPorAutorUsuarioECategoria() {
    throw new Error("nenhum metodo implementado.");
  }
  private livros: Livro[];
  private autores: Autor[];
  private usuarios: Usuario[];

  constructor() {
    this.livros = [];
    this.autores = [];
    this.usuarios = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  adicionarAutor(autor: Autor): void {
    this.autores.push(autor);
  }

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  emprestarLivro(livro: Livro, usuario: Usuario): void {
    if (!livro.isEmprestado()) {
      livro.emprestarLivro();
      console.log(
        `${usuario.getNome()} emprestou o livro "${livro.getTitulo()}".`
      );
    } else {
      console.log(`O livro "${livro.getTitulo()}" já está emprestado.`);
    }
  }

  devolverLivro(livro: Livro, usuario: Usuario): void {
    if (livro.isEmprestado()) {
      livro.devolverLivro();
      console.log(
        `${usuario.getNome()} devolveu o livro "${livro.getTitulo()}".`
      );
    } else {
      console.log(`O livro "${livro.getTitulo()}" não está emprestado.`);
    }
  }
  filtrarLivrosPorAutorUsuario(): Livro[] | null {
    const nomeAutor = readlineSync.question(
      "Digite o nome do autor que deseja pesquisar:"
    );

    if (!nomeAutor) {
      console.log("Nome do autor não fornecido.");
      return null;
    }

    const autorEncontrado = this.autores.find(
      (autor) => autor.getNome() === nomeAutor
    );

    if (!autorEncontrado) {
      console.log(`Autor ${nomeAutor} não encontrado na biblioteca.`);
      return null;
    }

    const livrosDoAutor = this.livros.filter(
      (livro) => livro.getAutor() === autorEncontrado
    );

    if (livrosDoAutor.length === 0) {
      console.log(`Não há livros associados ao autor ${nomeAutor}.`);
      return null;
    }

    return livrosDoAutor;
  }
}

export { Biblioteca };
