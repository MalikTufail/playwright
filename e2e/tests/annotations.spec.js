import {test} from '@playwright/test'
// the annotations are skip, fail, fixme, only, slow, skip conditionally

test.skip('skip test', async ({page}) => {
    await page.goto('https://www.google.com')
})


test('fail test', async ({page}) => {
    // await page.goto('https://www.google.com')
    test.fail()
})

test.fixme('fixme test', async ({page}) => {
    // await page.goto('https://www.google.com')
    test.fixme()
})

test('slow test', async ({page}) => {
    // await page.goto('https://www.google.com')
    test.slow()
})

// test.only('only test', async ({page}) => {
//     // await page.goto('https://www.google.com')
//     test.slow()
// })
// the Tags are like smoke Regression Sanity etc...

test('Tag test @smoke', async ({page}) => {
    await page.goto('https://www.google.com')
})