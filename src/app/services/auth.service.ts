import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IDepartments } from '../components/home/IDepartments';
import { IProjects } from '../components/project/IProjects';
import { ITeams } from '../components/project/ITeams';
import { IEmployees } from '../components/project-details/teams-emp/IEmployees';
import { IMaterials } from '../components/project-details/materials/IMaterials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  login(data): Observable<any> {
    return this.http.post(`${baseURL}/api/login`, data)
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  //department
  getDep(): Observable<IDepartments[]>{
    return this.http.get<IDepartments[]>(`${baseURL}/api/departments`)
  }
  postDep(data): Observable<any> {
    return this.http.post(`${baseURL}/api/departments`, data);
  }

  //project
  getProjectsByDepId(id): Observable<IProjects[]>{
    return this.http.get<IProjects[]>(`${baseURL}/api/depart/${id}/Allproject`)
  }
  getProjects(): Observable<IProjects[]>{
    return this.http.get<IProjects[]>(`${baseURL}/api/projects`)
  }


  postProject(data): Observable<any> {
    return this.http.post(`${baseURL}/api/projects`, data);
  }
  updateProject(data:any, id:number){
    return this.http.put<any>(`${baseURL}/api/project/${id}`, data)
  }
  deleteProject(id:number){
    return this.http.delete<any>(`${baseURL}/api/project/${id}`)
  }

  allTeams(){
    return this.http.get<ITeams[]>(`${baseURL}/api/teamsAction`)
  }
//post new team
  postNewTeam(data): Observable<any> {
    return this.http.post(`${baseURL}/api/teams`, data);
  }
  //employee and teamID
  getTeamByProjetId(id_pro): Observable<ITeams[]>{
    return this.http.get<ITeams[]>(`${baseURL}/api/projet/${id_pro}/team`);
  }
  getEmployByTeamId_TeamByProjId(id_pro,id_team): Observable<IEmployees[]>{
    return this.http.get<IEmployees[]>(`${baseURL}/api/projet/${id_pro}/team/${id_team}/Allemploy`);
  }
  // empl
  postEmployByTeamId(data): Observable<any> {
    return this.http.post(`${baseURL}/api/employees`, data);
  }
  updateEmp(data:any, id:number){
    return this.http.put<any>(`${baseURL}/api/employee/${id}`, data)
  }
  deleteEmpl(id:number){
    return this.http.delete<any>(`${baseURL}/api/employee/${id}`)
  }

  //materials crud:
  getMaterialByProjId(id): Observable<IMaterials[]>{
    return this.http.get<IMaterials[]>(`${baseURL}/api/projet/${id}/Allmateriel`)
  }
  postNewMaterial(data): Observable<any> {
    return this.http.post(`${baseURL}/api/materials`, data);
  }
  updateMaterial(data:any, id:number){
    return this.http.put<any>(`${baseURL}/api/material/${id}`, data)
  }
  deleteMaterial(id:number){
    return this.http.delete<any>(`${baseURL}/api/material/${id}`)
  }


}
