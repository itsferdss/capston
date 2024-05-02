// app.js
new Vue({
    el: '#login ',
    data: {
        username: '',
        password: '',
        errorMessage: ''
    },
    methods: {
        login() {
            // Simulated login logic
            if (this.username === 'ferdinand' && this.password === '123') {
                // Redirect to home.html on successful login
                window.location.href = 'home.html';
            } else {
                this.errorMessage = 'Invalid username or password';
            }
        }
    }
});

new Vue({
    el: '#register',
    data: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
    },
    methods: {
        register() {
            // Validate passwords match
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords do not match';
                return;
            }
            // Simulated registration logic
            // Replace with actual registration logic
            console.log('Registration successful!');
            // Redirect to login page after registration
            window.location.href = 'login.html';
        }
    }
});