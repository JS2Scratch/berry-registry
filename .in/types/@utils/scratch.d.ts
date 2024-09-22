// typings/@utils/scratch.d.ts
declare module '@utils/scratch' {
    export enum ScratchType {
        number = 4,
        positive_number = 5,
        positive_int = 6,
        int = 7,
        angle = 8,
        color = 9,
        string = 10,
        broadcast = 11,
        variable = 12,
        list = 13
    }
    
    export type ScratchInput = [
        number, 
        ([ScratchType, any, string?, string?] | string)?, 
        [ScratchType, any]?
    ];
    
    /**
     * Returns a reference to a substack, from the starting-id
     * @constructor
     * @param startIndex - The ID
     * @returns - Substack reference
     */
    export function getSubstack(startIndex: string): ScratchInput

    /**
     * Returns a scratch-type, with the given value
     * @constructor
     * @param Type - The scratch-type
     * @param Value - The value
     * @returns - A scratch-type
     */
    export function getScratchType(Type: ScratchType, Value: any): ScratchInput

    /**
     * Returns a scratch-color, from the given details
     * @constructor
     * @param Type - The scratch-type
     * @param Value - The value
     * @param Hex - The hex value
     * @returns - A scratch-type
     */
    export function getColor(Type: ScratchType, Value: any, Hex: string): ScratchInput

    /**
     * Returns a scratch-variable, from the given ID
     * @constructor
     * @param Variable - The ID
     * @returns - A scratch-type
     */
    export function getVariable(Variable: string): ScratchInput

    /**
     * Returns a reference to the block, given its ID
     * @constructor
     * @param BlockID - The ID
     * @returns - A scratch-type
     */
    export function getBlockNumber(BlockID: string): ScratchInput

        /**
     * Returns a scratch-broadcast, from the given ID
     * @constructor
     * @param Broadcast - The ID
     * @returns - A scratch-type
     */
    export function getBroadcast(Broadcast: string): ScratchInput

    /**
     * Returns a scratch-menu, from the given ID
     * @constructor
     * @param Menu - The ID
     * @returns - A scratch-type
     */
    export function getMenu(Menu: string): ScratchInput
}
