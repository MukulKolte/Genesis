import React from 'react'

function Login() {
    return (
        <div>
            <h1>This is login page.</h1>

            <h2>Get yourselves logged in!!</h2>

            <form>
                <label for="stid">Student Id:</label><br />
                <input type="number" id="stid" name="stid" /><br />
                <label for="name">Name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label for="pass">Password:</label><br />
                <input type="password" id="pass" name="pass" /><br />
                <label for="role">Role:</label><br />
                <select name="role" id="role">
                    <option value="admin">Admin</option>
                    <option value="organizer">Organizer</option>
                    <option value="participant">Participant</option>
                    <option value="teacher">Teacher</option>
                </select><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login
