export interface Resource {
    Id: number;
    FirstName: string;
    LastName: string;
    Rate?: number;
    ManagerId?: number;
    Department?: string;
    ResourceType?: String;
    HireDate?: Date;
    EndDate?: Date;
    Comment?: String;
}
