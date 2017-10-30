---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsHostedVoicemailPolicy
schema: 2.0.0
---

# Set-CsHostedVoicemailPolicy

## SYNOPSIS
Modifies a hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsHostedVoicemailPolicy [[-Identity] <XdsIdentity>] [-Description <String>] [-Destination <String>]
 [-Organization <String>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsHostedVoicemailPolicy [-Instance <PSObject>] [-Description <String>] [-Destination <String>]
 [-Organization <String>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies a policy that configures a user account enabled for Skype for Business Server to use an Exchange Unified Messaging (UM) hosted voice mail service.
The policy determines how to route unanswered calls to the user to a hosted Exchange UM service.

A user must be enabled for Exchange UM hosted voice mail for this policy to take effect.
You can call the `Get-CsUser` cmdlet and check the HostedVoiceMail property to determine whether a user is enabled for hosted voice mail.
(A value of True means the user is enabled.)


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsHostedVoicemailPolicy -Identity ExRedmond -Destination ExUM.contoso.com
```

This command modifies the Destination property of a hosted voice mail policy named ExRedmond.
It sets the Exchange UM destination for this policy to be at FQDN ExUM.contoso.com.


### -------------------------- Example 2 --------------------------
```
$a = (Get-CsHostedVoicemailPolicy -Identity ExRedmond).Organization

$a += ",corp3.litwareinc.com"

Set-CsHostedVoicemailPolicy -Identity ExRedmond -Organization $a
```

This command adds an Exchange tenant to the comma-separated list of tenants (organizations) for the policy ExRedmond.
The first line calls the `Get-CsHostedVoicemailPolicy` cmdlet to retrieve the policy with the Identity ExRedmond.
This cmdlet call is in parentheses because we need to first retrieve this policy.
We then use "dot notation" to retrieve the Organization property of the policy.
We save the returned string in the variable $a.
The next line uses the += operator to append the assigned string (,corp3.litwareinc.com) to the end of the string stored in variable $a.
(Note the comma in the assigned string.
Organization is a comma-separated list, so if there's already a value in the list any additional values need to be preceded by a comma.) Finally, in the last line we call the `Set-CsHostedVoicemailPolicy` cmdlet and assign the new Organization string by passing the variable $a to the parameter Organization.


### -------------------------- Example 3 --------------------------
```
Set-CsHostedVoicemailPolicy -Tenant "73d355dd-ce5d-4ab9-bf49-7b822c18dd98" -Destination "ExUM.contoso.com"
```

The command shown in Example 3 modifies the Destination property of the hosted voicemail policy assigned to the Skype for Business Online tenant with the tenant ID 73d355dd-ce5d-4ab9-bf49-7b822c18dd98.


## PARAMETERS

### -Identity
A unique identifier for the hosted voice mail policy you want to modify.
This identifier includes the scope (in the case of global), the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as HVUserPolicy).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
The object must be of type HostedVoicemailPolicy and can be retrieved by calling the `Get-CsHostedVoicemailPolicy` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
A friendly description of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Destination
The value assigned to this parameter is the fully qualified domain name (FQDN) of the hosted Exchange UM service.
Note that the chosen destination must be trusted for routing.

If you attempt to enable a user for hosted voice mail and the user's assigned policy does not have a Destination value, the enable will fail.

This value must be 255 characters or less and in a format matching the regular expression string ^\[a-zA-Z0-9\-_\]+(\.\[a-zA-Z0-9\-_\]+){0,}$.
This just means it should be in the form of an FQDN, such as server.litwareinc.com.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter contains a comma-separated list of the Exchange tenants that contain Skype for Business Server users.
Each tenant must be specified as an FQDN of the tenant on the hosted Exchange Service.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Server 2015 tenant account for which hosted voicemail policy being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy object.
Accepts pipelined input of hosted voice mail policy objects.

## OUTPUTS

###  
This cmdlet modifies an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy

## NOTES

## RELATED LINKS

[New-CsHostedVoicemailPolicy](New-CsHostedVoicemailPolicy.md)

[Remove-CsHostedVoicemailPolicy](Remove-CsHostedVoicemailPolicy.md)

[Get-CsHostedVoicemailPolicy](Get-CsHostedVoicemailPolicy.md)

[Grant-CsHostedVoicemailPolicy](Grant-CsHostedVoicemailPolicy.md)
