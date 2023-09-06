//Took loggedInUser.js from class that discussed using pinia for the login
//Similar code with few changes with them implementation of a visitor role that will be used as a button

import { defineStore } from 'pinia'

//Visitor Role
//defining a store
export const useVisitor = defineStore({
  id: 'visitor',
  state: () => {
    return {
      name: '',
      isVisitorLoggedIn: false,
    }
  },
  actions: {
    login() {
      this.$patch({
        isVisitorLoggedIn: true,
      });
    },
    logout() {
      this.$patch({
        name: '',
        isVisitorLoggedIn: false,
      });
    }
  }
});

//Editor Role
//defining a store
export const useEditor = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'editor',
  //central part of the store
  state: () => {
    return {
      name: "",
      isEditorLoggedIn: false,
    }
  },

  actions: {
    async login(username, password) {
      try {
        const response = await loginrole(username, password);
        this.$patch({
          isEditorLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isEditorLoggedIn: false
      });
    }
  }
});

export function loginrole(u, p) {
  if (u === "editor" && p === "editor") return Promise.resolve({ isAllowed: true, name: "Editor" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}