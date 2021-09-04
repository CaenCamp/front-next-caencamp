async page => {
    await page.goto();
    await page.waitForTimeout(2000);
    await page.scrollToElement('footer');
    await page.waitForTimeout(3000);
    await page.scrollToElement('nav');
    await page.waitForTimeout(2000);
    await page.waitForNetworkIdle();
};
