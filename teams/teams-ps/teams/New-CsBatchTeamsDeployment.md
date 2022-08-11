---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-csbatchteamsdeployment
schema: 2.0.0
---

# New-CsBatchTeamsDeployment

## SYNOPSIS

This cmdlet is used to run a batch deployment orchestration.

## SYNTAX

```
New-CsBatchTeamsDeployment -TeamsFilePath <String> -UsersFilePath <String>
 -UsersToNotify <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deploying Teams at scale enables admins to deploy up to 500 teams and add 25 users per team using one Teams PowerShell command and two CSV files. This allows admins to meet your organization's scale needs and significantly reduce deployment time. Admins can also use this solution to add and remove members from existing teams at scale. You can use this cmdlet to:
- Create teams using pre-built templates or your own custom templates.
- Add users to teams as owners or members.
- Manage teams at scale by adding or removing users from existing teams.
- Stay notified through email, including completion, status, and errors (if any). You can choose to notify up to five people about the status of each batch of teams you deploy. Team owners and members are automatically notified when they're added to a team.
## EXAMPLES

### EXAMPLE 1
```
New-CsBatchTeamsDeployment -TeamsFilePath "C:\dscale\Teams.csv" -UsersFilePath "C:\dscale\Users.csv" -UsersToNotify "adminteams@contoso.com,adelev@contoso.com"
```

## PARAMETERS

### -TeamsFilePath
The path to the teams.csv file.

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

### -UsersFilePath
The path to the users.csv file.

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

### -UsersToNotify
The tenant admin emailId to send the completion report of the batch deployment.

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

## INPUTS

## OUTPUTS
### OrchestrationId
The ID of the operation that can be used with the Get-CsBatchTeamsDeployment cmdlet to get the status of the operation.



## NOTES

## RELATED LINKS

[Get-CsBatchTeamsDeployment](Get-CsBatchTeamsDeployment.md)
