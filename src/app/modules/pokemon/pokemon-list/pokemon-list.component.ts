import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListModel, PokemonNameModel } from 'src/app/models/pokemon-list.model';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { SelectionModel } from '@angular/cdk/collections';

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

  constructor(private pokemonListService: PokemonListService) {
    this.getAllPokemon()
  }

  public getAllPokemon() {
    this.pokemonListService.getAllPokemon().subscribe(response => {
      let pokemonName = PokemonListModel.getPokemonNames(response)
      this.dataSource = new MatTableDataSource(pokemonName);
    }, error => {
      console.log(error)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}

