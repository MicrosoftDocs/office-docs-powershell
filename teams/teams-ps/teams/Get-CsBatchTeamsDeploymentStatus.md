---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsBatchTeamsDeploymentStatus
schema: 2.0.0
---

# Get-CsBatchTeamsDeploymentStatus

# test comment

## SYNOPSIS

This cmdlet is used to get the status of the batch deployment orchestration.

## SYNTAX

```
Get-CsBatchTeamsDeploymentStatus -OrchestrationId <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
After deploying teams using New-CsBatchTeamsDeployment, an admin can check the status of the job/orchestration using Get-CsBatchTeamsDeploymentStatus. 

To learn more, see [Deploy Teams at scale for frontline workers](https://learn.microsoft.com/microsoft-365/frontline/deploy-teams-at-scale).

## EXAMPLES

### EXAMPLE 1
```
Get-CsBatchTeamsDeploymentStatus -OrchestrationId "My-Orchestration-Id"
```
This command provides the status of the specified batch deployment orchestrationId.


## PARAMETERS

### OrchestrationId
This ID is generated when a batch deployment is submitted with the New-CsBatchTeamsDeployment cmdlet.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## OUTPUTS
### Status of the orchestrationId


Running: The orchestration is running.
Completed: The orchestration is completed, either succeeded, partially succeeded, or failed.


## NOTES

## RELATED LINKS

[New-CsBatchTeamsDeployment](New-CsBatchTeamsDeployment.md)
