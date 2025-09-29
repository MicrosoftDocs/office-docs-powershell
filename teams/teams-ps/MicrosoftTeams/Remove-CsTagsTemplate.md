---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-cstagstemplate
schema: 2.0.0
title: Remove-CsTagsTemplate
---

# Remove-CsTagsTemplate

## SYNOPSIS
Deletes a Tag templates from the tenant.

## SYNTAX
```
Remove-CsTagsTemplate -Id <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsTagsTemplate cmdlet deletes a Tag template from the tenant.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES



## PARAMETERS

### -Id
The unique identifier for the Tag template. This can be retrieved using the [Get-CsTagsTemplate](Get-CsTagsTemplate.md) cmdlet.

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

[New-CsTag](New-CsTag.md)
