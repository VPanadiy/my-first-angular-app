import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: `<p>Server component with name {{ nameLabel }}</p>\n`,
  styles: [`
    p {
      color: lightcoral;
    }

    .online {
      color: cornflowerblue;
    }
  `]
})
export class ServerComponent {
  @Input('nameLabel') nameLabel: string;
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
