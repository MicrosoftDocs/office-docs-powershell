---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Get-CsHostedVoicemailPolicy
schema: 2.0.0
---

# Get-CsHostedVoicemailPolicy

## SYNOPSIS
Retrieves a hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsHostedVoicemailPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsHostedVoicemailPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsHostedVoicemailPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a policy that specifies how to route unanswered calls to a user to a hosted Exchange Unified Messaging (UM) service.

A user must be enabled for Exchange UM hosted voice mail for this policy to take effect.
You can call the Get-CsUser cmdlet and check the HostedVoiceMail property to determine whether a user is enabled for hosted voice mail.
(A value of True means the user is enabled.)


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHostedVoicemailPolicy
```

This command returns all defined hosted voice mail policies for the Skype for Business Server 2015 implementation.

### -------------------------- Example 2 --------------------------
```
Get-CsHostedVoicemailPolicy -Identity ExRedmond
```

This command returns the policy settings for the per-user hosted voice mail policy ExRedmond.

### -------------------------- Example 3 --------------------------
```
Get-CsHostedVoicemailPolicy -Filter tag:*
```

This command returns the policy settings for all per-user hosted voice mail policies (policies beginning with the tag scope).

### -------------------------- Example 4 --------------------------
```
Get-CsHostedVoicemailPolicy -Tenant "73d355dd-ce5d-4ab9-bf49-7b822c18dd98"
```

This command returns the hosted voice mail policy for the Skype for Business Online tenant with the tenant ID 73d355dd-ce5d-4ab9-bf49-7b822c18dd98.


## PARAMETERS

### -Identity
The unique identifier for the hosted voice mail policy you want to retrieve.
The Identity includes the scope (in the case of global), the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as HVUserPolicy).

```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter allows you to do a wildcard search on the Identity of the hosted voice mail policy.
This will retrieve all instances of a hosted voice mail policy where the Identity matches the wildcard pattern specified in the Filter value.

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the hosted voice mail policy from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose voicemail policy is to be retrieved.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


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
