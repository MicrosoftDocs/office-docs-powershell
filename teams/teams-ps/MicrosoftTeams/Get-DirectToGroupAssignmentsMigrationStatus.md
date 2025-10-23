---
applicable: Microsoft Teams
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version:
schema: 2.0.0
title: Get-DirectToGroupAssignmentsMigrationStatus
---

# Get-DirectToGroupAssignmentsMigrationStatus

## SYNOPSIS
As an admin, you can get the status of any direct assignments to group policy assignments migration.

## SYNTAX

```
Get-DirectToGroupAssignmentsMigrationStatus [-MigrationEventId <String>]
 [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can get the status of all the direct assignments to group policy assignments migrations completed or in progress in the tenant. Or you can provide an specific migration id to know the status of one in particular.

**This is only applicable for tenants who have activated the new features related to group policy assignment adoption.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-DirectToGroupAssignmentsMigrationStatus
```

In this example, the Get-DirectToGroupAssignmentsMigrationStatus cmdlet is used to get the status of all the direct assignments to group policy assignments migrations completed or in progress in the tenant.

### Example 2
```powershell
PS C:\> Get-DirectToGroupAssignmentsMigrationStatus -MigrationEventId 42ed6fb9-65c7-42de-abda-7492bfe2d616
```

In this example, the Get-DirectToGroupAssignmentsMigrationStatus cmdlet is used to get the status of the direct assignments to group policy assignments migration with the event id 42ed6fb9-65c7-42de-abda-7492bfe2d616.

## PARAMETERS

### -MigrationEventId
Migration event id from which want to know the status.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
