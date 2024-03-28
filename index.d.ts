import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerNVIDIAJetson = {
  readonly data: string;
  readonly device_id: string;
  readonly timestamp: number;
}

type LazyNVIDIAJetson = {
  readonly data: string;
  readonly device_id: string;
  readonly timestamp: number;
}

export declare type NVIDIAJetson = LazyLoading extends LazyLoadingDisabled ? EagerNVIDIAJetson : LazyNVIDIAJetson

export declare const NVIDIAJetson: (new (init: ModelInit<NVIDIAJetson>) => NVIDIAJetson)

type EagerNVIDIAJetsonConnection = {
  readonly items?: (NVIDIAJetson | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyNVIDIAJetsonConnection = {
  readonly items?: (NVIDIAJetson | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type NVIDIAJetsonConnection = LazyLoading extends LazyLoadingDisabled ? EagerNVIDIAJetsonConnection : LazyNVIDIAJetsonConnection

export declare const NVIDIAJetsonConnection: (new (init: ModelInit<NVIDIAJetsonConnection>) => NVIDIAJetsonConnection)

