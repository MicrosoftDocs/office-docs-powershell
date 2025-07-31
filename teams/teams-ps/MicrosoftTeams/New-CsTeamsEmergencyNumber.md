---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc, pthota
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencynumber
schema: 2.0.0
title: New-CsTeamsEmergencyNumber
---

# New-CsTeamsEmergencyNumber

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyNumber [-EmergencyDialString <String>] [-EmergencyDialMask <String>]
 [-OnlinePSTNUsage <String>] [<CommonParameters>]
```

## DESCRIPTION
 This cmdlet supports creating multiple Teams emergency numbers. Used with TeamsEmergencyCallRoutingPolicy and only relevant for Direct Routing.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsEmergencyNumber -EmergencyDialString 911 -EmergencyDialMask 933 -OnlinePSTNUsage "US911"
```

 Create a new Teams emergency number

### Example 2
```powershell
PS C:\> New-CsTeamsEmergencyNumber -EmergencyDialString "112" -EmergencyDialMask "117;897" -OnlinePSTNUsage "EU112"
```

Create a new Teams emergency number with multiple emergency dial masks.

## PARAMETERS

### -EmergencyDialMask
 For each Teams emergency number, you can specify zero or more emergency dial masks. A dial mask is a number that you want to translate into the value of the emergency dial number value when it is dialed. Dial mask must be list of numbers separated by semicolon. Each number string must be made of the digits 0 through 9 and can be from 1 to 10 digits in length.

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

### -EmergencyDialString
 Specifies the emergency phone number

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

### -OnlinePSTNUsage
 Specify the online public switched telephone network (PSTN) usage

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallroutingpolicy)

[New-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallroutingpolicy)
