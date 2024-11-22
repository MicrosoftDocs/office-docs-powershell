---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csautoattendant
applicable: Microsoft Teams
title: Remove-CsAutoAttendant
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsAutoAttendant

## SYNOPSIS
Use the Remove-CsAutoAttendant cmdlet to delete an Auto Attendant (AA).

> [!NOTE]
> Remove any associated resource accounts with [Remove-CsOnlineApplicationInstanceAssociation](https://learn.microsoft.com/powershell/module/teams/remove-csonlineapplicationinstanceassociation) before attempting to delete the Auto Attendant (AA).

## SYNTAX

```
Remove-CsAutoAttendant -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsAutoAttendant cmdlet deletes an AA that is specified by the Identity parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
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
applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/set-csautoattendant)
