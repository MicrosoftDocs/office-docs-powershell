---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Migrate-SPDatabase

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Migrate-SPDatabase [-Identity] <SPDatabasePipeBind> [-DestinationDatabase] <SPContentDatabasePipeBind>
 [-SiteSubscription] <SPSiteSubscriptionPipeBind> [-ServiceType] <ServiceExtensionType> [-Overwrite]
 [-UseLinkedSqlServer] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Migrate-SPDatabase [-Identity] <SPDatabasePipeBind> [-SiteCollection] <SPSitePipeBind>
 [-ServiceType] <ServiceExtensionType> [-Overwrite] [-UseLinkedSqlServer]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DestinationDatabase
{{Fill DestinationDatabase Description}}

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Overwrite
{{Fill Overwrite Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: 4
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceType
{{Fill ServiceType Description}}

```yaml
Type: ServiceExtensionType
Parameter Sets: (All)
Aliases: 
Accepted values: DefaultDatabase, Project, UserProfile, SiteSubscription, BDC, Securityobjects, Taxonomy, AppManagement, All

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
{{Fill SiteCollection Description}}

```yaml
Type: SPSitePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
{{Fill SiteSubscription Description}}

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLinkedSqlServer
{{Fill UseLinkedSqlServer Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: 5
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

