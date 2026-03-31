import { expect, test } from "@playwright/test";
import { BaseAPI } from "../../api/base.api";

test("App is reachable", async ({ request }) => {
	const api = new BaseAPI(request);
	const res = await api.getRoot();
	expect(res.status()).toBe(200);
});
