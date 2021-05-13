import React, { useCallback, useContext } from "react";
import app from "../../FireBase"; 

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(
                        email.value,
                        password.value
                    );


                history.push("/login");

            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    return (
        <div>

            <h1>Sign up NOW</h1>

            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </label>
                <button type="Submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;