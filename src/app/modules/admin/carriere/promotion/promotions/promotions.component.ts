import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from 'app/material-imports';
import { CarriereService } from 'app/modules/admin/services/carriere/carriere.service';
import { MatDialog } from '@angular/material/dialog';
import { Promotion } from 'app/modules/admin/models/carriere.model';
import { ProposerPromotionsComponent } from '../proposer-promotions/proposer-promotions.component';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule, MaterialModules],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent implements OnInit {

  private carrieresService = inject(CarriereService);
  private dialog = inject(MatDialog);

  promotions: Promotion[] = [];
  displayedColumns: string[] = ['employe', 'ancienGrade', 'nouveauGrade', 'augmentation', 'datePromotion', 'statut', 'actions'];

  loading = false;

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.loading = true;
    this.carrieresService.getPromotions().subscribe({
      next: (promotions) => {
        this.promotions = promotions;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des promotions:', error);
        this.loading = false;
      }
    });
  }

  ouvrirPropositionPromotion(): void {
    const dialogRef = this.dialog.open(ProposerPromotionsComponent, {
      width: '600px',
      height: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPromotions();
      }
    });
  }

  validerPromotion(promotion: Promotion): void {
    this.carrieresService.modifierStatutPromotion(promotion.id, 'VALIDEE').subscribe({
      next: () => {
        this.loadPromotions();
      },
      error: (error) => {
        console.error('Erreur lors de la validation:', error);
      }
    });
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'VALIDEE': return 'bg-green-100 text-green-800';
      case 'PROPOSEE': return 'bg-yellow-100 text-yellow-800';
      case 'ANNULEE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('fr-ML', {
      style: 'currency',
      currency: 'XOF'
    }).format(amount);
  }
}
