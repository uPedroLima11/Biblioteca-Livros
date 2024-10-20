import { Autor } from './Autor';
import { Livro } from './Livro';
import { Usuario } from './Usuario';
import { Biblioteca } from './Biblioteca';
import { Suspense, Terror } from './Categorias';
const biblioteca = new Biblioteca();

const autor1 = new Autor('Agatha Christie', 'Inglesa');
const autor2 = new Autor('J.K. Rowling', 'Britânica');
const autor3 = new Autor('C. J. Tudor', 'Britânica');
const autor4 = new Autor('Stephen King', 'norte-americano');


const livro1 = new Livro('O Assassinato no Expresso Oriente', 1934, new Suspense());
const livro2 = new Livro('It', 1986, new Terror());
const livro3 = new Livro('O Homem de Giz', 2018, new Suspense());
const livro4 = new Livro('O Iluminado', 1991, new Terror());


livro1.setAutor(autor1);
livro2.setAutor(autor2);
livro3.setAutor(autor3);
livro4.setAutor(autor4);

const usuario1 = new Usuario('Pedro Lima', 123);
const usuario2 = new Usuario('Pedro Siqueira', 456);

biblioteca.adicionarAutor(autor1);
biblioteca.adicionarAutor(autor2);
biblioteca.adicionarAutor(autor3);
biblioteca.adicionarAutor(autor4);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);
biblioteca.adicionarUsuario(usuario1);
biblioteca.adicionarUsuario(usuario2);

biblioteca.emprestarLivro(livro1, usuario1);
biblioteca.emprestarLivro(livro2, usuario2);

biblioteca.devolverLivro(livro1, usuario1);
biblioteca.devolverLivro(livro2, usuario2);

const livrosDoAutorUsuario = biblioteca.filtrarLivrosPorAutorUsuario();
if (livrosDoAutorUsuario !== null && livrosDoAutorUsuario !== undefined) {
  console.log(`Livros do autor pesquisado:`);
  livrosDoAutorUsuario.forEach(livro => {
    console.log(`- ${livro.getTitulo()} (${livro.getCategoria()?.getNome() || 'Sem categoria'})`);
  });
} else {
  console.log('Nenhum livro encontrado para o autor pesquisado.');
}
