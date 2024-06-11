import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  showInputSearch: boolean = false;
  ngOnInit(): void {

  }

}
