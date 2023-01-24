import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListModel, PokemonNameModel } from 'src/app/models/pokemon-list.model';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() childMessage: string = "";
  @Output() messageEvent = new EventEmitter<PokemonNameModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['name'];
  public dataSource: MatTableDataSource<PokemonNameModel>;
  public selection = new SelectionModel<PokemonNameModel>(false, []);
  public length: number;
  public pageSize = 20;
  public pageIndex = 0;
  public pageSizeOptions = [20];
  public showFirstLastButtons = true;
  public flagPokemonList = false;
  public count = 0;

  constructor(private pokemonListService: PokemonListService) {
    this.getAllPokemon(0)
  }

  public getAllPokemon(ofset: number) {
    this.flagPokemonList = false;
    this.pokemonListService.getAllPokemon(ofset).subscribe(response => {
      console.log(response)
      let pokemonName = PokemonListModel.getPokemonNames(response);
      this.flagPokemonList = true;
      this.length = response.count;
      console.log(this.length)
      this.dataSource = new MatTableDataSource(pokemonName);
    }, error => {
      console.log(error)
    })
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 10)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public drawerToggle(): void {
    this.messageEvent.emit(this.selection.selected[0])
  }

  handlePageEvent(event: PageEvent) {
    if (event.previousPageIndex == 1) {
      if (this.count >= 20) {
        this.count -= 20;
      }
    }
    else {
      this.count += 20;
    }
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getAllPokemon(this.count)
  }
}

