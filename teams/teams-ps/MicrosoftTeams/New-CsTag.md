---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-cstag
schema: 2.0.0
title: New-CsTag
---

# New-CsTag

## SYNOPSIS
Creates new tag that can be added to a TagTemplate.

## SYNTAX

```
New-CsTag -TagName <String> -CallableEntity <object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsTag cmdlet creates a new tag associated with a specific Auto Attendant callable entity. This tag must be added to a TagTemplate.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES



## PARAMETERS

### -TagName
The name of the tag

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

### -TagDetails
The full callable entity object created with the [New-CsAutoAttendantCallableEntity](new-csautoattendantcallableentity.md) cmdlet

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
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

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

[New-CsTagsTemplate](New-CsTagsTemplate.md)

[Get-CsTagsTemplate](Get-CsTagsTemplate.md)

[Set-CsTagsTemplate](Set-CsTagsTemplate.md)

[Remove-CsTagsTemplate](Remove-CsTagsTemplate.md)
