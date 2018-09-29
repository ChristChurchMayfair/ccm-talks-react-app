//@flow
import type { Sermon, Series } from "../../types";

import { filterSeries } from "./index";

test("Filter Series By Name", () => {
    const sermon: Sermon = {
        name: "sermon name",
        event: { id: "id", name: "Event" },
        id: "id",
        duration: 90,
        passage: "asdfasdf",
        url: "a url",
        preachedAt: "asdfasdf",
        speakers: [{ id: "id1", name: "Speaker 1" }],
    };

    const series: Series = {
        name: "Series name",
        subtitle: "subtitle",
        id: "asdf",
        image3x2Url: "notreallyaurl",
        sermons: [sermon],
    };

    expect(filterSeries(series, "Series name")).toBe(true);
});
