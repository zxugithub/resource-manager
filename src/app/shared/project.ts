export interface Project {
    Id: number;
    Name: string;
    Description?: string;
    TotalBudget?: number;
    StartDate?: Date;
    EndDate?: Date;
    RemainingBudget?: number;
    MsName?: string;
    MsNumber?: number;
    Portfolio?: string;
    Status?: string;
    Comment?: string; 
}
