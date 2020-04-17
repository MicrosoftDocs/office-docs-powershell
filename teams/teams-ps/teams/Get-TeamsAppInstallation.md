---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-teamsappinstallation
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-TeamsAppInstallation

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### TeamScope (Default)
```
Get-TeamsAppInstallation -TeamId <String> [-AppInstallationId <String>] [-AppId <String>] [<CommonParameters>]
```

### UserScope
```
Get-TeamsAppInstallation -UserId <String> [-AppInstallationId <String>] [-AppId <String>] [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AppId
{{ Fill AppId Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AppInstallationId
{{ Fill AppInstallationId Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -TeamId
{{ Fill TeamId Description }}

```yaml
Type: String
Parameter Sets: TeamScope
Aliases: GroupId

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UserId
{{ Fill UserId Description }}

```yaml
Type: String
Parameter Sets: UserScope
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
