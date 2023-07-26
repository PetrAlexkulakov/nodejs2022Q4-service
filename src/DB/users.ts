import { User } from "src/interfaces/interfaces";
import { generateUniqueId } from "src/share/generateUniqueId";

const createUsers = (): User[] => {
  const users: User[] = [];

  for (let i = 0; i < 10; i++) {
    const newUser: User = {
      id: generateUniqueId(),
      login: `user${i + 1}`,
      password: 'password123',
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    users.push(newUser);
  }

  return users;
};

export const users: User[] = createUsers();