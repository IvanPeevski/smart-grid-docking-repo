import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import {
  GridComponent,
  GridColumn,
  DataAdapter,
  Smart
} from "smart-webcomponents-angular/grid";
import { DockingLayoutComponent } from "smart-webcomponents-angular/dockinglayout";
import { GetData } from "../assets/data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("grid", { read: GridComponent, static: false })
  grid!: GridComponent;
  @ViewChild("docking", { read: DockingLayoutComponent, static: false })
  docking!: DockingLayoutComponent;

  sorting = {
    enabled: true,
    mode: "many"
  };

  dataSource = new Smart.DataAdapter({
    dataSource: GetData(100),
    dataFields: [
      "id: number",
      "firstName: string",
      "lastName: string",
      "productName: string",
      "quantity: number",
      "price: number",
      "total: number"
    ]
  });

  columns = [
    {label: "id", dataField: "id"},
    {
      label: "First Name",
      dataField: "firstName",
    },
    { label: "Last Name", dataField: "lastName" },
    { label: "Product", dataField: "productName" },
    {
      label: "Quantity",
      dataField: "quantity",
      align: "right",
      cellsAlign: "right"
    },
    {
      label: "Unit Price",
      dataField: "price",
      align: "right",
      cellsAlign: "right",
      cellsFormat: "c2"
    },
    {
      label: "Total",
      dataField: "total",
      align: "right",
      cellsAlign: "right",
      cellsFormat: "c2"
    }
  ];

  layout: Array<object> = [
    {
      type: "LayoutGroup",
      items: [
        {
          type: "LayoutGroup",
          items: [
            {
              type: "LayoutPanel",
							id: 'tabPanel',
              label: "Tabs 2",
              items: [
                {
                  id: "tabItem1",
                  type: "LayoutPanelItem",
                  label: "Tab 2",
                  content: '',
									autoHide: true
                }
              ],
              size: 604
            }
          ],
          orientation: "vertical",
          size: 334
        }
      ],
      orientation: "horizontal"
    }
  ];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
    this.docking.update("tabPanel", {
      size: "33%",
      label: "Tab2",
      items: [
        {
          index: 0,
          label: "Tab2",
          content: this.grid.nativeElement
        }
      ]
    });
  }

  init(): void {
    // init code.
  }

	setSort(): void {
		this.grid.dataSource = new Smart.DataAdapter({
			dataSource: GetData(100),
			dataFields: [
				"id: number",
				"firstName: string",
				"lastName: string",
				"productName: string",
				"quantity: number",
				"price: number",
				"total: number"
			]
		});
		this.grid.sortBy("firstName","asc");
	}
}
