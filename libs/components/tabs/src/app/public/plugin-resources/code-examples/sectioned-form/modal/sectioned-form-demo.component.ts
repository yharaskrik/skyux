import {
  Component
} from '@angular/core';

import {
  SkyModalCloseArgs,
  SkyModalService
} from '@skyux/modals';

import {
  SectionedModalFormDemoComponent
} from './sectioned-modal-form-demo.component';

@Component({
  selector: 'app-sectioned-form-demo',
  templateUrl: './sectioned-form-demo.component.html'
})
export class SectionedFormDemoComponent {

  constructor(
    private modal: SkyModalService
  ) { }

  public openModal(): void {
    let modalInstance = this.modal.open(SectionedModalFormDemoComponent);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel') {
        console.log(`Modal cancelled`);
      } else if (result.reason === 'save') {
        console.log(`Modal saved`);
      }
    });
  }

}
