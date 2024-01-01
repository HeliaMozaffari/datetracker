export class AuthenticateUser {
     constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

export class TrackDate {
    constructor(emergencyName, emergencyPhone, emergencyEmail, location, dateName, datePhone, presetMessage, dueTime) {
       this.emergencyName = emergencyName;
       this.emergencyPhone = emergencyPhone;
       this.emergencyEmail = emergencyEmail;
       this.location = location;
       this.dateName = dateName;
       this.datePhone = datePhone;
       this.presetMessage = presetMessage;
       this.dueTime = dueTime;
   }
}

export class EmergencyHistory extends TrackDate {
}