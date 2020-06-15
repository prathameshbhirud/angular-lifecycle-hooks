import { OnChanges, Input, SimpleChanges, Component } from "@angular/core";
import { Employee } from "./employee";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html'
  })
export class EmployeeComponent implements OnChanges {
    @Input() employee: Employee;
    @Input() message: string;

    allMsgChangeLogs: string[] = [];
    allEmpChangeLogs: string[] = [];

    ngOnChanges(changes: SimpleChanges){
        for(let propName in changes){
            let change = changes[propName];

            let currVal = JSON.stringify(change.currentValue);
            let preVal = JSON.stringify(change.previousValue);
            let changeLog = `${propName}: CurrentValue = ${currVal}, previousValue = ${preVal}`;

            if(propName === 'message'){
                this.allMsgChangeLogs.push(changeLog);
            }
            else{
                this.allEmpChangeLogs.push(changeLog);
            }
        }
    }
}