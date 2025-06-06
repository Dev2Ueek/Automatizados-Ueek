import test from "@playwright/test";
import { login } from "../../helpers/login";
import path from "path";
import { titleData, Title } from "../../data/titleData";
import { selecionarIconeAleatorioModal } from "../../functions/Home/selecionarIcone";

test('Criar conteúdo', async ({ page }) => {
    const titulo: Title = titleData[1]
    const file = path.resolve(__dirname, "../../data/images/testImage.jpg");

    await test.step('Criar banner', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/banners/formulario');
        await page.locator('#text-title').fill(titulo.Titulo);
        await selecionarIconeAleatorioModal(page);
        const inputImage = await page.locator('#image');
        await inputImage.setInputFiles(file);

        const inputImageMobile = await page.locator('#background_image');
        await inputImageMobile.setInputFiles(file);
        await page.locator('#submit_button').click();
    })

})