---
author: VikneshMSFT
external help file: Microsoft.TeamsCmdlets.PowerShell.Connect.dll-Help.xml
Locale: en-US
manager: vinelap
Module Name: MicrosoftTeams
ms.author: vimohan
ms.reviewer: pbafna
online version: https://learn.microsoft.com/powershell/module/microsoftteams/clear-teamsenvironmentconfig
schema: 2.0.0
title: Clear-TeamsEnvironmentConfig
---

# Clear-TeamsEnvironmentConfig

## SYNOPSIS
Clears environment-specific configurations from the local machine set by running Set-TeamsEnvironmentConfig.

## SYNTAX

```
Clear-TeamsEnvironmentConfig [<CommonParameters>]
```

## DESCRIPTION
This cmdlet clears environment-specific configurations from the local machine set by running Set-TeamsEnvironmentConfig. This helps in clearing and rectifying any wrong information set in Set-TeamsEnvironmentConfig.

## EXAMPLES

### Example 1
```powershell
PS C:\> Clear-TeamsEnvironmentConfig
```

Clears environment-specific configurations from the local machine set by running Set-TeamsEnvironmentConfig.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

We do not recommend using Clear-TeamsEnvironmentConfig in Commercial, GCC, GCC High, or DoD environments. This cmdlet is available in Microsoft Teams PowerShell module from version 5.2.0-GA.

## RELATED LINKS
