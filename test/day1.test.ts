import { describe, test, expect } from "vitest";
import { day1 } from "../src/days/day1/main.js";

describe("day1", () => {
    describe("part1", () => {
        test("should return 11 when given example list", () => {
            let list = [[3, 4], [4, 3], [2, 5], [1, 3], [3, 9], [3, 3]];
            expect(day1(list)).toEqual(11);
        })
    })
})