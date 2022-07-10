// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TopTracksType } from '../../components/responseTypes';
import { getTopTracks } from '../../lib/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TopTracksType>,
) {
    const response = await getTopTracks();
    const { items } = (await response.json()) as {
        items: {
            artists: { name: string }[];
            external_urls: { spotify: string };
            name: string;
        }[];
    };

    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return res.status(200).json({ tracks });
}
//https://leerob.io/blog/spotify-api-nextjs
