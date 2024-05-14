// Aluno/Aluno.ts
// Assuming Aluno class is similar to the previous example, so just an interface here for the sake of completeness
export interface Aluno {
    name: string;
    RA: string;
    active: boolean;
    // Other properties and methods as needed
}

// Curso/Curso.ts
import { Aluno } from '../Aluno/Aluno';

export class Curso {
    private name: string;
    private periodos: number;
    private alunos: Aluno[];
    private valor: number;

    constructor(builder: CursoBuilder) {
        this.name = builder.name;
        this.periodos = builder.periodos;
        this.alunos = builder.alunos;
        this.valor = builder.valor;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPeriodos(): number {
        return this.periodos;
    }

    public setPeriodos(periodos: number): void {
        this.periodos = periodos;
    }

    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    public setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }
}

export class CursoBuilder {
    public name: string;
    public periodos: number;
    public valor: number;
    public alunos: Aluno[];

    constructor(name: string, periodos: number, valor: number) {
        this.name = name;
        this.periodos = periodos;
        this.valor = valor;
        this.alunos = [];
    }

    public setAlunoList(alunos: Aluno[]): CursoBuilder {
        this.alunos = alunos;
        return this;
    }

    public build(): Curso {
        return new Curso(this);
    }
}

