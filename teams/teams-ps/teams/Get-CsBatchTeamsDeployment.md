---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-csbatchteamsdeployment
schema: 2.0.0
---

# Get-CsBatchTeamsDeployment

## SYNOPSIS

This cmdlet is used to get the status of the batch deployment orchestration.

## SYNTAX

```
Get-CsBatchTeamsDeployment -OrchestrationId <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
After deploying teams using New-CsBatchTeamsDeployment, an admin can check the status of the job/orchestration using Get-CsBatchTeamsDeployment. 

To learn more, see Deploy Teams at scale for frontline workers (https://docs.microsoft.com/microsoft-365/frontline/deploy-teams-at-scale).



## EXAMPLES

### EXAMPLE 1
```
Get-CsBatchTeamsDeployment -OrchestrationId "My-Orchestration-Id"
```

## PARAMETERS

### OrchestrationId
This ID is generated when a batch deployment is submitted with New-CsBatchTeamsDeployment cmdlet.

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
###Status of the orchestrationId

Running: The orchestration is running.
Completed: The orchestration is completed, either succeeded, partially succeeded or Failed.



## NOTES

## RELATED LINKS

[New-CsBatchTeamsDeployment](New-CsBatchTeamsDeployment.md)
