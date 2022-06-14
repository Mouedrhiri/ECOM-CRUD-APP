import styled from "styled-components"
const Container= styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Screenshot_2020_10_12_102641.png") center ;
    display: flex;
    align-items: center;
    justify-content: center;`
const Wrapper= styled.div`
    width: 40%;
    padding: 20px;
    background-color: transparent;


`
const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;`
const Form= styled.form`
    display: flex;
    flex-wrap:wrap;

    `
const Input= styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding: 10px;`
const Agreement= styled.span`
    font-size:12;
    margin: 20px 0px ;
`
const Button= styled.button`
    width:40%;
    border:none;
    padding:15px 20px ;
    background-color: teal;
    color: white;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    `
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="UserName"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Agreement>
                By creating an account, Iconsent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register