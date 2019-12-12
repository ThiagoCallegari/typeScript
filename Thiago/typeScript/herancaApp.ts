import {Pessoa} from "./herancaPessoa";
import {Aluno} from "./herancaAluno";
import {Professor} from "./herancaProfessor";

var p:Pessoa;

p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");
console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

let prof: Professor;
prof = new Professor();
prof.setNumRegistro(5022);
prof.setNome("Ellis Calegari");
prof.setEmail("ellis.cal@gmail.com");
prof.setTelefone("(11)3778-8832");
prof.setValorHora(75.50);
prof.setNumHoras(8);
prof.setAreaDeFormacao("Educacao Infantil");

console.log(prof);