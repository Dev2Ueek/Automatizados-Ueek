import test from "@playwright/test";
import path from "path";
import { login } from "../../helpers/login";
import { Conteudo, conteudos } from "../../data/fake-data";

test ('Criar categoria destaque', async ({page}) =>{
    const content: Conteudo = conteudos[1]
    const file = path.resolve(__dirname,"../../data/images/testImage.jpg");

    await test.step('Adicionar informações', async () =>{
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/categorias-em-destaque/formulario');
        await page.locator('#text-title').fill(content.titulo);
        const inputImage = await page.locator('#image');
        await inputImage.setInputFiles(file);

        const inputImageMobile = await page.locator('#image_mobile');
        await inputImageMobile.setInputFiles(file);

        await page.locator('#submit_button').click();
    })
})