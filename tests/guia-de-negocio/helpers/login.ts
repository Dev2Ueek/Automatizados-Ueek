import { Page } from '@playwright/test';

const BASE_URL = 'https://guia-de-negocios.ueek.dev';
const LOGIN_URL = `${BASE_URL}/content-adm`;
const EMAIL = 'suporte@ueek.digital';
const PASSWORD = 'Ueek*109238';
export async function login(page: Page) {
  await page.goto(LOGIN_URL);
  await page.locator('#text-email').fill(EMAIL);
  await page.locator('#password-password').fill(PASSWORD);
  await page.locator('#button_login').click();
}