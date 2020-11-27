import { assertArrayContains } from "https://deno.land/std@0.70.0/testing/asserts.ts"
import { stub, Stub } from "https://deno.land/x/mock@v0.9.2/stub.ts"
import identifyHouse from "./sorting_hat.service.ts"

const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]

const consoleStub: Stub<Console> = stub(console, "debug", () => {});
const fetchStub: Stub<typeof globalThis> = stub(globalThis, 'fetch', () => ({
    json: () => HOUSES[Math.floor(Math.random() * HOUSES.length)]
}))

Deno.test("that sorting hat service returns a valid house", async () => {
    const house: string = await identifyHouse("teste")
    assertArrayContains<string>(HOUSES, [house])

    consoleStub.restore()
    fetchStub.restore()
})