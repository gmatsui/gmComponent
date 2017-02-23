import { NgModule, ModuleWithProviders} from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';

@NgModule({
    imports: [
    ],
    exports: [
        HelloComponent,
        ByeComponent
    ],
    declarations: [
        HelloComponent,
        ByeComponent
    ],
    providers: [],
})
export class GmTestModule {

}
