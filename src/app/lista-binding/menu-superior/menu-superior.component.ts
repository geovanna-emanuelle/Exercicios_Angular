import { Component, inject, TemplateRef } from '@angular/core';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss'],
})
export class MenuSuperiorComponent {
  isMenuCollapsed = true;

  private offcanvasService = inject(NgbOffcanvas);
  closeResult = '';

  open(content: TemplateRef<any>) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
