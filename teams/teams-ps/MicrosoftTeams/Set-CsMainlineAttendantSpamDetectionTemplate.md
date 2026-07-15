---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Set-CsMainlineAttendantSpamDetectionTemplate
schema: 2.0.0
title: Set-CsMainlineAttendantSpamDetectionTemplate
---

# Set-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS
Use the Set-CsMainlineAttendantSpamDetectionTemplate cmdlet to change a Spam Detection template.

## SYNTAX

```
Set-CsMainlineAttendantSpamDetectionTemplate -Instance <instance> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsMainlineAttendantSpamDetectionTemplate cmdlet to change a Spam Detection template.

## EXAMPLES

### Example 1
```
$SpamDetection = Get-CsMainlineAttendantSpamDetectionTemplate -Id 66f0dc32-d344-4bb1-b524-027d4635515d
$SpamDetection.Action = "TransferCallToOperator"
Set-CsMainlineAttendantSpamDetectionTemplate -Instance $SpamDetection
```

This example sets the Action value in the Spam Detection Template with the Id `66f0dc32-d344-4bb1-b524-027d4635515d`

## PARAMETERS

### -Instance

The instance of the shared call history template to change.

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

