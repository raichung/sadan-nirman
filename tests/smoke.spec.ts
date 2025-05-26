import { expect, test } from "@playwright/test";

test("smoke test", async ({ page }) => {
  await page.goto("/en");
  expect(true).toBe(true);
});
