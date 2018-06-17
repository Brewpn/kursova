const credentials = {
    username: '',
    password: ''
};

export default () => {
    const buffer = new Buffer(`${credentials.username}:${credentials.password}`);
    const encodedAuthCredentials = buffer.toString('base64');
    const Authorization = `Basic ${encodedAuthCredentials}`;
    return {
        headers: {
            Authorization
        }
    }
}
