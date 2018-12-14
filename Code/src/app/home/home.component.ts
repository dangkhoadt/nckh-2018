import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  checkTitle="";
  curCheck=true;

  isError=false;
  isHandling=false;
  firstImageInput=false;

  Image;//real image
  i_Width:number=0;
  i_Height:number=0;

  PImage;//proccessed image
  pi_Width:number=0;
  pi_Height:number=0;

  constructor(private _http:HttpClient){}

  onChangeImage(event){
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.Image = reader.result;
        var output = document.getElementById("image") as HTMLImageElement;
        output.src = this.Image;
        setTimeout(()=>{
          this.i_Width=output.naturalWidth;
          this.i_Height=output.naturalHeight;
        },50);
        if(this.isError){
          this.isError=false;
        }
        this.firstImageInput=true;
      }
    }
  }

  uploadImage(){
    if(!this.firstImageInput){
      return;
    }
    this.isHandling=true;
    this._http.post("https://nckh-2018.appspot.com/upload",{
      "image":this.Image
    }).subscribe(x=>{
      this.PImage=x;
      var output = document.getElementById("pImage") as HTMLImageElement;
        output.src =  "data:image/jpeg;base64,"+this.PImage;
        setTimeout(()=>{
          this.pi_Width=output.naturalWidth;
          this.pi_Height=output.naturalHeight;
        },50);
    },
    err=>{
      this.isHandling=false;
      this.isError=true;
    },
    ()=>{
      this.isHandling=false;
    });
  }

  downloadImage(){
    const myFile = this.base64ToFile(this.PImage, 'Test.jpeg', 'image/jpeg');
    FileSaver.saveAs(myFile);
  }

  private base64ToFile(base64Data, tempfilename, contentType) {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new File(byteArrays, tempfilename, {type: contentType});
  }

  createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.PImage = reader.result;
        var output = document.getElementById("pImage") as HTMLImageElement;
        setTimeout(()=>{
          this.pi_Width=output.naturalWidth;
          this.pi_Height=output.naturalHeight;
        },50);
      }, false);
  
      if (image) {
        reader.readAsDataURL(image);
      }
  }

  onHandleCheck(){
    this.checkTitle="Ảnh phóng to bình thường";
    var output = document.getElementById("imageCheck") as HTMLImageElement;
    output.style.width=(this.i_Width*2).toString()+"px";
    output.style.maxWidth="100%";

    output.style.height=(this.i_Height*2).toString()+"px";
    output.src = this.Image;
  }

  onHandleNext(){
    var output = document.getElementById("imageCheck") as HTMLImageElement;
    if(this.curCheck)
    {
      this.checkTitle="Ảnh phóng to bằng công cụ";
      output.src =  "data:image/jpeg;base64,"+this.PImage;
    }
    else{
      this.checkTitle="Ảnh phóng to bình thường";
      output.src = this.Image;
    }
    this.curCheck=!this.curCheck;
  }

}
