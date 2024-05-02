import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function Song({data}) {
    const {slug} = useParams();
    const selectedSong = data.find((song) => song.slug === slug)

    return (
        <>
        <nav>
        <Link to="/">Go Back Home</Link>
        </nav>

        <h1>{selectedSong.title}</h1>
        <img src={selectedSong.cover} alt={selectedSong.title} />
        <p>Artist: {selectedSong.artist}</p>
        <p>Rank: {selectedSong.rank}</p>
        </>
    )
}

Song.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any)
}