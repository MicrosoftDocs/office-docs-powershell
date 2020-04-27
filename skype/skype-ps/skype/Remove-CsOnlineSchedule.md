---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-csonlineschedule
applicable: Skype for Business Online
title: Remove-CsOnlineSchedule
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Remove-CsOnlineSchedule

## SYNOPSIS
Use the Remove-CsOnlineSchedule cmdlet to remove a schedule.

## SYNTAX
```
Remove-CsOnlineSchedule -Id <String> [-Tenant <Guid>] [-CommonParameters]
```

## DESCRIPTION
The Remove-CsOnlineSchedule cmdlet deletes a schedule that is specified by using the Id parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOnlineSchedule -Id "fa9081d6-b4f3-5c96-baec-0b00077709e5"
```

This example deletes the schedule that has a Id of fa9081d6-b4f3-5c96-baec-0b00077709e5.


## PARAMETERS

### -Id
The Id for the schedule to be removed.


```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### System.String
The Remove-CsOnlineSchedule cmdlet accepts a string as the Id parameter.


## OUTPUTS

### System.Void


## NOTES

## RELATED LINKS

[New-CsOnlineSchedule](New-CsOnlineSchedule.md)

[Set-CsOnlineSchedule](Set-CsOnlineSchedule.md)
