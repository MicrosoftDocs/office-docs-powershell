---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-cstagtemplate
schema: 2.0.0
title: New-CsTagTemplate
---

# New-CsTagTemplate

## SYNOPSIS
Creates new tag template.

## SYNTAX
```
New-CsTagTemplate -Name <String> -Description <String> -Tags <List> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsTagTemplate cmdlet creates a new tag template made of up of tags created with [New-CsTag](New-CsTag.md). 

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES



## PARAMETERS

### -Name
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

### -Description
A description for the purpose of the tag template

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

### -Tags
The list of tags to add to the template.

```yaml
Type: List
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

[New-CsTagTag](New-CsTag.md)

[Get-CsTagTemplate](Get-CsTagTemplate.md)

[Set-CsTagTemplate](Set-CsTagTemplate.md)

[Remove-CsTagTemplate](Remove-CsTagTemplate.md)
