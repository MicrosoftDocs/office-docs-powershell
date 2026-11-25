---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: colongma
ms.reviewer: colongma
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-cssharedcallhistorytemplate
schema: 2.0.0
title: Remove-CsSharedCallHistoryTemplate
---

# Remove-CsSharedCallHistoryTemplate

## SYNOPSIS

> [!CAUTION]
> This PowerShell cmdlet has been deprecated.
>
> Please use: [Remove-CsSharedCallHistoryTemplate](Remove-CsSharedCallHistoryTemplate.md)


## SYNTAX

```
Remove-CsSharedCallHistoryTemplate -Id <String> [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsSharedCallHistoryTemplate cmdlet to delete a Shared Call History template. 

## EXAMPLES

### Example 1
```
Remove-CsSharedCallHistoryTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example deletes the Shared Call History template with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Shared Call History template exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Id

The Id parameter is the unique identifier assigned to the Shared Call History template.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[New-CsSharedCallHistoryTemplate](./New-CsSharedCallHistoryTemplate.md)

[Set-CsSharedCallHistoryTemplate](./Set-CsSharedCallHistoryTemplate.md)

[Get-CsSharedCallHistoryTemplate](./Get-CsSharedCallHistoryTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)
