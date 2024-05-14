// Enums/Desconto.ts
export enum Desconto {
    NONE,
    PARTIAL,
    FULL
}

// Curso/Curso.ts
export class Curso {
    // Assuming the Curso class has some properties
    // Add properties and methods for Curso class as per your Java code
    // For example:
    // name: string;
    // duration: number;

    constructor(public name: string, public duration: number) {}
}

// Aluno/Aluno.ts
import { Curso } from '../Curso/Curso';
import { Desconto } from '../Enums/Desconto';

export class Aluno {
    private name: string;
    private RA: string;
    private active: boolean;
    private desconto: Desconto;
    private curso: Curso;
    private cursos: Curso[];

    constructor(
        name: string,
        RA: string,
        active: boolean,
        desconto: Desconto,
        curso: Curso,
        cursos: Curso[]
    ) {
        this.name = name;
        this.RA = RA;
        this.active = active;
        this.desconto = desconto;
        this.curso = curso;
        this.cursos = cursos;
    }

    public getCurso(): Curso {
        return this.curso;
    }

    public setCurso(curso: Curso): void {
        this.curso = curso;
    }

    public getDesconto(): Desconto {
        return this.desconto;
    }

    public setDesconto(desconto: Desconto): void {
        this.desconto = desconto;
    }

    public getCursos(): Curso[] {
        return this.cursos;
    }

    public setCursos(cursos: Curso[]): void {
        this.cursos = cursos;
    }

    public getActive(): boolean {
        return this.active;
    }

    public setActive(active: boolean): void {
        this.active = active;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getRA(): string {
        return this.RA;
    }

    public setRA(RA: string): void {
        this.RA = RA;
    }
}

