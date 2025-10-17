import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModules } from 'app/material-imports';


interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
  description: string;
}

interface RecentActivity {
  id: number;
  type: string;
  description: string;
  time: string;
  user: string;
  icon: string;
  color: string;
}

interface Alert {
  type: string;
  title: string;
  description: string;
  count: number;
  icon: string;
  color: string;
  action: string;
}


@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, TranslocoModule, MaterialModules],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent implements OnInit {

  selectedView: string = 'overview';
  Math = Math;

  // Cartes de statistiques principales
  statCards: StatCard[] = [
    {
      title: 'Effectif Total',
      value: '1,248',
      change: 2.5,
      icon: 'heroicons_solid:users',
      color: 'blue',
      description: 'Employés actifs'
    },
    {
      title: 'Nouvelles Embauches',
      value: '24',
      change: 12.3,
      icon: 'heroicons_solid:user-plus',
      color: 'green',
      description: 'Ce mois-ci'
    },
    {
      title: 'Promotions',
      value: '18',
      change: 8.7,
      icon: 'heroicons_solid:arrow-trending-up',
      color: 'purple',
      description: 'Ce trimestre'
    },
    {
      title: 'Formations en Cours',
      value: '15',
      change: 5.2,
      icon: 'heroicons_solid:academic-cap',
      color: 'orange',
      description: 'Sessions actives'
    }
  ];

  // Activités récentes
  recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'Nouvelle embauche',
      description: 'Moussa Diarra a rejoint le département Fiscal',
      time: 'Il y a 2 heures',
      user: 'RH Admin',
      icon: 'heroicons_solid:user-plus',
      color: 'green'
    },
    {
      id: 2,
      type: 'Promotion',
      description: 'Fatoumata Keita promue au grade de Contrôleur Principal',
      time: 'Il y a 5 heures',
      user: 'RH Admin',
      icon: 'heroicons_solid:arrow-trending-up',
      color: 'purple'
    },
    {
      id: 3,
      type: 'Formation',
      description: 'Session "Procédures Douanières" planifiée',
      time: 'Il y a 1 jour',
      user: 'Formation RH',
      icon: 'heroicons_solid:academic-cap',
      color: 'orange'
    },
    {
      id: 4,
      type: 'Affectation',
      description: 'Abdoulaye Traoré affecté à la Direction de Kayes',
      time: 'Il y a 2 jours',
      user: 'RH Admin',
      icon: 'heroicons_solid:map-pin',
      color: 'blue'
    }
  ];

  // Alertes et notifications
  alerts: Alert[] = [
    {
      type: 'warning',
      title: 'Contrats à renouveler',
      description: 'Contrats arrivant à expiration ce mois',
      count: 5,
      icon: 'heroicons_solid:exclamation-triangle',
      color: 'amber',
      action: 'Voir'
    },
    {
      type: 'info',
      title: 'Formations à planifier',
      description: 'Sessions nécessitant une planification',
      count: 3,
      icon: 'heroicons_solid:calendar',
      color: 'blue',
      action: 'Planifier'
    },
    {
      type: 'success',
      title: 'Anniversaires',
      description: 'Employés fêtant leur anniversaire',
      count: 12,
      icon: 'heroicons_solid:cake',
      color: 'green',
      action: 'Voir'
    },
    {
      type: 'error',
      title: 'Documents en attente',
      description: 'Documents nécessitant validation',
      count: 8,
      icon: 'heroicons_solid:document-text',
      color: 'red',
      action: 'Traiter'
    }
  ];

  // Données pour les graphiques
  personnelDistributionChart: any = {
    series: [35, 25, 20, 15, 5],
    chart: {
      type: 'donut',
      height: 320
    },
    labels: ['Contrôleurs', 'Inspecteurs', 'Agents', 'Administratifs', 'Techniciens'],
    colors: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    }
  };

  performanceChart: any = {
    series: [{
      name: 'Performance RH',
      data: [65, 75, 70, 80, 85, 90, 95]
    }],
    chart: {
      type: 'area',
      height: 280,
      toolbar: {
        show: false
      }
    },
    colors: ['#3b82f6'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul']
    },
    yaxis: {
      max: 100
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    }
  };

  recruitmentChart: any = {
    series: [
      {
        name: 'Candidats reçus',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: 'Embauches',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }
    ],
    chart: {
      height: 280,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: ['#8b5cf6', '#10b981'],
    stroke: {
      width: [3, 3],
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    },
    grid: {
      borderColor: '#e7e7e7'
    }
  };

  constructor() {}

  ngOnInit(): void {}

  getCardColorClass(color: string): string {
    const colorClasses: { [key: string]: string } = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colorClasses[color] || 'bg-gray-500';
  }

  getChangeColor(change: number): string {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  }

  getChangeIcon(change: number): string {
    return change >= 0 ? 'heroicons_solid:arrow-trending-up' : 'heroicons_solid:arrow-trending-down';
  }

  getAlertColorClass(alert: Alert): string {
    const colorClasses: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      amber: 'bg-amber-50 border-amber-200 text-amber-800',
      red: 'bg-red-50 border-red-200 text-red-800'
    };
    return colorClasses[alert.color] || 'bg-gray-50 border-gray-200';
  }

  getAlertIconColor(alert: Alert): string {
    const colorClasses: { [key: string]: string } = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      amber: 'text-amber-600',
      red: 'text-red-600'
    };
    return colorClasses[alert.color] || 'text-gray-600';
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }


}
