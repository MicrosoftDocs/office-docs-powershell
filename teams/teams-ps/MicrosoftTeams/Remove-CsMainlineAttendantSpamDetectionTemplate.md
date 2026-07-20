---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Remove-CsMainlineAttendantSpamDetectionTemplate
schema: 2.0.0
title: Remove-CsSharedCallHistoryTemplate
---

# Remove-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS
Deletes a Teams Phone Agent (Mainline Attendant) Spam Detection template.

## SYNTAX

```
Remove-CsMainlineAttendantSpamDetectionTemplate -Id <Guid> [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsMainlineAttendantSpamDetectionTemplate cmdlet to delete a Teams Phone Agent (Mainline Attendant) template. 

## EXAMPLES

### Example 1
```
Remove-CsMainlineAttendantSpamDetectionTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e02
```

This example deletes the Teams Phone Agent (Mainline Attendant) template with the id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e02. If no Spam Detection template exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e02, then this example generates an error.

## PARAMETERS

### -Id

The Id parameter is the unique identifier assigned to the Spam Detection template.

```yaml
Type: Guid
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

