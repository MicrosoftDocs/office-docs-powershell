---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/get-csvoicepolicy
schema: 2.0.0
title: Get-CsVoicePolicy
---

# Get-CsVoicePolicy

## SYNOPSIS
Returns information about one or more voice policies configured for your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity (Default)
```
Get-CsVoicePolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoicePolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves voice policy information.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
Use this cmdlet to retrieve the settings that enable and disable many of these features.



## EXAMPLES


### Example 1
```
Get-CsVoicePolicy
```

This example displays all the voice policies that have been defined for an organization along with the settings for each.



### Example 2
```
Get-CsVoicePolicy -Identity UserPolicy1
```

This example uses the Identity parameter to retrieve the voice policy settings for the per-user policy named UserPolicy1.


### Example 3
```
Get-CsVoicePolicy -Filter tag*
```

This example uses the Filter parameter to retrieve all the voice policy settings that can be assigned to users.
All per-user voice policies have an Identity in the format tag:\<UserVoicePolicy\>, so we filter on tag  to retrieve all user voice policies.



## PARAMETERS

### -Filter

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

This parameter accepts a wildcard string and returns all voice policies with identities matching that string.
For example, a Filter value of tag:* will return all voice policies defined at the per-user level.



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A unique identifier specifying the scope and, in some cases the name, of the policy.
If this parameter is omitted, all voice policies for the organization are returned.



```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Retrieves the voice policy from the local replica of the Central Management store, rather than the Central Management store itself.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Office 365 tenant account whose voice policy is to be retrieved.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy
This cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.

## NOTES

## RELATED LINKS

[New-CsVoicePolicy](New-CsVoicePolicy.md)

[Remove-CsVoicePolicy](Remove-CsVoicePolicy.md)

[Set-CsVoicePolicy](Set-CsVoicePolicy.md)

[Grant-CsVoicePolicy](Grant-CsVoicePolicy.md)

[Test-CsVoicePolicy](Test-CsVoicePolicy.md)
