

export async function registerRandomUser(request: any, apiBaseUrl: string) {
    const randomEmail = 'testuser' + Math.floor(Math.random() * 10000) + Date.now() + '@email.com';
    const newUser = {
        name: 'cathTest',
        email: randomEmail,
        password: process.env.SAUCE_PASSWORD
    };
    const response = await request.post(apiBaseUrl + '/register', {
        data: newUser,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return { response, newUser };
}
