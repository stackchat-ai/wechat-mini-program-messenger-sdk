"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AWS Cognito identities return a UUID that has been prefixed with the region
 * that the identity was constructed in. Those identities look as follows.
 * ap-southeast-2:e206339e-70bd-4030-8935-15965978793d
 *
 * The identity GUID is used as the userId inside of the io solution user table,
 * subsequently all api calls that use the userId as a parameter will land up
 * displaying the provided identity key.
 *
 * This url is ugly so we desire to map these identities to something cleaner
 * but maintain the semantics of the issued identity token (since we don't know
 * if the region is important).
 */
exports.regionMap = {
  'us-east-2': 'a',
  'us-east-1': 'b',
  'us-west-1': 'c',
  'us-west-2': 'd',
  'ap-east-1': 'e',
  'ap-south-1': 'f',
  'ap-northeast-3': 'g',
  'ap-northeast-2': 'h',
  'ap-southeast-1': 'i',
  'ap-southeast-2': 'j',
  'ap-northeast-1': 'k',
  'ca-central-1': 'l',
  'cn-north-1': 'm',
  'cn-northwest-1': 'n',
  'eu-central-1': 'o',
  'eu-west-1': 'p',
  'eu-west-2': 'q',
  'eu-west-3': 'r',
  'eu-north-1': 's',
  'sa-east-1': 't',
  'us-gov-east-1': 'u',
  'us-gov-west-1': 'v'
};
function convertCognitoIdToUserId(cognitoId) {
  const colonIndex = cognitoId.indexOf(':');
  if (colonIndex === -1) {
    throw new Error(`Unexpected cognito identity id format, missing region and colon prefix: ${cognitoId}`);
  }
  if (colonIndex === cognitoId.length - 1) {
    throw new Error(`Unexpected cognito identity id format, missing actual id suffix: ${cognitoId}`);
  }
  const [region, guid] = cognitoId.split(':');
  return `${exports.regionMap[region]}${guid.replace(/-/g, '')}`;
}
exports.convertCognitoIdToUserId = convertCognitoIdToUserId;