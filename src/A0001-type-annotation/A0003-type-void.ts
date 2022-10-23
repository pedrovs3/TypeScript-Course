function semRetorno(...args: Array<string>): void {
  console.log(args.join(' '));
}

semRetorno('pedro', 'skda', 'djsajkd');

const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Vieira',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

// Void = sem retorno;

export default pessoa;
