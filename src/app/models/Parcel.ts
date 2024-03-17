import { KeywordConstants } from 'src/assets/constants/constants';
import { HelperService } from '../services/helpers/helper-service';
import { BaseModel } from './BaseModel';
import { formatDate } from '@angular/common';
export class Parcel extends BaseModel {
  public cnNo: string;
  public cnType: string;
  public dealer: string;
  public receiver: string;
  public parcelTo: string;
  public parcelFrom: string;
  public mobile: string;
  public quantity: string;
  public weight: string;
  public amount: number;
  public remarks: string;
  public parcelStatus: string;
  public icon: string;
  public qrIcon: string;
  public picked:boolean;
  
  constructor(requestJSON: any) {
    super(requestJSON);
    this.picked = false;
    this.qrIcon = '/assets/icon/qr-code.png';
    this.cnNo = requestJSON.cnNo;
    this.cnType = requestJSON.cnType;
    this.dealer = requestJSON.dealer;
    this.amount = requestJSON.amount;
    this.receiver = requestJSON.receiver;
    this.parcelTo = requestJSON.parcelTo;
    this.parcelFrom = requestJSON.parcelFrom;
    this.mobile = requestJSON.mobile;
    this.quantity = requestJSON.quantity;
    this.weight = requestJSON.weight;
    this.remarks = requestJSON.remarks;
    this.parcelStatus = requestJSON.parcelStatus;
  }
  public toCreationJSON() {
    return {
      cnNo: this.cnNo,
      cnType: this.cnType,
      dealer: this.dealer,
      receiver: this.receiver,
      amount: this.amount,
      parcelTo: this.parcelTo,
      parcelFrom: this.parcelFrom,
      mobile: this.mobile,
      quantity: this.quantity,
      weight: this.weight,
      remarks: this.remarks,
      parcelStatus: 'New',
      createdBy: this.createdBy ? this.createdBy.id : '',
      updatedBy: this.updatedBy ? this.updatedBy.id : '',
      createdOn:this.createdOn,
      updatedOn:this.updatedOn
    };
  }
  public toUpdationJSON() {
    return {
      id: this.id,
      cnNo: this.cnNo,
      cnType: this.cnType,
      dealer: this.dealer,
      amount: this.amount,
      receiver: this.receiver,
      parcelTo: this.parcelTo,
      parcelFrom: this.parcelFrom,
      mobile: this.mobile,
      quantity: this.quantity,
      weight: this.weight,
      remarks: this.remarks,
      parcelStatus: this.parcelStatus,
      updatedBy: this.updatedBy ? this.updatedBy.id : '',
      updatedOn: this.updatedOn
    };
  }
  public toUpdateStatusJSON() {
    return {
      id: this.id,
      cnNo: this.cnNo,
      parcelStatus: this.parcelStatus,
      updatedBy: this.updatedBy ? this.updatedBy.id : '',
      updatedOn: formatDate(
        new Date(),
        KeywordConstants.DATE_FORMAT_STRING,
        KeywordConstants.DATE_FORMAT_LANGUAGE,
        KeywordConstants.DATE_FORMAT_TIMES_ZONE_OFFSET,
      ),
    };
  }
}
