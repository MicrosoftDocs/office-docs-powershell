---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csmainlineattendantquestionanswerflow
schema: 2.0.0
title: New-CsMainlineAttendantQuestionAnswerFlow
---

# New-CsMainlineAttendantQuestionAnswerFlow

## SYNOPSIS
Creates new Mainline Attendant question and answer (FAQ) flow

## SYNTAX

```
New-CsMainlineAttendantQuestionAnswerFlow -Name <String> -Description <String>  -ApiAuthenticationType <Basic | ApiKey | BearerTokenStatic | BearerTokenDynamic> -KnowledgeBase <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsMainlineAttendantQuestionAnswerFlow cmdlet creates a question and answer connection that can be used with Mainline Attendant

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES


## PARAMETERS

### -Name
The name of the question and answer flow

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
The description for the question and answer flow

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

###  -ApiAuthenticationType
The method of authentication used by the API

Supported values: Basic | ApiKey | BearerTokenStatic | BearerTokenDynamic

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

###  -KnowledgeBase
The knowledge base definition

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

[Get-CsMainlineAttendantQuestionAnswerFlow](https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantquestionanswerflow)

[Set-CsMainlineAttendantQuestionAnswerFlow](https://learn.microsoft.com/powershell/module/microsoftteams/set-csmainlineattendantquestionanswerflow)

[Remove-CsMainlineAttendantQuestionAnswerFlow](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csmainlineattendantquestionanswerflow)
