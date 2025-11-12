
interface Container<T extends HTMLElement, U extends HTMLElement[]> {
  element: T;
  children: U;
}


function create(): Container<HTMLDivElement, HTMLDivElement[]>;
function create<T extends HTMLElement>(element: T): Container<T, T[]>;
function create<T extends HTMLElement, U extends HTMLElement>(element: T, children: U[]): Container<T, U[]>;


function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement = T>(
  element?: T,
  children?: U[]
): Container<T, U[]> {
  const el = (element ?? document.createElement('div')) as T;
  const ch = (children ?? []) as U[];
  return { element: el, children: ch };
}



const div = create();


const p = create(document.createElement('p'));


const section = create(
  document.createElement('section'),
  [document.createElement('p'), document.createElement('span')]
);

