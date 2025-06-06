import test from "@playwright/test";
import { login } from "../../helpers/login";
import { Conteudo, conteudos } from "../../data/fake-data";

test('Criar conteúdo', async ({ page }) => {
    const content: Conteudo = conteudos[1]

    await test.step('Criar banner', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/pagina-por-que-anunciar');
        await page.locator('#text-title').fill(content.titulo);
        await page.locator('#text-text').fill(content.descricao);
        await page.locator('#text-btn_text').fill(content.textoBotao);
        await page.locator('#text-btn_link').fill(content.textoBotao);
        await page.locator('#text-seoTitle').fill(content.titulo);
        await page.locator('#textarea-seoDescription').fill(content.descricao);

        await page.locator('#submit_button').click();
    })

})