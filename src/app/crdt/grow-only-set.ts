type IAddRes<T> = (item: T) => T[];
type IAdd = <T>(items: T[]) => IAddRes<T>;
const add: IAdd = items => item => [...items, ...[item]];

type IMergeRes<T> = (incomingSet: T[]) => T[];
type IMerge = <T>(set: T[]) => IMergeRes<any>;
const merge: IMerge = set => incomingSet => [
  ...set,
  ...incomingSet.filter(item => !set.includes(item)),
];

type IGrowOnlySet = <T>(items?: T[]) => [T[], IAddRes<T>, IMergeRes<T>];
export const growOnlySet: IGrowOnlySet = (items = []) =>
  [items, add(items), merge(items)];