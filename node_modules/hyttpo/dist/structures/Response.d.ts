/// <reference types="node" />
declare class Response {
    request: object;
    status: number;
    statusText: string;
    headers: object;
    data: any;
    constructor(options: any);
    get ok(): boolean;
    json(): object;
    text(): string;
    array(): Array<string>;
    buffer(): Buffer;
}
export default Response;
