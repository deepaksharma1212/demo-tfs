import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastrUtil {

    private static toast : ToastrService;

    constructor(private toastor : ToastrService){
        debugger;
        ToastrUtil.toast = toastor;}

    public  static showErrorMessage(header : any, message : any , timeout : any){
         ToastrUtil.toast.error(header,message,{
             timeOut: timeout
           });
    }

    public  static showSuccesMessage(header :any, message: any, timeout : any){
         ToastrUtil.toast.success(header,message,{
            timeOut: timeout
          });
    }

    public  static showWarningMessage(header :any, message: any, timeout : any){
        ToastrUtil.toast.warning(header,message,{
           timeOut: timeout
         });
   }
}