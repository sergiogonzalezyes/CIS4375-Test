<script>
//Took some components of login.vue from class that discussed using pinia
//Similar code with the addition of a form involved for editor or visitor roles. Used @submit for editor form that was taken from class on pinia

const apiURL = import.meta.env.VITE_ROOT_API

//needed for the store and loggedInUser to work properly
import { useVisitor, useEditor } from "@/store/loggedInUser";

//pulled from most recent class, the new portion is the setup() this is needed to pull the loggedInUser.js file to be used
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const visitor = useVisitor()
    const editor = useEditor()
    return {

      visitor,
      editor,
    }
  }
};
</script>

<template>
  <main class="login-background">
    <div class="login">
      <div class="login-header">
        <p><b>Login</b></p><br>
      </div>
      <div class="login-credentials">
        <form @submit.prevent="editor.login(username, password)" novalidate="true">
          <label>Username</label><br>
          <input type="text" v-model="username" placeholder="Enter Username" required>
          <br><br>
          <label>Password</label><br>
          <input type="password" v-model="password" placeholder="Enter Password" required>
          <br><br>
          <div class="button-container">
            <button class="login-button">Sign In</button>
            <router-link to="/"><button class="login-button" @click="visitor.login()">Visitor</button></router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>