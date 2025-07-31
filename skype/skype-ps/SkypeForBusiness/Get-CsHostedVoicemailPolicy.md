---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/get-cshostedvoicemailpolicy
schema: 2.0.0
title: Get-CsHostedVoicemailPolicy
---

# Get-CsHostedVoicemailPolicy

## SYNOPSIS
Retrieves a hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity (Default)
```
Get-CsHostedVoicemailPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsHostedVoicemailPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a policy that specifies how to route unanswered calls to a user to a hosted Exchange Unified Messaging (UM) service.

A user must be enabled for Exchange UM hosted voice mail for this policy to take effect.
You can call the Get-CsUser cmdlet and check the HostedVoiceMail property to determine whether a user is enabled for hosted voice mail.
(A value of True means the user is enabled.)


## EXAMPLES

### Example 1
```
Get-CsHostedVoicemailPolicy
```

This command returns all defined hosted voice mail policies for the Skype for Business Server 2015 implementation.

### Example 2
```
Get-CsHostedVoicemailPolicy -Identity ExRedmond
```

This command returns the policy settings for the per-user hosted voice mail policy ExRedmond.

### Example 3
```
Get-CsHostedVoicemailPolicy -Filter tag:*
```

This command returns the policy settings for all per-user hosted voice mail policies (policies beginning with the tag scope).

## PARAMETERS

### -Filter

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

This parameter allows you to do a wildcard search on the Identity of the hosted voice mail policy.
This will retrieve all instances of a hosted voice mail policy where the Identity matches the wildcard pattern specified in the Filter value.

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

The unique identifier for the hosted voice mail policy you want to retrieve.
The Identity includes the scope (in the case of global), the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as HVUserPolicy).

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

Retrieves the hosted voice mail policy from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy


## NOTES


## RELATED LINKS

[New-CsHostedVoicemailPolicy](New-CsHostedVoicemailPolicy.md)

[Remove-CsHostedVoicemailPolicy](Remove-CsHostedVoicemailPolicy.md)

[Set-CsHostedVoicemailPolicy](Set-CsHostedVoicemailPolicy.md)

[Grant-CsHostedVoicemailPolicy](Grant-CsHostedVoicemailPolicy.md)
