---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csautoattendant
applicable: Microsoft Teams
title: Get-CsAutoAttendant
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsAutoAttendant

## SYNOPSIS
Use the Get-CsAutoAttendant cmdlet to get information about your Auto Attendants (AA).

## SYNTAX

```
Get-CsAutoAttendant [-Identity <String>] [-First <UInt32>] [-Skip <UInt32>] [-NameFilter <String>] [-SortBy <String>] [-Descending] [-IncludeStatus] [-ExcludeContent] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsAutoAttendant cmdlet returns information about the AAs in your organization.

## EXAMPLES

### Example 1
```powershell
Get-CsAutoAttendant
```

This example gets all AAs in the organization.

### Example 2
```powershell
Get-CsAutoAttendant -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093"

# Id                       : f7a821dc-2d69-5ae8-8525-bcb4a4556093
# TenantId                 : 977c9d5b-2dae-5d82-aada-628bc1c14213
# Name                     : Main Auto Attendant
# LanguageId               : en-US
# VoiceId                  : Female
# DefaultCallFlow          : Default Call Flow
# Operator                 :
# TimeZoneId               : Pacific Standard Time
# VoiceResponseEnabled     : False
# CallFlows                :
# Schedules                :
# CallHandlingAssociations :
# Status                   :
# DialByNameResourceId     :
# DirectoryLookupScope     :
# ApplicationInstances     : {fa2f17ec-ebd5-43f8-81ac-959c245620fa, 56421bbe-5649-4208-a60c-24dbeded6f18, c7af9c3c-ae40-455d-a37c-aeec771e623d}
```

This example gets the AA that has the identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### Example 3
```
Get-CsAutoAttendant -First 10
```

This example gets the first ten auto attendants configured for use in the organization.

### Example 4
```
Get-CsAutoAttendant -Skip 5 -First 10
```

This example skips initial 5 auto attendants and gets the next 10 AAs configured in the organization.

## PARAMETERS

### -Identity
The identity for the AA to be retrieved. If this parameter is not specified, then all created AAs in the organization are returned.
If you specify this parameter, you can't specify the other parameters.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -First
The First parameter indicates the maximum number of auto attendants to retrieve as the result. It is intended to be used for pagination purposes.

```yaml
Type: System.UInt32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
The Skip parameter indicates the number of initial auto attendants to skip in the result. It is intended to be used for pagination purposes.

```yaml
Type: System.UInt32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameFilter
If specified, only auto attendants whose names match that value would be returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
If specified, the retrieved auto attendants would be sorted by the specified property.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descending
If specified, the retrieved auto attendants would be sorted in descending order.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeStatus
If specified, the status records for each auto attendant in the result set are also retrieved.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeContent
If specified, only auto attendants' names, identities and associated application instances will be retrieved.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
The Get-CsAutoAttendant cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[Get-CsAutoAttendantStatus](https://learn.microsoft.com/powershell/module/teams/get-csautoattendantstatus)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/new-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/remove-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/set-csautoattendant)

[Update-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/update-csautoattendant)
