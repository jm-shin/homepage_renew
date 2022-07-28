interface Recruit {
  readonly id: string,
  readonly title: string,
  readonly startDate: string,
  readonly endDate: string,
  readonly limit: boolean,
  readonly task: string[],
  readonly ability: string[],
  readonly announce: string[],
  readonly keyword: string[],
  readonly default: string[],
}

export {Recruit};