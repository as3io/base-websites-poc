import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragment-types.json';

export default new IntrospectionFragmentMatcher({ introspectionQueryResultData });
