import { UsersService } from './../user-list/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {

    this.createForm = fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [0, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  createPost(): void {

    if (this.createForm.invalid) {
      console.error("Invalid data!");
      return;
    }

    console.log("Object to create: ", this.createForm.value);

    this.userService.createNewPost(this.createForm.value).subscribe(res => {
      console.log("Response: ", res);
    }, err => {
      console.error(err);
    });
  }

}
