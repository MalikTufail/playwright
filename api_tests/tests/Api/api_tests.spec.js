import {test, expect} from '@playwright/test'
const randomUser = 'Malik Tufail' + Math.floor(Math.random() * 1000)
const randomUser2 = 'Malik Tufail' + Math.floor(Math.random() * 1000)
console.log(randomUser)
test('Api get request', async ({request}) => {
    const res = await request.get('https://reqres.in/api/users/2')
    expect(res.status()).toBe(200)
    console.log(await res.json())
    const resText = await res.json();
    console.log()
    expect(await resText.data.first_name).toBe('Janet')
})
let id
test.only('Api Post request', async ({request}) => {
    const res = await request.post('https://reqres.in/api/users', {
        data: {
            "name": `${randomUser}`,
            "job": "QA Engineer"
        }
    })
    expect(res.status()).toBe(201)
    console.log(await res.json())
    const resText = await res.json();
    id = resText.id
    expect(await resText.name).toBe(`${randomUser}`)
    console.log(await resText.name)
})

test.only('Api put request', async ({request}) => {
    const res = await request.put(`https://reqres.in/api/users/${id}`, {
        data: {
            "name": `${randomUser2}`,
            "job": "QA Engineer"
        }
    })
    expect(res.status()).toBe(200)
    const resText = await res.json();
    expect(await resText.name).toBe(`${randomUser2}`)
    console.log(await resText.name)
})

// test.only('Api put request', async ({request}) => {
//         const res = await request.patch(`https://reqres.in/api/users/${id}`, {
//             data: {
//                 "name": `${randomUser2}`,
//                 "job": "QA Engineer"
//             }
//         })
//         expect(res.status()).toBe(200)
//         const resText = await res.json();
//         expect(await resText.name).toBe(`${randomUser2}`)
//         console.log(await resText.name)
//     })

test.only('Api delete request', async ({request}) => {
    const res = await request.delete(`https://reqres.in/api/users/${id}`)
    expect(res.status()).toBe(204)
    // const resText = await res.json();
    // expect(await resText.name).toBe(`${randomUser2}`)
    // console.log(await resText.name)
})