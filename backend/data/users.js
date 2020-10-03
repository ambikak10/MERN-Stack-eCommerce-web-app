import brcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: brcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: brcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: brcrypt.hashSync("123456", 10),
  },
];

export default users