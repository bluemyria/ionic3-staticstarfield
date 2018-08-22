import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  cameraForm: FormGroup;
  focalLength = 0;
  cropFactor = 1;
  expTime600 = 0;
  expTime500 = 0;
  berechnet = false;

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
      'focalLength': new FormControl(this.focalLength, Validators.required),
      'cropFactor': new FormControl(this.cropFactor, Validators.required)
    });
  }

}
