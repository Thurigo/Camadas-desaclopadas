// Fiscal/Fiscal.ts

import { v4 as uuidv4, UUID } from 'uuid';

export class Fiscal {
    private name: string;
    private salary: number;
    private uuid: UUID;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.uuid = uuidv4();
    }

    public receberSalario(): void {
        console.log(this.salary);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getUuid(): UUID {
        return this.uuid;
    }

    public setUuid(uuid: UUID): void {
        this.uuid = uuid;
    }
}

