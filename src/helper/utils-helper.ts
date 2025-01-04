import { ASSETS } from '../constants/assets';
import { PAYMENT_METHOD_TYPE_ENUM } from '../enums/payemnt-method-type-enum';

export class UtilsHelper {
  checkBankImageByPaymentMethod(method?: PAYMENT_METHOD_TYPE_ENUM) {
    switch (method) {
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BRI:
        return ASSETS.BANK.BRI; // Tambahkan path gambar untuk BRI
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BCA:
        return ASSETS.BANK.BCA; // Path gambar untuk BCA
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BNI:
        return ASSETS.BANK.BNI; // Path gambar untuk BNI
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_MANDIRI:
        return ASSETS.BANK.MANDIRI; // Path gambar untuk Mandiri
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_PERMATA:
        return ASSETS.BANK.PERMATA; // Path gambar untuk Permata
      case PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_CIMB:
        return ASSETS.BANK.CIMB; // Path gambar untuk CIMB
      default:
        return undefined;
    }
  }

  public copyTextToClipboard(text: string) {
    return navigator.clipboard.writeText(text).catch((e) => {
      throw new Error(e);
    });
  }
}
