import { test, expect } from '@playwright/test';
import path from 'path';
import { Conteudo, conteudos } from '../../data/fake-data';
import { login } from '../../helpers/login';

test('Criar Empresa', async ({ page }) => {
  const content: Conteudo = conteudos[1];

  const file = path.resolve(__dirname, '../../data/images/testImage.jpg');

  await test.step('Criar empresa', async () => {
    await login(page);
    await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
    await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/Empresas/formulario');

    await page.locator('#text-title').fill(content.titulo);
    await page.locator('#textarea-category').fill(content.descricao);
    await page.locator('#text-text').fill(content.texto);
    await page.locator('#text-address').fill(content.quantidade);

    await page.locator('#text-url').fill('https://www.exemplo.com');
    await page.locator('#text-email').fill('empresa@exemplo.com');

    await page.locator('#text-phone').fill('1234567890');
    await page.locator('#text-social_media').fill('https://facebook.com/empresa');

    const inputImage = page.locator('#image');
    await inputImage.setInputFiles(file);

    await page.locator('#submit_button').click();

  });
});
