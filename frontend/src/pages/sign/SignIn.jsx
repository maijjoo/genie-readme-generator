// src/components/SignInPage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignInPage = () => {
  return (
    // jsx
    <SignContainer>
      <SignInSection>
        <LogoBox>
          <svg
            height="48"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="48"
            data-view-component="true"
            class="octicon octicon-mark-github"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </LogoBox>

        <h1>Sign in to Genie</h1>

        <Form>
          <Input type="text" placeholder="Username or email address" />
          <Input type="password" placeholder="Password" />
          <SignInBox>
            <GoogleButton type="submit">
              <IconSpan>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </IconSpan>

              <p>Sign in with Google</p>
            </GoogleButton>
            <Button className="" type="submit">
              Sign in
            </Button>
          </SignInBox>
        </Form>

        <SignUpBox>
          <p>
            New to Genie? <NavLink to="/signup">Create an account.</NavLink>
          </p>
        </SignUpBox>
      </SignInSection>
    </SignContainer>
  );
};

const SignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SignInSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 80%;
  max-width: 330px;
  max-height: 530px;
  padding: 50px;
  background-color: #f6f8fa;
  /* border: 1px solid #d8dee2; */
  border-radius: 6px;
  /* box-shadow: 5px 5px 5px #c3c4c4; */
  box-shadow: inset 0px 0px 5px black;
  /* box-shadow: 5px 5px 3px white; */

  h1 {
    font-size: 28px;
    margin: 1.5% 1.5% 16px 1.5%;
    /* margin-bottom: 16px; */
  }
`;

const LogoBox = styled.div`
  /* background-color: #d8dee2; */
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fff;
  border: 1px solid #d8dee2;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  min-height: 150px; */
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #d8dee2;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  /* min-width: 250px;
  min-height: 150px; */
  width: 100%;
  margin-bottom: 16px;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #d8dee2;
  border-radius: 4px;
`;

const SignInBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #fff;
  border: 1px solid #d8dee2;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 5px;
`;

const GoogleButton = styled.button`
  padding: 12px;
  color: #6a6a6a;
  background-color: #e6e6e6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dadada;
    color: white;
  }
`;

const Button = styled.button`
  padding: 12px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-right: 5px;
`;

export default SignInPage;
