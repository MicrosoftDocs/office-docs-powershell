---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsHostedVoicemailPolicy

## SYNOPSIS

Creates a new hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsHostedVoicemailPolicy [-Identity] <XdsIdentity> [-Description <String>] [-Destination <String>]
 [-Organization <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a policy that configures a user account enabled for Skype for Business Server to use an Exchange Unified Messaging (UM) hosted voice mail service.
The policy determines how to route unanswered calls to the user to a hosted Exchange UM service.

A user must be enabled for Exchange UM hosted voice mail for this policy to take effect.
You can call the Get-CsUser cmdlet and check the HostedVoiceMail property to determine whether a user is enabled for hosted voice mail.
(A value of True means the user is enabled.)

Policies created at the site scope will be automatically assigned to the users homed on those sites.
Policies created at the per-user scope must be assigned to users or contact objects with the Grant-CsHostedVoicemailPolicy cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsHostedVoicemailPolicy -Identity ExRedmond -Destination ExUM.fabrikam.com -Description "Hosted voicemail policy for Redmond users." -Organization "corp1.litwareinc.com, corp2.litwareinc.com"
```

This command creates a new hosted voice mail policy named ExRedmond.
(The fact that no scope is specified means that this policy can be assigned to individual users or contacts.) This policy defines the Exchange UM destination for this policy to be at FQDN ExUM.fabrikam.com.
In addition, the Skype for Business Server users of this policy can be spread across the corp1 and corp2 organizations of litwareinc.
This policy is described as (has a Description parameter value of) "Hosted voice mail property for Redmond users."



### -------------------------- Example 2 -------------------------- 
```
$x = New-CsHostedVoiceMailPolicy -Identity global -Tenant "73d355dd-ce5d-4ab9-bf49-7b822c18dd98" -Destination ExUM.fabrikam.com -Description "Hosted voicemail policy for Redmond users." -Organization "corp1.litwareinc.com, corp2.litwareinc.com"

Set-CsHostedVoiceMailPolicy -Instance $x -Tenant "73d355dd-ce5d-4ab9-bf49-7b822c18dd98"

```

The commands shown in Example 2 are a variation of the command shown in Example 1; in this case, however, the new hosted voicemail policy is assigned to the Skype for Business Online tenant with the tenant ID 73d355dd-ce5d-4ab9-bf49-7b822c18dd98.
To create a new policy for a Skype for Business Online tenant you must include the InMemory parameter and store the resulting policy in a variable.
That's what happens in the first command, with the new policy stored in a variable named $x.
Note, too that you must set the Identity to Global and the Tenant parameter to the appropriate tenant ID.

To create the new policy, the second command then calls the Set-CsHostedVoiceMailPolicy cmdlet along with the Instance parameter and the Tenant parameter.


## PARAMETERS

### -Identity
A unique identifier for the policy, which includes the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as RenoHostedVoicemail).
A global policy will always exist and can't be removed, so you cannot create a global policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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

This parameter is optional, but if you attempt to enable a user for hosted voice mail and the user's assigned policy does not have a Destination value, the enable will fail.

This value must be 255 characters or less and in the form of an FQDN, such as server.litwareinc.com.



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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new hosted voicemail policy is being created.
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy

## NOTES

## RELATED LINKS

[Remove-CsHostedVoicemailPolicy]()

[Set-CsHostedVoicemailPolicy]()

[Get-CsHostedVoicemailPolicy]()

[Grant-CsHostedVoicemailPolicy]()

