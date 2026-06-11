---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csbatchteamsdeployment
schema: 2.0.0
title: New-CsBatchTeamsDeployment
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
This command runs a batch deployment with the provided parameters in the CSV files and emails the status and errors (if any) to adminteams@contoso.com and adelev@contoso.com.

## PARAMETERS

### -TeamsFilePath
The path to the CSV file that defines the teams you're creating. For information about the CSV file format, see [Deploy Teams at scale for frontline workers](https://learn.microsoft.com/microsoft-365/frontline/deploy-teams-at-scale).

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
The path to the CSV file that maps the users you're adding to each team. For information about the CSV file format, see [Deploy Teams at scale for frontline workers](https://learn.microsoft.com/microsoft-365/frontline/deploy-teams-at-scale).

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
The email addresses of up to five recipients to notify about this deployment. The recipients will receive email notifications about deployment status. The email contains the orchestration ID for the batch you submitted and any errors that may have occurred.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### OrchestrationId
The ID of the operation that can be used with the Get-CsBatchTeamsDeploymentStatus cmdlet to get the status of the operation.

## NOTES

## RELATED LINKS

[Get-CsBatchTeamsDeploymentStatus](https://learn.microsoft.com/powershell/module/microsoftteams/get-csbatchteamsdeploymentstatus)
