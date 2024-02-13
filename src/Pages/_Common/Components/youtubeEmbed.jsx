import PropTypes from "prop-types";
import '../Stylesheets/youtubeEmbed.css'

/* visit the youtube video you want to display, click share, click embed
** then pass the embedId as well as your preferred embedWidth and embedHeight
** as props to the component as props */

const YoutubeEmbed = ({ embedId, embedWidth, embedHeight }) => (
  <div className="video-responsive">
    <iframe
      width={embedWidth}
      height={embedHeight}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;