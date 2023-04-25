---
external help file: Microsoft.TeamsCmdlets.PowerShell.Connect.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: VikneshMSFT
ms.author: vimohan
ms.reviewer: pbafna
manager: vinelap
---

# Clear-TeamsEnvironmentConfig

## SYNOPSIS
Clears environment specific configurations from local machine set by running Set-TeamsEnvironmentConfig.

## SYNTAX

```
Clear-TeamsEnvironmentConfig [<CommonParameters>]
```

## DESCRIPTION
This cmdlet clears environment specific configuaration from local machine set by running Set-TeamsEnvironmentConfig. This helps in clearing and rectifying any wrong information set in Set-TeamsEnvironmentConfig. 

## EXAMPLES
### Example 1
```powershell
PS C:\> Clear-TeamsEnvironmentConfig
```

Clears environment specific configurations from local machine.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES
Clear-TeamsEnvironmentConfig is only introduced for special clouds and administrators of public and fairfax cloud should not use this cmdlet.
## RELATED LINKS
