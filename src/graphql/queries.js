/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNVIDIAJetson = /* GraphQL */ `
  query GetNVIDIAJetson($device_id: String!, $timestamp: AWSTimestamp!) {
    getNVIDIAJetson(device_id: $device_id, timestamp: $timestamp) {
      device_id
      timestamp
      data
      __typename
    }
  }
`;
export const listNVIDIAJetsons = /* GraphQL */ `
  query ListNVIDIAJetsons(
    $filter: TableNVIDIAJetsonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNVIDIAJetsons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        device_id
        timestamp
        data
        __typename
      }
      nextToken
      __typename
    }
  }
`;
