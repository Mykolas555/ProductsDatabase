const loginUser = ( credentials, navigate ) => {
    fetch('https://demo-api.ideabridge.lt/api/auth/login',{
    method: 'POST',
    mode: 'cors',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)})
    .then(response => response.json())
    .then(authUser => {console.log(authUser);
    if (authUser.status === true) {
        const userToken = String(authUser.data.access_token);
        localStorage.setItem('UserToken', userToken);
        const userName = String(authUser.data.user.name);
        localStorage.setItem('UserName', userName);
        navigate('/ProductsDatabase/home')
        window.location.reload(); 
        return {userName}
    } else {
        alert('Wrong user email or password');
    }})
}

const registerUser = ( credentials, navigate ) => {
    fetch ('https://demo-api.ideabridge.lt/api/auth/register',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)})
    .then(response => response.json())
    .then(authUser => {console.log(authUser);
    if (authUser.status === true) {
        const userToken = String(authUser.data.access_token);
        localStorage.setItem('UserToken', userToken);
        navigate('/ProductsDatabase/home')
    } else {
        alert(authUser.errors.email);
    }})
}

const logout = ( navigate ) => {
    localStorage.removeItem('UserToken');
    navigate('/ProductsDatabase/login');
    window.location.reload();
    console.log('LocalStorage content after logout:', localStorage);
}

export { loginUser, registerUser, logout }