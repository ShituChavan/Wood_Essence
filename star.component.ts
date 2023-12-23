import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;
  
  @Output()
  sendRating= new EventEmitter<number>()

  star_width!: number;
  constructor() { 
   
  }

  ngOnChanges(): void {
    this.star_width=this.rating*15;
  }

  ngOnInit(): void {
  }

  showRating(): void {
    // alert(this.rating)
     this.sendRating.emit(this.rating)
   }
}
