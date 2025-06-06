import { Page } from '@playwright/test';

export async function selecionarIconeAleatorioModal(page: Page) {
  // Abre o seletor de ícones
  await page.locator('#button_icon').click();

  // Aguarda o modal aparecer com os ícones
  const icones = page.locator('._iconSelectorGrid_1vwn5_44 button[data-icon]'); // ajuste se o seletor for diferente
  await icones.first().waitFor({ state: 'visible' });

  const total = await icones.count();
  if (total === 0) {
    throw new Error('Nenhum ícone encontrado no modal.');
  }

  // Escolhe um índice aleatório e clica
  const index = Math.floor(Math.random() * total);
  await icones.nth(index).click();
}
