const { chromium, test, expect } = require("@playwright/test");
test.only("test", async ({ page }) => {
  let homes;
  let arrayofhomes = [];
  let room;
  test.setTimeout(500000);
  await page.goto("https://bostad.blocket.se/p2/sv/profile/mccdc3nm/");
  await page.getByRole("button", { name: "Jag samtycker" }).click();
  await page.waitForSelector(
    ".list-of-homes__HomeItemGrid-sc-1ix39jf-2.cOzWyV a h2",
    { timeout: 50000 }
  );
  const h2Elements = await page.$$(
    ".list-of-homes__HomeItemGrid-sc-1ix39jf-2.cOzWyV a h2"
  );
  console.log(h2Elements.length);
  for await (const element of h2Elements) {
    homes = await element.textContent();
    arrayofhomes.push(homes);
  }

  console.log(arrayofhomes);

  for await (const newhome of arrayofhomes) {
    await page.goto("https://samtrygg.se/", { timeout: 50000 });
    await page.fill('[id="hero-search"]', `${newhome} Stockholm`);
    await page.click("[class='top-panel-search__btn']");
    await page.waitForSelector(
      "#profilewrapper li .leftContent p:nth-child(1)",
      {
        timeout: 50000,
      }
    );
    const links = await page.$$(
      "#profilewrapper li .leftContent p:nth-child(1)"
    );
    for await (let link of links) {
      const string = await link.textContent();
      const result = string.substring(0, string.lastIndexOf(" "));
      console.log(result);
      if (result == newhome) {
        await link.click();
        // ]);
        // break;
        break;
      }
    }

    // const verfiy = await newtab.locator("#js-scroll-to-map");
    // await expect(verfiy).toContainText("" + newhome);
    // await newtab.close();
  }
});
