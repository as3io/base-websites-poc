import React from 'react';
import PropTypes from 'prop-types';

const ContentListItem = ({
  shortName,
}) => (
  <div className="list-group-item">
    {shortName}
  </div>
);

ContentListItem.propTypes = {
  shortName: PropTypes.string.isRequired,
};

ContentListItem.defaultProps = {
};

export default ContentListItem;
