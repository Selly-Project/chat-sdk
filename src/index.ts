type SourceType = 'supplier_tool' | 'selly_admin';

interface InitProps {
  userToken: string;
  fcmToken: string;
  deviceId: string;
  source: SourceType;
}

export class SellyChat {
  private setupChat(params: InitProps) {
  console.log(`Func: setupChat - PARAMS: params`, params);
    const { userToken, fcmToken, deviceId, source } = params;
  }

  public init(params: InitProps) {
    this.setupChat(params);
  }

  public destroy() {}

  public getUnreadMessage() {}
}
