import test from "@playwright/test";
import { login } from "../../helpers/login";
import path from "path";
import { Conteudo, conteudos } from "../../data/fake-data";
import { selecionarIconeAleatorioModal } from "../../functions/Home/selecionarIcone";

test('Criar conteúdo', async ({ page }) => {
    const content: Conteudo = conteudos[1]

    const file = path.resolve(__dirname, "../../data/images/testImage.jpg");

    await test.step('Criar banner', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/pagina-quem-somos');
        await page.locator('#text-about_title').fill(content.titulo);
        await page.locator('#textarea-about_text').fill(content.descricao);
         const inputImage = await page.locator('#image');
        await inputImage.setInputFiles(file);
        const inputImageMobile = await page.locator('#image_mobile');
        await inputImageMobile.setInputFiles(file);
        await page.locator('#text-about_title').fill(content.texto);
        await selecionarIconeAleatorioModal(page);
        await page.locator('#text-data_quantity').fill(content.quantidade);
        await page.locator('#text-data_description').fill(content.descricao);
        await page.locator('#text-seoTitle').fill(content.titulo);
        await page.locator('#textarea-seoDescription').fill(content.descricao);

        await page.locator('#submit_button').click();
    })

})