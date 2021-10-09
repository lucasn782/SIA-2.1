var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoAluno = {};
   $scope.alunoSelecionado = {};

   $scope.alunos = [
       {nome: "Lucas Neves", telefone: 21994561784, email: "ln@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.alunos.push($scope.novoAluno);
       $scope.novoAluno = {};
   };
   
   $scope.selecionaAluno = function (aluno) {
        $scope.alunoSelecionado = aluno;
   };

   $scope.alterarAluno = function () {
       
   };

   $scope.excluirAluno = function(){
        $scope.alunos.splice($scope.alunos.indexOf($scope.alunoSelecionado), 1);
   };
   
});