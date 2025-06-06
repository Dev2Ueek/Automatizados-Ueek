import test from "@playwright/test";
import { login } from "../../helpers/login";
import { Conteudo, conteudos } from "../../data/fake-data";
import { selecionarIconeAleatorioModal } from "../../functions/Home/selecionarIcone";

test('Criar categoria destaque', async ({ page }) => {
    const content: Conteudo = conteudos[1]

    await test.step('Adicionar informações', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/categorias/formulario');
        await page.locator('#text-title').fill(content.titulo);
        await selecionarIconeAleatorioModal(page);
        await page.locator('#submit_button').click();
    })
})