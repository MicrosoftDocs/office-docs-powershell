---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsPublicProvider
schema: 2.0.0
---

# Set-CsPublicProvider

## SYNOPSIS
Modifies a public provider currently configured for use in your organization.
A public provider is an organization that provides instant messaging (IM), presence and related services to the general public.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsPublicProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Enabled <Boolean>]
 [-VerificationLevel <VerificationLevelType>] [-WhatIf] [-Confirm] [-Force] [<CommonParameters>]
```

### Instance
```
Set-CsPublicProvider [-Instance <PSObject>] [-Enabled <Boolean>] [-VerificationLevel <VerificationLevelType>]
 [-WhatIf] [-Confirm] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider and 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype (depending on how you have configured your system) your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you will need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) You can create federation relationships with these public providers by using the `New-CsPublicProvider` cmdlet.
After federated relationships have been established, you can then use the `Set-CsPublicProvider` cmdlet to modify two important property values -- Enabled and VerificationLevel -- of these relationships.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsPublicProvider -Identity "Skype" -VerificationLevel "AlwaysVerifiable"
```

Example 1 sets the VerificationLevel for the public provider with the Identity Skype.
This is done by including the VerificationLevel parameter and the parameter value AlwaysVerifiable.


### -------------------------- Example 2 ------------------------
```
Get-CsPublicProvider | Set-CsPublicProvider -VerificationLevel "AlwaysVerifiable"
```

In Example 2, the verification level is modified for all the public providers currently in use in the organization.
To do this, the command first calls the `Get-CsPublicProvider` cmdlet without any parameters in order to return a collection of all the public providers currently configured for use.
This collection is then piped to the `Set-CsPublicProvider` cmdlet, which takes each provider in the collection and changes the value of the VerificationLevel property to AlwaysVerifiable.


### -------------------------- Example 3 --------------------------
```
Get-CsPublicProvider | Where-Object {$_.VerificationLevel -eq "AlwaysUnverifiable"} | Set-CsPublicProvider -VerificationLevel "AlwaysVerifiable"
```

The command shown in Example 3 modifies the verification level for any public provider where that level is currently set to AlwaysUnverifiable.
To accomplish this task, the command first calls the `Get-CsPublicProvider` cmdlet in order to return a collection of all the public providers configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those providers where the VerificationLevel property is equal to AlwaysUnverifiable.
In turn, this filtered collection is piped to the `Set-CsPublicProvider` cmdlet, which changes the VerificationLevel for each provider in the collection to AlwaysVerifiable.


## PARAMETERS

### -Identity
Unique identifier for the public provider to be modified.
The Identity is typically the name of the website providing the services.


```yaml
Type: XdsGlobalRelativeIdentity
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

### -Enabled
Indicates whether or not the federation relationship between your organization and the public provider is active.
If set to True, users in your organization will be able to exchange instant messages and presence information with users who have accounts hosted on the public provider.
If set to False, users in your organization will not be able to exchange instant messages and presence information with users who have accounts hosted on the public provider.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerificationLevel
Indicates how (or if) messages sent from a public provider are verified to ensure that they were sent from that provider.
The VerificationLevel must be set to one of the following values:

AlwaysVerifiable.
All messages purportedly sent from this provider will be accepted.
If a verification header is not found in the message it will be added by Skype for Business Server.
This is the default value.

AlwaysUnverifiable.
All messages purportedly sent from a public provider are considered unverified.
They will be delivered only if they were sent from a person who is on the recipient's Contacts list.
For example, if Ken Myer is on your Contacts list you will be able to receive messages from him.
If Pilar Ackerman is not on your Contacts list then you will not be able to receive messages from her.
Note that Skype for Business users can manually override this setting, thereby allowing themselves to receive messages people not on their Contacts list.

UseSourceVerification.
Uses the verification header added to the message by the public provider.
If the verification information is missing the message will be rejected.
This value has been deprecated for use in Skype for Business Server.


```yaml
Type: VerificationLevelType
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

### -Force
Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.
The `Set-CsPublicProvider` cmdlet accepts pipelined instances of the public provider object.

## OUTPUTS

###  
The `Set-CsPublicProvider` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS

[Disable-CsPublicProvider](Disable-CsPublicProvider.md)

[Enable-CsPublicProvider](Enable-CsPublicProvider.md)

[Get-CsPublicProvider](Get-CsPublicProvider.md)

[New-CsPublicProvider](New-CsPublicProvider.md)

[Remove-CsPublicProvider](Remove-CsPublicProvider.md)
