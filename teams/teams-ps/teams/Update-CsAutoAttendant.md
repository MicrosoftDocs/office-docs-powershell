---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/update-csautoattendant
applicable: Microsoft Teams
title: Update-CsAutoAttendant
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Update-CsAutoAttendant

## SYNOPSIS
Use Update-CsAutoAttendant cmdlet to force an update of resources associated with an Auto Attendant (AA) provisioning.

## SYNTAX

```powershell
Update-CsAutoAttendant -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet provides a way to update the resources associated with an auto attendant configured for use in your organization. Currently, it repairs the Dial-by-Name recognition status of an auto attendant.

Note: This cmdlet only triggers the refresh of auto attendant resources. It does not wait until all the resources have been refreshed. The last completed status of auto attendant can be retrieved using [`Get-CsAutoAttendantStatus`](https://learn.microsoft.com/powershell/module/teams/get-csautoattendantstatus) cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Update-CsAutoAttendant -Identity "6abea1cd-904b-520b-be96-1092cc096432"
```

In Example 1, the Update-CsAutoAttendant cmdlet is used to update all resources of an auto attendant with Identity of 6abea1cd-904b-520b-be96-1092cc096432.

## PARAMETERS

### -Identity
The identity for the AA whose resources are to be updated.

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

### System.String
The Update-CsAutoAttendant cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/get-csautoattendant)

[Get-CsAutoAttendantStatus](https://learn.microsoft.com/powershell/module/teams/get-csautoattendantstatus)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/remove-csautoattendant)
