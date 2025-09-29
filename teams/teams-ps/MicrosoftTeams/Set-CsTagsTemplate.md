---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cstagstemplate
schema: 2.0.0
title: Set-CsTagsTemplate
---

# Set-CsTagsTemplate

## SYNOPSIS
Changes an existing Tag template.

## SYNTAX
```
Set-CsTagsTemplate -Instance <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsTagTemplate cmdlet changes and existing Tag template.
Delete this line please.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES



## PARAMETERS

### -Instance
The Instance parameter is the object reference to the Tag template to be modified.

You can retrieve an object reference to an existing Tag template by using the [Get-CsTagsTemplate](Get-CsTagsTemplate.md) cmdlet and assigning the returned value to a variable.

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

[Remove-CsTagsTemplate](Remove-CsTagsTemplate.md)

[New-CsTag](New-CsTag.md)
