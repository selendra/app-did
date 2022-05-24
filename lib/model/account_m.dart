
import 'package:flutter/material.dart';
import 'package:polkawallet_sdk/storage/types/keyPairData.dart';
class AccountM {

  String? name;
  String? address;
  String? pubKey;
  String? addressIcon;

  KeyPairData? currentAcc;
  TextEditingController pinController = TextEditingController();
  TextEditingController oldPinController = TextEditingController();
  TextEditingController newPinController = TextEditingController();
  GlobalKey<FormState> changePinKey = GlobalKey<FormState>();
  GlobalKey<FormState> backupKey = GlobalKey<FormState>();
  FocusNode pinNode = FocusNode();
  FocusNode oldNode = FocusNode();
  FocusNode newNode = FocusNode();

  bool loading = false;

  AccountM({this.name, this.address, this.pubKey, this.addressIcon});
}

