import * as qs from 'querystring';
import HTTPRequestTypes from './interface/http/RequestTypes';
import { HTTPRequestBase } from './HTTPRequestBase';

const HTTPRequest: HTTPRequestTypes = {
  authenticate: () => HTTPRequestBase({
    url: '/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      grant_type: 'client_credentials'
    })
  }),
  widget: {
    getAllWidgetDescriptors: () => HTTPRequestBase({
      url: '/widgetDescriptors',
      method: 'GET'
    }),
    getAllWidgetDescriptorsByPageType: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/pageType/:id',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getAllWidgetInstances: () => HTTPRequestBase({
      url: '/widgetDescriptors/instances',
      method: 'GET'
    }),
    getConfigDefinitionForWidgetDescriptor: () => HTTPRequestBase({
      url: '/widgetDescriptors/:id/config',
      method: 'GET'
    }),
    getConfigLocaleContentForWidgetDescriptor: ({ pathParams: { id, locale } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/metadata/config/locale/:locale',
      method: 'GET',
      pathParams: {
        id,
        locale
      }
    }),
    getConfigMetadataForWidgetDescriptor: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/metadata/config',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getFragmentMetadata: ({ pathParams: { id, tag } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/element/:tag/metadata',
      method: 'GET',
      pathParams: {
        id,
        tag
      }
    }),
    getInstancesForWidgetDescriptor: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/instances',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getSchemaForWidgetDescriptor: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/schema',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getWidgetDescriptorBaseLess: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/less',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getWidgetDescriptorBaseLocaleContent: ({ pathParams: { id, locale } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/locale/:locale',
      method: 'GET',
      pathParams: {
        id,
        locale
      }
    }),
    getWidgetDescriptorBaseTemplate: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/code',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getWidgetDescriptorById: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getWidgetDescriptorJavascriptInfoById: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/javascript',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    getWidgetDescriptorMetadata: ({ pathParams: { id } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/metadata',
      method: 'GET',
      pathParams: {
        id
      }
    }),
    updateConfigLocaleContentForWidgetDescriptor: ({ pathParams: { id }, data: { items } }) => HTTPRequestBase({
      url: '/widgetDescriptors/:id/metadata/config/locale/:locale',
      method: 'PUT',
      pathParams: {
        id
      },
      data: {
        items
      }
    })
  }
};

export default HTTPRequest;
