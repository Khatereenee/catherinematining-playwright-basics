
import { test, expect } from '@playwright/test';
import { registerRandomUser } from '../../shared/apiUtils';


test.describe.configure({ mode: "serial" });
test.describe('User API Tests', () => {
    const apiBaseUrl = 'http://localhost:3000/api/users';


    // POST Method for User Registration
    test('✔️ POST - Should register a new user', async ({ request }) => {
        const { response, newUser } = await registerRandomUser(request, apiBaseUrl);
        console.info("Status Code:", response.status());
        console.info("Response Body:", await response.json());
        console.info("New User Email:", newUser.name);
        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();
        expect(response.body()).toBeDefined();
        expect(response.body).not.toHaveProperty('error');
    });

    
    // GET Method User by ID
    test('✔️ GET - Should fetch user by ID', async ({ request }) => {
        const userId = 1;
        const response = await request.get(apiBaseUrl + '/' + userId,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.USER_DEMO_TOKEN}`,
                }
            }
        );
        console.info("Status Code:", response.status());
        console.info("Response Body:", await response.json());
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.body()).toBeDefined();
    });
});
