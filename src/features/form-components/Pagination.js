import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import segmentize from 'segmentize';

export default class Pagination extends Component {
  render() {
    const {currentPage, totalCount, onPageChange} = this.props;

    const segments = segmentize({
      page: currentPage,
      pages: totalCount,
      beginPages: 1,
      sidePages: 2,
      endPages: 1,
    });

    const leftPages = [...segments.beginPages, ...segments.previousPages];
    const rightPages = [...segments.nextPages, ...segments.endPages];

    return (
      <Menu pagination>
        {leftPages.map(page => (
          <Menu.Item
            key={page}
            name={`${page}`}
            onClick={() => onPageChange(page)}
          />
        ))}

        {segments.centerPage.map(page => (
          <Menu.Item key={page} name={`${page}`} active />
        ))}

        {rightPages.map(page => (
          <Menu.Item
            key={page}
            name={`${page}`}
            onClick={() => onPageChange(page)}
          />
        ))}
      </Menu>
    );
  }
}
