import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  cameraForm: FormGroup;
  focalLength: number;
  cropFactor = 1;
  expTime600 = 0;
  expTime500 = 0;
  berechnet = false;
  txtFocalLength = "";


  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

  onSubmit() {
    const value = this.cameraForm.value;
    this.berechnet = false;
    this.calculate(value.focalLength, value.cropFactor);
    //this.cameraForm.reset();
  }

  calculate(focalLength, cropFactor) {

    if (focalLength > 0 && cropFactor > 0) {
      this.expTime500 = 500 / (focalLength * cropFactor);
      this.expTime600 = 600 / (focalLength * cropFactor);

      this.berechnet = true;
    }
  }

  ngOnInit() {

    this.cameraForm = new FormGroup({
      'focalLength': new FormControl(null, Validators.required),
      'cropFactor': new FormControl(this.cropFactor, Validators.required)
    });
  }

}
