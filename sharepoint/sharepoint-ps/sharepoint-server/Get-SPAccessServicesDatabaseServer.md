---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServicesDatabaseServer
schema: 2.0.0
---

# Get-SPAccessServicesDatabaseServer

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### GetSingleDatabaseServerParamterSet
```
Get-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [<CommonParameters>]
```

### GetDatabaseServersParameterSet
```
Get-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseServer
{{Fill DatabaseServer Description}}

```yaml
Type: AccessServicesDatabaseServerPipeBind
Parameter Sets: GetSingleDatabaseServerParamterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerGroup
{{Fill DatabaseServerGroup Description}}

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: GetSingleDatabaseServerParamterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: GetDatabaseServersParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
{{Fill ServiceContext Description}}

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServiceContextPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

