import { CartItem } from "../store/cartSlice";
import { fetchFoods } from "../util/http";
import { describe, it, expect, vi, afterEach } from "vitest";

describe("fetchFoods", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return mapped foods with quantity set to 1 and isActive removed", async () => {
    const mockData: CartItem[] = [
      {
        id: 1,
        name: "Apple",
        price: 1.5,
        quantity: 5,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "apple-thumb.jpg",
          mobile: "apple-mobile.jpg",
          table: "apple-table.jpg",
          desktop: "apple-desktop.jpg",
        },
      },
    ];

    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const result = await fetchFoods({ signal: new AbortController().signal });

    expect(result).toEqual([
      {
        id: 1,
        name: "Apple",
        price: 1.5,
        quantity: 1,
        category: "Fruit",
        image: {
          thumbnail: "apple-thumb.jpg",
          mobile: "apple-mobile.jpg",
          table: "apple-table.jpg",
          desktop: "apple-desktop.jpg",
        },
      },
    ]);
  });

  it("should throw an error when the response is not ok", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(
      fetchFoods({ signal: new AbortController().signal })
    ).rejects.toThrow("An error occurred while fetching the events");
  });

  it("should handle fetch aborting", async () => {
    // Create a mock fetch that throws an AbortError
    const abortError = new DOMException(
      "The user aborted a request.",
      "AbortError"
    );
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(abortError);

    const abortController = new AbortController();
    abortController.abort();

    await expect(
      fetchFoods({ signal: abortController.signal })
    ).rejects.toThrow("The user aborted a request.");

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});
