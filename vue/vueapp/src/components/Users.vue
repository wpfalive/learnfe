<template>
  <div id="users">
    <h1>Users</h1>
    <form v-on:submit.stop="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter name">
      <br>
      <input type="text" v-model="newUser.email" placeholder="Enter email">
      <br>
      <input type="submit" value="add">
    </form>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}}
        </span>
        <button v-on:click="deleteUser(user)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
      newUser: {},
      users: []
    }
  },
  methods: {
    addUser: function(name, email) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false,
      })
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data
      })
  },
}
</script>
  
<style>
.contacted {
    text-decoration: line-through;
  }
</style>
