import test from "@playwright/test";
import { login } from "../../helpers/login";
import { titleData, Title } from "../../data/titleData";
import { selecionarIconeAleatorioModal } from "../../functions/Home/selecionarIcone";

test('Criar categoria destaque', async ({ page }) => {
    const titulo: Title = titleData[1]

    await test.step('Adicionar informações', async () => {
        await login(page);
        await page.waitForURL('https://guia-de-negocios.ueek.dev/content-adm/dashboard');
        await page.goto('https://guia-de-negocios.ueek.dev/content-adm/dashboard/categorias/formulario');
        await page.locator('#text-title').fill(titulo.Titulo);
        await selecionarIconeAleatorioModal(page);
        await page.locator('#submit_button').click();
    })
})