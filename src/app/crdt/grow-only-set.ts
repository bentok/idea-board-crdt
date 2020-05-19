type A<T> = (item: T) => T[];
type A2 = <T>(items: T[]) => A<T>;
const add: A2 = items => item => [...items, ...[item]];

type M<T> = (incomingSet: T[]) => T[];
type M2 = <T>(set: T[]) => M<any>;
const merge: M2 = set => incomingSet => [
  ...set,
  ...incomingSet.filter(item => !set.includes(item)),
];

type GrowOnlySet = <T>(items?: T[]) => [A<T>, M<T>];
export const growOnlySet: GrowOnlySet = (items = []) =>
  [add(items), merge(items)];