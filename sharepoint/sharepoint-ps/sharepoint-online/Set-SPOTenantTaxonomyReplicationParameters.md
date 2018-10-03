---
external help file: 
applicable: SharePoint Online
title: Set-SPOTenantTaxonomyReplicationParameters
schema: 2.0.0
---

# Set-SPOTenantTaxonomyReplicationParameters

## SYNOPSIS
Select groups for replication


## SYNTAX

### ReplicateAllGroups
```powershell
Set-SPOTenantTaxonomyReplicationParameters [-ReplicateAllGroups] [<CommonParameters>]
```

### ReplicateSelectedGroups
```powershell
Set-SPOTenantTaxonomyReplicationParameters -ReplicatedGroups <String[]> [<CommonParameters>]
```

## DESCRIPTION
Before you run the cmdlets, please use “Connect-SPOService” to connect to SharePoint Online first.
By default, all global groups except system/search/people/sitecollection in primary location will be replicated to
satellite. 


## EXAMPLES

### EXAMPLE 1
```powershell
Set-SPOTenantTaxonomyReplicationParameters -ReplicatedGroups "group1","group2"
```
Tenant admin can use this cmdlet to select some groups only for replicating to overwrite default settings. 

### EXAMPLE 2
```powershell
Set-SPOTenantTaxonomyReplicationParameters –ReplicateAllGroups
```
Tenant admin can also reset to replicate all the groups.



## PARAMETERS

### -ReplicateAllGroups
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: ReplicateAllGroups
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicatedGroups
PARAMVALUE: String[]


```yaml
Type: String[]
Parameter Sets: ReplicateSelectedGroups
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS

[Introduction to the SharePoint Online management shell](https://support.office.com/en-us/article/introduction-to-the-sharepoint-online-management-shell-c16941c3-19b4-4710-8056-34c034493429)

[SharePoint Online Management Shell Download](https://www.microsoft.com/en-US/download/details.aspx?id=35588)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOTenantTaxonomyReplicationParameters](Get-SPOTenantTaxonomyReplicationParameters.md)

[Get-SPOTenantContentTypeReplicationParameters](Get-SPOTenantContentTypeReplicationParameters.md)

[Set-SPOTenantContentTypeReplicationParameters](Set-SPOTenantContentTypeReplicationParameters.md)