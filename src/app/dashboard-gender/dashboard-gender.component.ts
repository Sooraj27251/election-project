import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard-gender',
  templateUrl: './dashboard-gender.component.html',
  styleUrls: ['./dashboard-gender.component.css']
})
export class DashboardGenderComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  dashboarddata:any;

  constructor(private dashboardserivce : DashboardService) { }
  @Input() set consti(value:any) {
    this.dashboarddata = value;
    this.getData();
  }

  showchart: boolean = false;

  constituencies: Array<String> = [];

  labelList: Array<String> = [];
  countList: any = [{ data: [] }];
  countarry: Array<number> = [];
  chartdata: any;

  public doughnutChartLabels: String[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };

  index: any = 0;

  ngOnInit(): void {
  }


  public getData() {
    this.labelList = [];
    this.countList = [{ data: [] }];
    this.countarry = [];
  
    this.dashboardserivce
      .getGenderDashboard(this.dashboarddata)
      .subscribe((data: any) => {
        for (
          this.index = 0;
          this.index < Object.values(data).length;
          this.index++
        ) {
          this.chartdata = Object.values(data);
          this.labelList.push(this.chartdata[this.index].gender);
          this.countarry.push(this.chartdata[this.index].num);
        }

        this.doughnutChartData.labels = this.labelList;
        this.countList[0].data = this.countarry;
        this.doughnutChartData.datasets = this.countList;
        this.showchart = true;

        setTimeout(() => {
          if (this.chart && this.chart.chart && this.chart.chart.config) {
            this.chart.chart.config.data.labels = this.labelList;
            this.chart.chart.config.data.datasets = this.countList;
            this.chart.chart.update();
          }
        });
      });
  }

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

}
