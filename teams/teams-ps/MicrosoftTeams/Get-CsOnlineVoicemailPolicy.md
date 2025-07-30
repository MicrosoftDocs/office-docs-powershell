---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinevoicemailpolicy
schema: 2.0.0
title: Get-CsOnlineVoicemailPolicy
---

# Get-CsOnlineVoicemailPolicy

## SYNOPSIS
Use the `Get-CsOnlineVoicemailPolicy` cmdlet to get a list of all pre-configured policy instances related to Cloud Voicemail service.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineVoicemailPolicy [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineVoicemailPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves information about one or more voicemail policies that have been configured for use in your organization. Voicemail policies are used by the organization to manage Voicemail-related features such as transcription.

## EXAMPLES

### Example 1
```
Get-CsOnlineVoicemailPolicy
```

In Example 1, the Get-CsOnlineVoicemailPolicy cmdlet is called without any additional parameters; this returns a collection of all the voicemail policies configured for use in your organization.

### Example 2
```
Get-CsOnlineVoicemailPolicy -Identity TranscriptionDisabled
```

In Example 2, the Get-CsOnlineVoicemailPolicy cmdlet is used to return the per-user voicemail policy that has an Identity TranscriptionDisabled. Because identities are unique, this command will never return more than one item.

### Example 3
```
Get-CsOnlineVoicemailPolicy -Filter "tag:*"
```

Example 3 uses the Filter parameter to return all the voicemail policies that have been configured at the per-user scope. The filter value "tag:*" tells the Get-CsOnlineVoicemailPolicy cmdlet to return only those policies that have an Identity that begins with the string value "tag:".

## PARAMETERS

### -Filter
This parameter accepts a wildcard string and returns all voicemail policies with identities matching that string. For example, a Filter value of Tag:* will return all preconfigured voicemail policy instances (excluding forest default "Global") available to use by the tenant admins.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy. If this parameter is omitted, all voicemail policies available for use are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.OnlineVoicemail.OnlineVoicemailPolicy

## NOTES

## RELATED LINKS
[Set-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoicemailpolicy)

[New-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/new-csonlinevoicemailpolicy)

[Remove-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoicemailpolicy)

[Grant-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlinevoicemailpolicy)
