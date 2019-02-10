export interface HumanInfo {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly description: string;
}

export class Human {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly description: string
  ) {}
}
