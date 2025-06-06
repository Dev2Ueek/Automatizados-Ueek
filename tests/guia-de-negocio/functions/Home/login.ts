import { test, expect, Page } from '@playwright/test';
import path from 'path';
import { Title, titleData } from '../../data/titleData';

const BASE_URL = 'https://guia-de-negocios.ueek.dev/';
const LOGIN_URL = `${BASE_URL}content-adm/dashboard/banners/formulario`;

export const banner: Title = titleData[1];
const filePath = path.resolve(__dirname, '../../data/testImage.jpg');

export async function CriarConta(page: Page) {
  await page.goto(LOGIN_URL);

  await page.locator('[data-testid="botao-criar-conta"]').click();

  await page.locator('#text-title').fill(banner.Titulo);

  const inputFile = page.locator('input[type="file"]');
  const inputFile1 = page.locator('input[type="file23"]');
  await inputFile.setInputFiles(filePath);
  await inputFile1.setInputFiles(filePath);
  await page.locator('[data-testid="botao-confirmar"]').click();

  await page.pause();
}
