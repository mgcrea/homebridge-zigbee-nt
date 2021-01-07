import { Service } from 'homebridge';
import { XiaomiMotionSensor } from './motion-sensor';
import { AmbientLightServiceBuilder } from '../../builders/ambient-light-service-builder';

export class MotionIlluminanceSensor extends XiaomiMotionSensor {
  private illuminanceService: Service;

  getAvailableServices(): Service[] {
    const services = super.getAvailableServices();
    this.illuminanceService = new AmbientLightServiceBuilder(
      this.platform,
      this.accessory,
      this.client,
      this.state
    )
      .withAmbientLightLevel()
      .build();
    services.push(this.illuminanceService);
    return services;
  }
}
