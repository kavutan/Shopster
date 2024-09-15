

export function getToken() {
    const storedData = JSON.parse(sessionStorage.getItem('tokenKey'));
    //alert(`Token from auth = ${storedData.access_token}`);
    return storedData ? storedData.access_token : null;
}

export function getEmail() {
    const storedData = JSON.parse(sessionStorage.getItem('tokenKey'));
    return storedData ? storedData.email : null;
}

export function getId() {
    const storedData = JSON.parse(sessionStorage.getItem('tokenKey'));
    return storedData ? storedData.id : null;
}
