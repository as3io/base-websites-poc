import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import PropTypes from 'prop-types';
import initApollo from './init';
import apolloConfig from './config';
import is404 from '../lib/is-404';

export default (App) => {
  class WithApollo extends React.Component {
    /**
     *
     * @param {*} props
     */
    constructor(props) {
      super(props);
      const { apolloState } = this.props;
      this.apollo = initApollo(apolloConfig, apolloState);
    }

    /**
     *
     * @param {*} ctx
     */
    static async getInitialProps({
      Component,
      router,
      ctx,
      rest,
    }) {
      const { req, res } = ctx;

      // Create the apollo client and expose it within the context.
      // This allows the "raw" client to be accessed within `getInitialProps`
      const apollo = initApollo(apolloConfig, {}, req);
      ctx.apollo = apollo;

      // Await the App's initial props.
      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps({
          Component,
          router,
          ctx,
          ...rest,
        });
      }


      // Run all GraphQL queries in tree and extract the data.
      // All run on the server and if headers have not been sent (e.g. the response is redirecting).
      if (!process.browser && !res.headersSent) {
        try {
          // Run queries in the tree.
          await getDataFromTree(<App
            {...appProps}
            Component={Component}
            router={router}
            apollo={apollo}
          />);
        } catch (e) {
          // Prevent errors from crashing SSR.
          // Handle the error in components via data.error prop.
          // @see http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
          if (is404(e)) {
            e.code = 'ENOENT';
            res.statusCode = 404;
            throw e;
          } else {
            // eslint-disable-next-line no-console
            console.error('SERVER ERROR in getDataFromTree', e);
          }
        }
        // Clear the head state so duplicate head data is prevented.
        Head.rewind();
      }

      // Extract the Apollo query data.
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    /**
     *
     */
    render() {
      return <App {...this.props} apollo={this.apollo} />;
    }
  }

  WithApollo.displayName = 'WithApollo(App)';
  WithApollo.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    apolloState: PropTypes.object.isRequired,
  };
  return WithApollo;
};
