import { Injectable } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerUtil {

        private static spin : NgxSpinnerService;

        constructor(private tmpSpinner : NgxSpinnerService){
            debugger;
            SpinnerUtil.spin = tmpSpinner;
        }

         public static  showSpinner() {
                SpinnerUtil.spin.show();
         }

         public static hideSpinner() {
                SpinnerUtil.spin.hide();
         }
       
}
