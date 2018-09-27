// @flow

export type Event = {
    id: string,
    name: string,
};

export type Speaker = {
    id: string,
    name: string,
};

export type Sermon = {
    id: string,
    name: string,
    preachedAt: string,
    url: string,
    passage: ?string,
    duration: number,
    speakers: Array<Speaker>,
    event: ?Event,
};

export type Series = {
    id: string,
    name: string,
    subtitle: ?string,
    image3x2Url: ?string,
    sermons: Array<Sermon>,
};

export type TalksFilter = {
    seriesName: ?string,
    sermonTitle: ?string,
    passage: ?string,
    speakerName: ?string,
};
