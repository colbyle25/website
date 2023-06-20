import React from "react";
import PropTypes from "prop-types";
import '../Stylesheets/youtubeEmbed.css'

/*
** visit the youtube video you want to display, click share, click embed
** then fill out the fields below accordingly
** copy the embedID tag and call it as props from your parent component
*/

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="90%"
      height="400"
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