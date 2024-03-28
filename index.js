// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NVIDIAJetson, NVIDIAJetsonConnection } = initSchema(schema);

export {
  NVIDIAJetson,
  NVIDIAJetsonConnection
};