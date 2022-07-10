export type CurrentlyListeningType = {
    album?: string;
    albumImageUrl?: string;
    artist?: string;
    isPlaying: boolean;
    songUrl?: string;
    title?: string;
};
export type TopTracksType = {
    tracks: {
        artist: string;
        songUrl: string;
        title: string;
    }[];
};
