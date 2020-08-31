
import { AxiosRequestConfig } from 'axios';

type StringOrNumber = string | number;

export interface OptionsParams extends AxiosRequestConfig {
  pathParams?: {
    [path: string]: StringOrNumber
  }
}

export type BaseType = (options: OptionsParams) => AxiosRequestConfig;

export interface PathParamsWithId {
  pathParams: {
    id: StringOrNumber
  }
}

export interface PathParamsWithLocale {
  pathParams: {
    locale: string
  }
}

export interface PathParamsWithTag {
  pathParams: {
    tag: string
  }
}

export interface LocaleDataItems {
  data: {
    items: {
      localeData: {
        resources: {
          [key: string]: string
        }
      }
    }
  }
}

export default interface RequestTypes {
  authenticate: () => AxiosRequestConfig;
  widget: {
    getAllWidgetDescriptors: () => AxiosRequestConfig;
    getAllWidgetDescriptorsByPageType: (options: PathParamsWithId) => AxiosRequestConfig;
    getAllWidgetInstances: () => AxiosRequestConfig;
    getConfigDefinitionForWidgetDescriptor: (options: PathParamsWithId) => AxiosRequestConfig;
    getConfigLocaleContentForWidgetDescriptor: (options: PathParamsWithId & PathParamsWithLocale) => AxiosRequestConfig;
    getConfigMetadataForWidgetDescriptor: (options: PathParamsWithId) => AxiosRequestConfig;
    getFragmentMetadata: (options: PathParamsWithId & PathParamsWithTag) => AxiosRequestConfig;
    getInstancesForWidgetDescriptor: (options: PathParamsWithId) => AxiosRequestConfig;
    getSchemaForWidgetDescriptor: (options: PathParamsWithId) => AxiosRequestConfig;
    getWidgetDescriptorBaseLess: (options: PathParamsWithId) => AxiosRequestConfig;
    getWidgetDescriptorBaseLocaleContent: (options: PathParamsWithId & PathParamsWithLocale) => AxiosRequestConfig;
    getWidgetDescriptorBaseTemplate: (options: PathParamsWithId) => AxiosRequestConfig;
    getWidgetDescriptorById: (options: PathParamsWithId) => AxiosRequestConfig;
    getWidgetDescriptorJavascriptInfoById: (options: PathParamsWithId) => AxiosRequestConfig;
    getWidgetDescriptorMetadata: (options: PathParamsWithId) => AxiosRequestConfig;
    updateConfigLocaleContentForWidgetDescriptor: (options: PathParamsWithId & PathParamsWithLocale & LocaleDataItems) => AxiosRequestConfig;
  }
}
