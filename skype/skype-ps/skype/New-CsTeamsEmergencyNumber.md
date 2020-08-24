---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamsemergencynumber
applicable: Skype for Business Online
title: New-CsTeamsEmergencyNumber
author: danny-levin
ms.author: dannyle
manager: roykuntz
ms.reviewer: chenc, pthota
schema: 2.0.0
---

# New-CsTeamsEmergencyNumber

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyNumber -EmergencyDialString <String> [-EmergencyDialMask <String>]
 [-OnlinePSTNUsage <String>] [-CarrierProfile <String>] [<CommonParameters>]
```

## DESCRIPTION
 This cmdlet supports to create multiple Teams emergency numbers.

## EXAMPLES

### Example 1
```powershell
PS C:>  New-CsTeamsEmergencyNumber -EmergencyDialString 711 -EmergencyDialMask 321 -OnlinePSTNUsage "US911"
```

 Create a new Teams emergency number

## PARAMETERS

### -CarrierProfile
 Microsoft internal usage only

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

### -EmergencyDialMask
 For each Teams emergency number, you can specify zero or more emergency dial masks. A dial mask is a number that you want to translate into the value of the emergency dial number value when it is dialed.

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

Required: True
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
