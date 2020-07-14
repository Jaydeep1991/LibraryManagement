import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { DashboardService } from '../DashboardService/dashboard.service';
import { ToasterService } from '../toasterService/toaster.service';


export class BookGenere {
  constructor(public bookCount: number, public bookGenere: string) { }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role: string;
  history: number = 0;
  mystery: number = 0;
  science: number = 0;
  textbook: number = 0;
  data: BookGenere[];
  constructor(private dashboard: DashboardService, private toaster: ToasterService) { }

  ngOnInit(): void {
    let user = sessionStorage.getItem('role');
    this.role = user;
    this.dashboard.getBookGenere().subscribe(
      resp => {
        if (resp.statusCode == 200) {
          this.data = resp.data;
          if (this.data[0] != null) {
            this.science = this.data[0].bookCount;
          }
          if (this.data[1] != null) {
            this.history = this.data[1].bookCount;
          }
          if (this.data[2] != null) {
            this.mystery = this.data[2].bookCount;
          }
          if (this.data[3] != null) {
            this.textbook = this.data[3].bookCount;
          }
          this.pieChartData = [this.history, this.mystery, this.science, this.textbook];
        }

        else if (resp.statusCode == 400) {
          this.toaster.Error(resp.message);
        }
       
      },
      err => {
        this.toaster.Error("Something went wrong");
      }
    );
    
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = ['History', 'Mystery', 'Science', 'Textbook'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(245,0,255,0.3)'],
    },
  ];

}
