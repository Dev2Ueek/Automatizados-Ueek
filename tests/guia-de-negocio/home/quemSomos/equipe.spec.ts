import test from "@playwright/test";
import { login } from "../../helpers/login";
import path from "path";
import { Conteudo, conteudos } from "../../data/fake-data";

test('Criar conteúdo', async ({ page }) => {
    const content: Conteudo = conteudos[1]

    const file = path.resolve(__dirname, "../../data/images/testImage.jpg");

    await test.step('Criar banner', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/Equipe/formulario');
        await page.locator('#text-title').fill(content.nomeequipe);
        await page.locator('#text-description').fill(content.descricao);
         const inputImage = await page.locator('#image');
        await inputImage.setInputFiles(file);

        await page.locator('#submit_button').click();
    })

})