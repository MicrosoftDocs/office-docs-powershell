---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant
schema: 2.0.0
title: Remove-CsAutoAttendant
---

# Remove-CsAutoAttendant

## SYNOPSIS
Use the Remove-CsAutoAttendant cmdlet to delete an Auto Attendant (AA).

## SYNTAX

```
Remove-CsAutoAttendant -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsAutoAttendant cmdlet deletes an AA that is specified by the Identity parameter.

> [!NOTE]
> Remove any associated resource accounts with [Remove-CsOnlineApplicationInstanceAssociation](remove-csonlineapplicationinstanceassociation.md) before attempting to delete the Auto Attendant (AA).

## EXAMPLES

### Example 1
```powershell
Remove-CsAutoAttendant -Identity "fa9081d6-b4f3-5c96-baec-0b00077709e5"
```

This example deletes the AA that has an identity of fa9081d6-b4f3-5c96-baec-0b00077709e5.

## PARAMETERS

### -Identity

The identity for the AA to be removed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Guid
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

### String
The Remove-CsAutoAttendant cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)
