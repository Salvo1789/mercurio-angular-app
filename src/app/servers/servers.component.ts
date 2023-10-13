import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  hasUsername: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  username = "";

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Its name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: Event){
    this.hasUsername = true;
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.username="";
    this.hasUsername=false;
  }
}
