import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
    MsgCreateGame,
    MsgCreateGameResponse,
    MsgPlayMove,
    MsgPlayMoveResponse,
} from "../generated/checkers/tx"

export const typeUrlMsgCreateGame = "/interchainmedia.checkers.checkers.MsgCreateGame"
export const typeUrlMsgCreateGameResponse = "/interchainmedia.checkers.checkers.MsgCreateGameResponse"
export const typeUrlMsgPlayMove = "/interchainmedia.checkers.checkers.MsgPlayMove"
export const typeUrlMsgPlayMoveResponse = "/interchainmedia.checkers.checkers.MsgPlayMoveResponse"

export const checkersTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateGame, MsgCreateGame],
    [typeUrlMsgCreateGameResponse, MsgCreateGameResponse],
    [typeUrlMsgPlayMove, MsgPlayMove],
    [typeUrlMsgPlayMoveResponse, MsgPlayMoveResponse],
]

export interface MsgCreateGameEncodeObject extends EncodeObject {
    readonly typeUrl: "/interchainmedia.checkers.checkers.MsgCreateGame"
    readonly value: Partial<MsgCreateGame>
}

export function isMsgCreateGameEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameEncodeObject {
    return (encodeObject as MsgCreateGameEncodeObject).typeUrl === typeUrlMsgCreateGame
}

export interface MsgCreateGameResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/interchainmedia.checkers.checkers.MsgCreateGameResponse"
    readonly value: Partial<MsgCreateGameResponse>
}

export function isMsgCreateGameResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameResponseEncodeObject {
    return (encodeObject as MsgCreateGameResponseEncodeObject).typeUrl === typeUrlMsgCreateGameResponse
}

export interface MsgPlayMoveEncodeObject extends EncodeObject {
    readonly typeUrl: "/interchainmedia.checkers.checkers.MsgPlayMove"
    readonly value: Partial<MsgPlayMove>
}

export function isMsgPlayMoveEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveEncodeObject {
    return (encodeObject as MsgPlayMoveEncodeObject).typeUrl === typeUrlMsgPlayMove
}

export interface MsgPlayMoveResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/interchainmedia.checkers.checkers.MsgPlayMoveResponse"
    readonly value: Partial<MsgPlayMoveResponse>
}

export function isMsgPlayMoveResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveResponseEncodeObject {
    return (encodeObject as MsgPlayMoveResponseEncodeObject).typeUrl === typeUrlMsgPlayMoveResponse
}
