
import ShipmentSearchIndex from ‘./shipmentSearchIndex’;
import ShipmentUpdateListenerInterface from ‘./shipmentUpdateListenerInterface’;

class ShipmentUpdateListener extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
//async makes the function return a promise
async receiveUpdate(id: string, shipmentData: any) {
  //await makes the javascript to wait until the promise settles and returns its result
	await this.updateShipment(id, shipmentData);
}
