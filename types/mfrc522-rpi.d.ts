declare module 'mfrc522-rpi' {
  export function initWiringPi(channel?: number): void;
  export function reset(): void;
  export function writeRegister(address: number, value: number): void;
  export function writeRegister(): void;
  export function readRegister(): void;
  export function setRegisterBitMask(): void;
  export function clearRegisterBitMask(): void;
  export function antennaOn(): void;
  export function antennaOff(): void;
  export function toCard(): void;
  export function findCard(): { status: boolean; bitSize: number; };
  export function getUid(): { status: boolean; data: number[] };
  export function calculateCRC(): void;
  export function selectCard(data: number[]): void;
  export function authenticate(address: number, key: number[], uid: number[]): boolean;
  export function stopCrypto(): void;
  export function getDataForBlock(address: number): void;
  export function appendCRCtoBufferAndSendToCard(): void;
  export function writeDataToBlock(): void;
}
