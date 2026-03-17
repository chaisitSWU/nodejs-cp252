const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
            //this.n = this.n + 1;
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    // Method to clear all users
    removeOneUser() {
        if ( this.users.length > 0 ) {
            const removedUser = this.users.pop();
            this.n = this.n - 1;
            return removedUser;
        }else{
            return null
        }       
    }


    // Method to clear all users
    getUserCount() {
        return this.n;
    }

    // Method to remove two users (using removeOneUser twice)
    removeTwoUser() {
        let removedCount = 0;
        for (let i = 0; i < 2; i++) {
            const removedUser = this.removeOneUser();
            if (removedUser !== null) {
                removedCount++;
            } else {
                break;
            }
        }
        return removedCount;
    }

    // Method to clear all users
    clearUsers() {
        this.users = [];
        this.n = 0;
    }

    

}

module.exports = UserData;