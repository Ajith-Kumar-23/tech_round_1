import { Component } from '@angular/core';
import { JsonServerService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech_round';
  name = 'Angular';
  jsonData: Array<any> = [];
  dataUrl : string = './assets/data.json';

  constructor(private http : JsonServerService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.getPosts().subscribe((data: any) => {
      this.jsonData = data;
      this.jsonData.forEach((ele: any) => {
        if (ele) {
          ele['isView'] = false;
        }
      });
    })
  }

  viewSection(val: any) {
    this.jsonData.forEach((ele: any) => {
      if (ele?.id == val) {
        ele['isView'] = !ele?.isView;
      }
    });
  }

  addSection() {
    let tempId : number =  this.jsonData?.length + 1;
    let val : object = {
      id : tempId,
      title: "Section " + tempId,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    this.http.createPost(val).subscribe((res:any)=>{
      this.getData()
    });

  }
}
