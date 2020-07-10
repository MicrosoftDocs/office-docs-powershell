---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinevoicemailpolicy
applicable: Skype for Business Online
title: Get-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineVoicemailPolicy

## SYNOPSIS
Use the `Get-CsOnlineVoicemailPolicy` cmdlet to get a list of all pre-configured policy instances for Voicemail service.

## SYNTAX

```
Get-CsOnlineVoicemailPolicy [-LocalStore] [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-Filter <String>]
[<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves information about all the voicemail policies that have been configured for use in your organization. Voicemail policies are used by the organization to manage Voicemail-related features such as transcription.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineVoicemailPolicy
```

In Example 1, the Get-CsOnlineVoicemailPolicy cmdlet is called without any additional parameters; this returns a collection of all the voicemail policies configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineVoicemailPolicy -Identity TranscriptionDisabled
```

In Example 2, the Get-CsOnlineVoicemailPolicy cmdlet is used to return the per-user voicemail policy that has an Identity TranscriptionDisabled. Because identities are unique, this command will never return more than one item.

### -------------------------- Example 3 --------------------------
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy. If this parameter is omitted, all voicemail policies available for use are returned.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose voicemail policy is to be retrieved. For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" You can return the tenant ID for each of your tenants by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.OnlineVoicemail.OnlineVoicemailPolicy


## NOTES


## RELATED LINKS
[Set-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoicemailpolicy?view=skype-ps)

[New-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/new-csonlinevoicemailpolicy?view=skype-ps)

[Remove-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csonlinevoicemailpolicy?view=skype-ps)

[Grant-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csonlinevoicemailpolicy?view=skype-ps)
