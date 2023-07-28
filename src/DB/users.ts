import { User } from "src/interfaces/interfaces";
import { generateUniqueId } from "src/share/generateUniqueId";

export const createOneUser = (login: string, password: string) => {
  return {
    id: generateUniqueId(),
    login: login,
    password: password,
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

const createUsers = (): User[] => {
  const users: User[] = [];

  for (let i = 0; i < 10; i++) {

    users.push(createOneUser(`user${i + 1}`, 'password123'));
  }

  return users;
};

export const users: User[] = createUsers();