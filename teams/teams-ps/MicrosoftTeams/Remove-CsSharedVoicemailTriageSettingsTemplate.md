---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Remove-CsSharedVoicemailTriageSettingsTemplate
schema: 2.0.0
title: Remove-CsSharedVoicemailTriageSettingsTemplate
---

# Remove-CsSharedVoicemailTriageSettingsTemplate

## SYNOPSIS
Deletes a Shared Voicemail Triage template.

## SYNTAX

```
Remove-CsSharedVoicemailTriageSettingsTemplate -Id <String> [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsSharedVoicemailTriageSettingsTemplate to delete a Shared Voicemail Triage template. 

## EXAMPLES

### Example 1
```
Remove-CsSharedVoicemailTriageSettingsTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example deletes the Shared Voicemail Triage template with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Shared Voicemail Triage template exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Id

The Id parameter is the unique identifier assigned to the Shared Voicemail Triage template.

```yaml
Type: System.String
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

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsSharedVoicemailTriageSettingsTemplate](./New-CsSharedVoicemailTriageSettingsTemplate.md)

[Get-CsSharedVoicemailTriageSettingsTemplate](./Get-CsSharedVoicemailTriageSettingsTemplate.md)

[Set-CsSharedVoicemailTriageSettingsTemplate](./Set-CsSharedVoicemailTriageSettingsTemplate.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)

