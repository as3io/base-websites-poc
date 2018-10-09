import React, { Component } from 'react';

export class WebsiteSection extends Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    console.info('getInitialProps', ctx);
  }
}
