import mfrc522 from 'mfrc522-rpi';
import logger from './logger';

export default class CardReader {
  public startReading() {
    //# Init WiringPi with SPI Channel 0
    mfrc522.initWiringPi();

    //# This loop keeps checking for chips. If one is near it will get the UID and authenticate
    logger.info('scanning...');
    logger.info('Please put chip or keycard in the antenna inductive zone!');
    logger.info('Press Ctrl-C to stop.');

    setInterval(() => {
      //# reset card
      mfrc522.reset();

      //# Scan for cards
      const response = mfrc522.findCard();
      logger.info(JSON.stringify(response));
      if (!response.status) {
        logger.info('No Card');
        return;
      }
      logger.info('Card detected, CardType: ' + response.bitSize);

      //# Get the UID of the card
      const uidResponse = mfrc522.getUid();
      if (!uidResponse.status) {
        logger.info('UID Scan Error');
        return;
      }
      //# If we have the UID, continue
      const uid = uidResponse.data;
      logger.info('Card read UID:', uid[0].toString(16), uid[1].toString(16), uid[2].toString(16), uid[3].toString(16));

      //# Select the scanned card
      const memoryCapacity = mfrc522.selectCard(uid);
      logger.info('Card Memory Capacity: ' + memoryCapacity);

      //# This is the default key for authentication
      // const key = [0xff, 0xff, 0xff, 0xff, 0xff, 0xff];

      //# Authenticate on Block 8 with key and uid
      // if (!mfrc522.authenticate(8, key, uid)) {
      //   logger.info('Authentication Error');
      //   return;
      // }

      // //# Dump Block 8
      // logger.info('Block: 8 Data: ' + mfrc522.getDataForBlock(8));

      //# Stop
      mfrc522.stopCrypto();
    }, 500);
  }
}
