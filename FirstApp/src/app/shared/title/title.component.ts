import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  fb = inject(FormBuilder);
  searchForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.searchForm.events
      .pipe(
        debounceTime(1000)
      )
      .subscribe(
        (event) => {
          console.log("🚀 ~ TitleComponent ~ createForm ~ searchForm:", event.source.value)
        }
      );
  }

}
