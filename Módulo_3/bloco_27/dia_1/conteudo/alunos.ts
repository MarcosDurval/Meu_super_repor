
class Student {
  private _enrollment: string;
  private _name: string = String();
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
      this._enrollment = enrollment;
      this.xablau = name;
      this._examsGrades = [];
      this._worksGrades = [];
  }

  get enrollment(): string {
      return this._enrollment;
  }

  set enrollment(value: string) {
      this._enrollment = value;
  }

  get name(): string {
      return this._name;
  }

  set xablau(value: string) {
      if (value.length < 3) {
          throw new Error('O nome deve conter no mínimo 3 caracteres.');
      }

      this._name = value;
  }

  get examsGrades(): number[] {
      return this._examsGrades;
  }

  set examsGrades(value: number[]) {
      if (value.length > 4) {
          throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }

      this._examsGrades = value;
  }

  get worksGrades(): number[] {
      return this._worksGrades;
  }

  set worksGrades(value: number[]) {
      if (value.length > 2) {
          throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
      }

      this._worksGrades = value;
  }

}


// Para testar!

const personOne = new Student('202001011', 'Ma');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);