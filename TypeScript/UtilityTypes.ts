//Utility Types
//There are multiple utility types such as partial to make all properties of a type optional,readonly,pick ,omit ,exclude,etc
type Role = "admin" | "editor" | "viewer";

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role: Role;
}

//Partial<Type>

function updateUser(id: number, updates: Partial<User>): void {
  console.log(`Updating user ${id} with`, updates);
}
updateUser(1, { isActive: false }); 

type CompleteUser = Required<User>;
const fullUser: CompleteUser = {
  id: 1,
  name: "A",
  email: "a@mail.com",
  isActive: true,
  role: "admin",
};

//Readonly<Type>
const frozenUser: Readonly<User> = {
  id: 2,
  name: "B",
  email: "b@mail.com",
  isActive: true,
  role: "viewer",
};

type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 3, name: "C" };

type UserWithoutEmail = Omit<User, "email">;
const userData: UserWithoutEmail = { id: 4, name: "D", isActive: true, role: "editor" };
const userDirectory: Record<number, User> = {
  1: fullUser,
  2: frozenUser,
};

type NonViewerRoles = Exclude<Role, "viewer">; // "admin" | "editor"
type OnlyViewers = Extract<Role, "viewer">;     // "viewer"
type SafeEmail = NonNullable<string | null | undefined>;
const mail: SafeEmail = "contact@mail.com";

function createUser(name: string, role: Role): User {
  return { id: Date.now(), name, email: `${name}@mail.com`, isActive: true, role };
}

type CreateUserArgs = Parameters<typeof createUser>; // [string, Role]
type NewUser = ReturnType<typeof createUser>;        // User


class Admin {
  constructor(public name: string, public level: number) {}
  promote() {
    return `${this.name} promoted to level ${this.level + 1}`;
  }
}

type AdminArgs = ConstructorParameters<typeof Admin>; 
type AdminInstance = InstanceType<typeof Admin>;      

const newAdminArgs: AdminArgs = ["E", 5];
const eve = new Admin(...newAdminArgs);
console.log(eve.promote());


function logStatus(this: User) {
  console.log(`${this.name} is ${this.isActive ? "active" : "inactive"}`);
}

type ThisTypeCheck = ThisParameterType<typeof logStatus>; 
type WithoutThis = OmitThisParameter<typeof logStatus>;   
type Upper = Uppercase<Role>;    
type Lower = Lowercase<Upper>;    
type Capital = Capitalize<Role>;  
type Uncap = Uncapitalize<Capital>; 

function chooseRole<T>(role: NoInfer<T>, allowed: T[]): T|undefined{
  return allowed.includes(role) ? role:allowed[0];
}
const chosen = chooseRole("editor", ["admin", "editor", "viewer"]); 